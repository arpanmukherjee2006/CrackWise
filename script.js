(function () {
  const LS_KEYS = { user: 'smartstudy_user', exam: 'smartstudy_exam', progress: 'smartstudy_progress', theme: 'smartstudy_theme' };
  let supabaseClient = null; function getSupabase(){ if (supabaseClient) return supabaseClient; if (window.supabase && window.__SUPABASE_URL && window.__SUPABASE_ANON_KEY){ supabaseClient = window.supabase.createClient(window.__SUPABASE_URL, window.__SUPABASE_ANON_KEY); return supabaseClient; } return null; }
  const byId = (id) => document.getElementById(id);
  function debounce(fn, d){ let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a), d); }; }
  const getUser = async ()=>{ const sb=getSupabase(); if(!sb){ try{return JSON.parse(localStorage.getItem(LS_KEYS.user)||'null');}catch{return null;} } const {data}=await sb.auth.getUser(); return data?.user||null; };
  const setUserLegacy=(u)=>localStorage.setItem(LS_KEYS.user, JSON.stringify(u)); const clearUserLegacy=()=>localStorage.removeItem(LS_KEYS.user);
  const getExam=()=>localStorage.getItem(LS_KEYS.exam); const setExam=(e)=>localStorage.setItem(LS_KEYS.exam, e);
  const getProgress=()=>{ try{return JSON.parse(localStorage.getItem(LS_KEYS.progress)||'{}');}catch{return{};} }; const setProgress=(p)=>localStorage.setItem(LS_KEYS.progress, JSON.stringify(p));
  const getTheme=()=> 'dark'; const setTheme=(t)=>{};
  function applyTheme(){ const root=document.documentElement; root.classList.add('dark'); const btn=byId('theme-toggle'); if(btn) btn.remove(); }
  const toggleTheme=()=>{};
  async function upsertProfileExam(exam, fullName, email){ const sb=getSupabase(); if(!sb) return; try{ const {data:s}=await sb.auth.getUser(); const u=s?.user; if(!u) return; await sb.from('profiles').upsert({id:u.id, exam, full_name: fullName, email: email, updated_at: new Date().toISOString()},{onConflict:'id'});}catch{}}
  async function fetchUserExamFromSupabase(){ const sb=getSupabase(); if(!sb) return null; try{ const {data:s}=await sb.auth.getUser(); const u=s?.user; if(!u) return null; const {data}=await sb.from('profiles').select('exam').eq('id',u.id).single(); return data?.exam || null;}catch{return null;}}
  async function fetchProgressFromSupabase(){ const sb=getSupabase(); if(!sb) return; try{ const {data:s}=await sb.auth.getUser(); const u=s?.user; if(!u) return; const {data}=await sb.from('progress').select('exam,subject,chapter,completed').eq('user_id',u.id); if(!Array.isArray(data))return; const p=getProgress(); data.forEach(r=>{p[`${r.exam}::${r.subject}::${r.chapter}`]=!!r.completed;}); setProgress(p); return p;}catch(err){console.error('Error fetching progress:', err); return getProgress();}}
  async function upsertProgressToSupabase(exam,subject,chapter,completed){ const sb=getSupabase(); if(!sb) return; try{ const {data:s}=await sb.auth.getUser(); const u=s?.user; if(!u) return; await sb.from('progress').upsert({user_id:u.id,exam,subject,chapter,completed,updated_at:new Date().toISOString()},{onConflict:'user_id,exam,subject,chapter'});}catch{}}
  let DATA=null, FILTER_TEXT='', SUBJECT_CACHE=null;
  async function handleEmailConfirmation(){ const sb=getSupabase(); if(!sb) return; const urlParams=new URLSearchParams(window.location.search); const {data,error}=await sb.auth.getSession(); if(urlParams.get('type')==='signup' || urlParams.get('type')==='email'){ if(data?.session?.user){ window.location.href='index.html'; return; } } if(urlParams.get('type')==='recovery'){ if(data?.session?.user){ window.location.href='study.html'; return; } } if(urlParams.get('type')==='magiclink' || urlParams.get('type')==='otp'){ if(data?.session?.user){ // Fetch user exam preference from profiles table
        try {
          const { data: profileData } = await sb.from('profiles').select('exam').eq('id', data.session.user.id).single();
          if (profileData?.exam) {
            setExam(profileData.exam);
          } else {
            // If no profile exists yet, try to get from user metadata
            const metaExam = data.session.user.user_metadata?.exam;
            if (metaExam) {
              setExam(metaExam);
              // Create profile entry
              await sb.from('profiles').upsert({
                id: data.session.user.id,
                full_name: data.session.user.user_metadata?.full_name || '',
                email: data.session.user.email,
                exam: metaExam,
                updated_at: new Date().toISOString()
              }, {onConflict: 'id'});
            }
          }
        } catch (err) {
          console.error('Error fetching user profile:', err);
        }
        window.location.href='study.html'; return; } } }
  function initCommon(){ const y=byId('year'); if(y) y.textContent=String(new Date().getFullYear()); applyTheme(); }
  function initSignup(){ const f=byId('signup-form'); if(!f) return; f.addEventListener('submit', async (e)=>{ e.preventDefault(); const name=byId('name').value.trim(); const email=byId('email').value.trim().toLowerCase(); const password=byId('password').value; const exam=(f.querySelector('input[name="exam"]:checked')||{}).value; const err=byId('signup-error'); if(!name||!email||!password||!exam){ err.textContent='Please fill all fields and select an exam.'; return;} const sb=getSupabase(); if(!sb){ setUserLegacy({name,email,passwordHash:btoa(password)}); setExam(exam); err.textContent=''; window.location.href='study.html'; return;} const {error}=await sb.auth.signUp({email,password,options:{data:{full_name:name,exam}}}); if(error){ err.textContent=error.message; return;} await upsertProfileExam(exam, name, email); // Create profiles table entry if it doesn't exist
try {
  await sb.from('profiles').upsert({
    id: (await sb.auth.getUser()).data.user.id,
    full_name: name,
    email: email,
    exam: exam,
    updated_at: new Date().toISOString()
  }, {onConflict: 'id'});
} catch (profileError) {
  console.error('Error creating profile:', profileError);
}
err.textContent='Account created! Please check your email to verify, then login from the home page.'; setTimeout(()=>window.location.href='index.html',2000); }); }
  async function initLanding(){ const loginOpen=byId('login-open'); const loginOpenLanding=byId('login-open-landing'); const loginModal=byId('login-modal'); const loginClose=byId('login-close'); const loginForm=byId('login-form'); const loginError=byId('login-error'); const goDashBtn=byId('go-dashboard-cta'); const goDashHero=byId('go-dashboard-cta-hero'); const userMenu=byId('user-menu'); const authCtas=byId('auth-ctas'); const logoutBtn=byId('logout-btn'); const greeting=byId('user-greeting'); const startSmartPrep=byId('start-smart-prep'); const profileBtn=byId('profile-btn'); const profileDropdown=byId('profile-dropdown'); const userInitial=byId('user-initial'); const sendMagicBtn=byId('send-magic');
    if(loginOpen) loginOpen.addEventListener('click',()=>loginModal.showModal()); if(loginOpenLanding) loginOpenLanding.addEventListener('click',()=>loginModal.showModal()); if(loginClose) loginClose.addEventListener('click',()=>loginModal.close());
    if(startSmartPrep) startSmartPrep.addEventListener('click', async ()=>{ const user=await getUser(); if(user){ window.location.href='study.html'; } else { loginModal.showModal(); } });
    
    // Profile dropdown functionality
    if(profileBtn && profileDropdown) {
      profileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !profileDropdown.classList.contains('hidden');
        if (isOpen) {
          profileDropdown.classList.add('hidden');
          profileDropdown.classList.remove('show');
        } else {
          profileDropdown.classList.remove('hidden');
          profileDropdown.classList.add('show');
        }
        profileBtn.setAttribute('aria-expanded', !isOpen);
      });
      
      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!profileBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
          profileDropdown.classList.add('hidden');
          profileDropdown.classList.remove('show');
          profileBtn.setAttribute('aria-expanded', 'false');
        }
      });
      
      // Close dropdown on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !profileDropdown.classList.contains('hidden')) {
          profileDropdown.classList.add('hidden');
          profileDropdown.classList.remove('show');
          profileBtn.setAttribute('aria-expanded', 'false');
          profileBtn.focus();
        }
      });
    }
    
    if(loginForm) loginForm.addEventListener('submit', async (e)=>{ e.preventDefault(); const email=byId('login-email').value.trim().toLowerCase(); const password=byId('login-password').value; const sb=getSupabase(); if(!sb){ const saved=(function(){ try{ return JSON.parse(localStorage.getItem(LS_KEYS.user)||'null'); }catch{return null;} })(); if(!saved || saved.email!==email || saved.passwordHash!==btoa(password)){ loginError.textContent='Invalid email or password.'; return; } loginError.textContent=''; loginModal.close(); await renderAuthState(); window.location.href='study.html'; return; } const {error:signInErr}=await sb.auth.signInWithPassword({email,password}); if(signInErr){ if(/email|confirm/i.test(signInErr.message)) loginError.textContent='Please verify your email. Use Resend verification.'; else loginError.textContent=signInErr.message||'Invalid email or password.'; return; } loginError.textContent=''; loginModal.close(); const me=await getUser(); let userExam = await fetchUserExamFromSupabase(); if(!userExam) { const metaExam=me?.user_metadata?.exam; const userName=me?.user_metadata?.full_name; const userEmail=me?.email; if(metaExam) { userExam = metaExam; await upsertProfileExam(metaExam, userName, userEmail); } } if(userExam) setExam(userExam); await renderAuthState(); window.location.href='study.html'; });
    if(sendMagicBtn) sendMagicBtn.addEventListener('click', async ()=>{ const email=byId('login-email').value.trim().toLowerCase(); if(!email){ loginError.textContent='Please enter your email first.'; return; } const sb=getSupabase(); if(!sb){ loginError.textContent='Magic link not available in offline mode.'; return; } loginError.textContent='Sending OTP...'; const {error}=await sb.auth.signInWithOtp({email, options: {emailRedirectTo: window.location.origin + '/index.html'}}); if(error){ loginError.textContent=error.message; loginError.style.color='red'; } else { loginError.textContent='OTP sent! Check your email for verification link.'; loginError.style.color='green'; setTimeout(()=>{loginError.style.color=''; loginError.textContent='';}, 5000); } });
    if(logoutBtn) logoutBtn.addEventListener('click', async ()=>{ const sb2=getSupabase(); if(sb2) await sb2.auth.signOut(); else clearUserLegacy(); window.location.reload(); });
    async function renderAuthState(){ const user=await getUser(); const showDash = !!user; if (greeting && user) { const name = user.user_metadata?.full_name || user.email; greeting.textContent = name; if(userInitial) userInitial.textContent = name.charAt(0).toUpperCase(); } if(authCtas) authCtas.classList.toggle('hidden', showDash); if(userMenu) userMenu.classList.toggle('hidden', !showDash); if(goDashBtn) goDashBtn.classList.toggle('hidden', !showDash); if(goDashHero) goDashHero.classList.toggle('hidden', !showDash); if(loginOpenLanding) loginOpenLanding.classList.toggle('hidden', showDash); if(startSmartPrep) startSmartPrep.textContent = showDash ? 'Go to Study Materials' : 'Start Smart Prep'; const profileLink = byId('profile-link'); if(profileLink) profileLink.href = 'profile.html'; }
    await renderAuthState(); }
  async function initProfile(){ const user=await getUser(); if(!user && window.location.pathname.includes('profile.html')){ window.location.href='index.html'; return; } let userExam = await fetchUserExamFromSupabase(); if(userExam) setExam(userExam); const logoutBtn=byId('logout-btn'); const greeting=byId('user-greeting'); const profileBtn=byId('profile-btn'); const profileDropdown=byId('profile-dropdown'); const userInitial=byId('user-initial'); const fullNameInput=byId('full-name'); const emailInput=byId('email'); const examSelect=byId('exam-select'); const resetProgressBtn=byId('reset-progress');
    
    // Profile dropdown functionality
    
    // Fill user information
    if(fullNameInput && user.user_metadata?.full_name) {
      fullNameInput.value = user.user_metadata.full_name;
    }
    
    if(emailInput && user.email) {
      emailInput.value = user.email;
    }
    
    if(examSelect) {
      const currentExam = getExam() || 'JEE';
      examSelect.value = currentExam;
      
      examSelect.addEventListener('change', function() {
        setExam(this.value);
        hydrateProfile();
        if(getSupabase()) {
          saveUserExamToSupabase(this.value);
        }
      });
    }
    
    if(resetProgressBtn) {
      resetProgressBtn.addEventListener('click', function() {
        if(confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
          localStorage.removeItem('smartstudy_progress');
          if(getSupabase()) {
            saveProgressToSupabase({});
          }
          hydrateProfile();
        }
      });
    }
    if(profileBtn && profileDropdown) {
      profileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !profileDropdown.classList.contains('hidden');
        if (isOpen) {
          profileDropdown.classList.add('hidden');
          profileDropdown.classList.remove('show');
        } else {
          profileDropdown.classList.remove('hidden');
          profileDropdown.classList.add('show');
        }
        profileBtn.setAttribute('aria-expanded', !isOpen);
      });
      
      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!profileBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
          profileDropdown.classList.add('hidden');
          profileDropdown.classList.remove('show');
          profileBtn.setAttribute('aria-expanded', 'false');
        }
      });
      
      // Close dropdown on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !profileDropdown.classList.contains('hidden')) {
          profileDropdown.classList.add('hidden');
          profileDropdown.classList.remove('show');
          profileBtn.setAttribute('aria-expanded', 'false');
          profileBtn.focus();
        }
      });
    }
    
    if(logoutBtn) logoutBtn.addEventListener('click', async ()=>{ const sb2=getSupabase(); if(sb2) await sb2.auth.signOut(); else clearUserLegacy(); window.location.href='index.html'; });
    if(greeting && user) {
      const name = user.user_metadata?.full_name || user.email;
      greeting.textContent = name;
      if(userInitial) userInitial.textContent = name.charAt(0).toUpperCase();
    }
    const onSearch=debounce((v)=>{ const val=v.toLowerCase(); if(val===FILTER_TEXT) return; FILTER_TEXT=val; renderSubjects(); }, 120); if(searchInput) searchInput.addEventListener('input',(e)=>onSearch(e.target.value)); if(searchInputMobile) searchInputMobile.addEventListener('input',(e)=>{ if(searchInput) searchInput.value=e.target.value; onSearch(e.target.value); }); if(mobileSearchBtn&&mobileSearch&&searchInputMobile) mobileSearchBtn.addEventListener('click', ()=>{ const isHidden=mobileSearch.classList.contains('hidden'); mobileSearch.classList.toggle('hidden'); if(isHidden) setTimeout(()=>searchInputMobile.focus(),0); });
    // Load data with performance optimization
    try{
      // Use cached data if available and recent (within 5 minutes)
      const cachedData = localStorage.getItem('study_data_cache');
  const cacheTimestamp = localStorage.getItem('study_data_timestamp');
      const now = Date.now();
      const fiveMinutes = 5 * 60 * 1000;
      
      if (cachedData && cacheTimestamp && (now - parseInt(cacheTimestamp)) < fiveMinutes) {
        DATA = JSON.parse(cachedData);
      } else {
        // Fetch fresh data
        const response = await fetch('data.json', {
          cache: 'default', // Use browser cache when appropriate
          headers: {
            'Cache-Control': 'max-age=300' // 5 minutes cache
          }
        });
        DATA = await response.json();
        
        // Cache the data
        localStorage.setItem('study_data_cache', JSON.stringify(DATA));
  localStorage.setItem('study_data_timestamp', now.toString());
      }
    } catch(error) {
      console.error('Failed to load data.json:', error);
      // Try to use cached data even if expired
      const cachedData = localStorage.getItem('study_data_cache');
      if (cachedData) {
        DATA = JSON.parse(cachedData);
      }
    }
    if(getSupabase()) await fetchProgressFromSupabase();
    hydrateProfile(); }
  function hydrateProfile(){
    const exam=getExam();
    const pill=byId('selected-exam-pill');
    if(pill) pill.textContent=`Exam: ${exam||'—'}`;
    const titleEl=byId('dashboard-title');
    if(titleEl && exam) titleEl.textContent=`Your ${exam} Profile`;
    if (exam) {
      try { document.title = `${exam} Profile – CrackWise`; } catch {}
    }
    renderSubjects();
    renderProgress();
  }
  function getVisibleSubjects(){ 
  const exam=getExam(); 
  if(!exam) return []; 
  
  // For JEE, use the data from the respective data files
  if (exam === 'JEE') {
    const subjects = [];
    
    // Add Mathematics chapters from MATHEMATICS_DATA
    if (window.MATHEMATICS_DATA) {
      const mathChapters = [];
      for (const [key, chapter] of Object.entries(window.MATHEMATICS_DATA)) {
        if (key !== 'title' && key !== 'weightage' && key !== 'introduction' && key !== 'topics') {
          mathChapters.push({
            name: chapter.title,
            weightage: chapter.weightage,
            introduction: chapter.introduction,
            key: key
          });
        }
      }
      if (mathChapters.length > 0) {
        subjects.push({subject: 'Mathematics', chapters: mathChapters});
      }
    }
    
    // Add Chemistry chapters from CHEMISTRY_DATA
    if (window.CHEMISTRY_DATA) {
      const chemChapters = [];
      for (const [key, chapter] of Object.entries(window.CHEMISTRY_DATA)) {
        if (key !== 'title' && key !== 'weightage' && key !== 'introduction' && key !== 'topics') {
          chemChapters.push({
            name: chapter.title,
            weightage: chapter.weightage,
            introduction: chapter.introduction,
            key: key
          });
        }
      }
      if (chemChapters.length > 0) {
        subjects.push({subject: 'Chemistry', chapters: chemChapters});
      }
    }
    
    // Add Physics chapters from PHYSICS_DATA
    if (window.PHYSICS_DATA) {
      const physicsChapters = [];
      for (const [key, chapter] of Object.entries(window.PHYSICS_DATA)) {
        if (key !== 'title' && key !== 'weightage' && key !== 'introduction' && key !== 'topics') {
          physicsChapters.push({
            name: chapter.title,
            weightage: chapter.weightage,
            introduction: chapter.introduction,
            key: key
          });
        }
      }
      if (physicsChapters.length > 0) {
        subjects.push({subject: 'Physics', chapters: physicsChapters});
      }
    }
    
    return subjects;
  }
  
  // For NEET, use the data from the respective data files
  if (exam === 'NEET') {
    const subjects = [];
    
    // Add Physics chapters from NEET_PHYSICS_DATA
    if (window.NEET_PHYSICS_DATA) {
      const physicsChapters = [];
      for (const [key, chapter] of Object.entries(window.NEET_PHYSICS_DATA)) {
        if (key !== 'title' && key !== 'weightage' && key !== 'introduction' && key !== 'topics') {
          physicsChapters.push({
            name: chapter.title,
            weightage: chapter.weightage,
            introduction: chapter.introduction,
            key: key
          });
        }
      }
      if (physicsChapters.length > 0) {
        subjects.push({subject: 'Physics', chapters: physicsChapters});
      }
    }
    
    // Add Chemistry chapters from NEET_CHEMISTRY_DATA
    if (window.NEET_CHEMISTRY_DATA) {
      const chemChapters = [];
      for (const [key, chapter] of Object.entries(window.NEET_CHEMISTRY_DATA)) {
        if (key !== 'title' && key !== 'weightage' && key !== 'introduction' && key !== 'topics') {
          chemChapters.push({
            name: chapter.title,
            weightage: chapter.weightage,
            introduction: chapter.introduction,
            key: key
          });
        }
      }
      if (chemChapters.length > 0) {
        subjects.push({subject: 'Chemistry', chapters: chemChapters});
      }
    }
    
    // Add Biology chapters from NEET_BIOLOGY_DATA
    if (window.NEET_BIOLOGY_DATA) {
      const bioChapters = [];
      for (const [key, chapter] of Object.entries(window.NEET_BIOLOGY_DATA)) {
        if (key !== 'title' && key !== 'weightage' && key !== 'introduction' && key !== 'topics') {
          bioChapters.push({
            name: chapter.title,
            weightage: chapter.weightage,
            introduction: chapter.introduction,
            key: key
          });
        }
      }
      if (bioChapters.length > 0) {
        subjects.push({subject: 'Biology', chapters: bioChapters});
      }
    }
    
    return subjects;
  }
  
  // Fallback to the old method
  if (DATA && DATA[exam]) {
    const examData = DATA[exam];
    return Object.entries(examData).map(([subjectName,value])=>({subject:subjectName,chapters:(value.chapters||[]).filter(c=>parseFloat(c.weightage)>=2||c.weightage.includes('%'))})); 
  }
  
  return [];
}
  function renderSubjects(){ const container=byId('subjects-container'); if(!container) return; const subjects=getVisibleSubjects(); const snapshot=JSON.stringify({ f:FILTER_TEXT, s:subjects.map(s=>({subject:s.subject,chapters:s.chapters.map(c=>({n:c.name,w:c.weightage}))})) }); if(SUBJECT_CACHE===snapshot) return; SUBJECT_CACHE=snapshot; const fragment=document.createDocumentFragment(); subjects.forEach(({subject,chapters})=>{ const section=document.createElement('section'); section.className='subject-section'; const header=document.createElement('div'); header.className='subject-header'; header.innerHTML=`<h3>${subject}</h3>`; section.appendChild(header); const grid=document.createElement('div'); grid.className='card-grid'; section.appendChild(grid);
  
  // Handle sorting with both numeric and string weightage
  const parseWeight = (w) => typeof w === 'string' ? parseFloat(w.replace('%', '')) : w;
  chapters.sort((a,b)=>parseWeight(b.weightage)-parseWeight(a.weightage)).filter(chapterMatchesSearch).forEach(ch=>{ const card=document.createElement('article'); card.className='card'; card.tabIndex=0; card.role='button'; if(isChapterCompleted(subject,ch.name)) card.classList.add('completed');
  
  const weightageDisplay = ch.weightage.includes && ch.weightage.includes('%') ? ch.weightage : `${ch.weightage}%`;
  card.innerHTML=`<h4 class="card-title">${ch.name}</h4><p class="card-sub"><span class="weight">${weightageDisplay}</span> weightage</p>`; card.addEventListener('click',()=>openChapter(subject,ch)); card.addEventListener('keydown',(e)=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); openChapter(subject,ch);} }); grid.appendChild(card); }); fragment.appendChild(section); }); container.innerHTML=''; container.appendChild(fragment); }
  function chapterMatchesSearch(ch){ if(!FILTER_TEXT) return true; const s=FILTER_TEXT; return ch.name.toLowerCase().includes(s) || (ch.keywords||[]).some(k=>k.toLowerCase().includes(s)) || (ch.topics||[]).some(t=>(typeof t === 'string' ? t : t.name || '').toLowerCase().includes(s)); }
  function isChapterCompleted(subject,chapterName){ const exam=getExam(); const p=getProgress(); return !!p[`${exam}::${subject}::${chapterName}`]; }
  async function setChapterCompleted(subject,chapterName,completed){ const exam=getExam(); const p=getProgress(); p[`${exam}::${subject}::${chapterName}`]=!!completed; setProgress(p); await upsertProgressToSupabase(exam,subject,chapterName,completed); renderProgress(); }
  function openChapter(subject,ch){ 
  // Store chapter key for direct access to chapter data
  window.currentChapterInfo = {
    subject: subject,
    chapter: ch.name,
    chapterKey: ch.key
  };
  
  const modal=byId('chapter-modal'); 
  if(!modal) return; 
  byId('chapter-title').textContent=ch.name; 
  byId('chapter-subject-pill').textContent=subject; 
  byId('chapter-weightage-pill').textContent=ch.weightage.includes && ch.weightage.includes('%') ? ch.weightage : `${ch.weightage}%`;
  
  // Chapter introduction
  const introduction = byId('chapter-introduction');
  if(ch.introduction) {
    introduction.textContent = ch.introduction;
  } else {
    introduction.textContent = `This chapter covers important concepts in ${subject}. Visit the Study Materials page for detailed content, formulas, and practice questions.`;
  }
  
  // Display chapter topics if available
  const topicsContainer = byId('chapter-topics-container');
  const topicsList = byId('chapter-topics');
  
  if (topicsContainer && topicsList) {
    topicsList.innerHTML = '';
    
    // Get chapter data based on subject and chapter key
    let chapterData = null;
    const exam = getExam();
    
    if (exam === 'JEE') {
      if (subject === 'Mathematics' && window.MATHEMATICS_DATA && ch.key) {
        chapterData = window.MATHEMATICS_DATA[ch.key];
      } else if (subject === 'Chemistry' && window.CHEMISTRY_DATA && ch.key) {
        chapterData = window.CHEMISTRY_DATA[ch.key];
      } else if (subject === 'Physics' && window.PHYSICS_DATA && ch.key) {
        chapterData = window.PHYSICS_DATA[ch.key];
      }
    } else if (exam === 'NEET') {
      if (subject === 'Physics' && window.NEET_PHYSICS_DATA && ch.key) {
        chapterData = window.NEET_PHYSICS_DATA[ch.key];
      } else if (subject === 'Chemistry' && window.NEET_CHEMISTRY_DATA && ch.key) {
        chapterData = window.NEET_CHEMISTRY_DATA[ch.key];
      } else if (subject === 'Biology' && window.NEET_BIOLOGY_DATA && ch.key) {
        chapterData = window.NEET_BIOLOGY_DATA[ch.key];
      }
    }
    
    // Fallback to DATA object if no specific data found
    if (!chapterData && DATA && DATA[exam]) {
      const examData = DATA[exam];
      if (examData[subject] && examData[subject].chapters) {
        const foundChapter = examData[subject].chapters.find(c => c.name === ch.name);
        if (foundChapter) {
          chapterData = foundChapter;
        }
      }
    }
    
    // Display topics if available
    if (chapterData && chapterData.topics && chapterData.topics.length > 0) {
      chapterData.topics.forEach(topic => {
        const li = document.createElement('li');
        li.textContent = typeof topic === 'string' ? topic : (topic.name || '');
        topicsList.appendChild(li);
      });
      topicsContainer.style.display = 'block';
    } else if (ch.keywords && ch.keywords.length > 0) {
      // Fallback to keywords if topics not available
      ch.keywords.forEach(keyword => {
        const li = document.createElement('li');
        li.textContent = keyword;
        topicsList.appendChild(li);
      });
      topicsContainer.style.display = 'block';
    } else {
      topicsContainer.style.display = 'none';
    }
  }
  
  // Store current chapter info for startStudyForChapter function
  window.currentChapterInfo = { 
    subject: subject, 
    chapter: ch.name,
    chapterKey: ch.key // Store the chapter key for direct access to chapter data
  };
  
  byId('chapter-close').onclick=()=>modal.close(); 
  modal.showModal(); 
}
  
  // Function to start study for the currently opened chapter
  function startStudyForChapter() {
    const info = window.currentChapterInfo;
    if (!info) return;
    openStudyMaterials(info.subject, info.chapter, info.chapterKey);
  }
  
  // Function to close modal
  function closeModal() {
    const modal = byId('chapter-modal');
    if (modal) modal.close();
  }
  
  // Make functions globally available
  window.startStudyForChapter = startStudyForChapter;
  window.closeModal = closeModal;
  function renderProgress(){ const exam=getExam(); if(!exam||!DATA) return; const subjects=getVisibleSubjects(); const totalChapters=subjects.reduce((n,s)=>n+s.chapters.length,0); const completed=subjects.reduce((acc,s)=>acc+s.chapters.filter(c=>isChapterCompleted(s.subject,c.name)).length,0);
  
  // Handle both old numeric and new percentage string formats
  const parseWeight = (w) => typeof w === 'string' ? parseFloat(w.replace('%', '')) : w;
  const totalWeight=subjects.reduce((acc,s)=>acc+s.chapters.reduce((w,c)=>w+parseWeight(c.weightage),0),0); const covered=subjects.reduce((acc,s)=>acc+s.chapters.filter(c=>isChapterCompleted(s.subject,c.name)).reduce((w,c)=>w+parseWeight(c.weightage),0),0);
  
  const cc=byId('chapters-completed'), ct=byId('chapters-total'), cp=byId('chapters-percent'), mc=byId('marks-covered'), mt=byId('marks-total'); if(cc) cc.textContent=String(completed); if(ct) ct.textContent=String(totalChapters); if(cp) cp.textContent= totalChapters? String(Math.round((completed/totalChapters)*100)) : '0'; if(mc) mc.textContent=String(Math.round(covered)); if(mt) mt.textContent=String(Math.round(totalWeight)); const analytics=byId('subject-analytics'); if(!analytics) return; analytics.innerHTML=''; const frag=document.createDocumentFragment(); subjects.forEach(s=>{ const subjectWeight=s.chapters.reduce((w,c)=>w+parseWeight(c.weightage),0); const subjectCovered=s.chapters.filter(c=>isChapterCompleted(s.subject,c.name)).reduce((w,c)=>w+parseWeight(c.weightage),0); const pct=subjectWeight? Math.round((subjectCovered/subjectWeight)*100):0; const bar=document.createElement('div'); bar.className='bar'; bar.innerHTML=`<div class="bar-label"><span>${s.subject}</span><span>${pct}%</span></div><div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>`; frag.appendChild(bar); }); analytics.appendChild(frag); }
  document.addEventListener('DOMContentLoaded', ()=>{ initCommon(); handleEmailConfirmation(); if(byId('signup-form')) initSignup(); if(byId('landing')) initLanding(); if(byId('profile-link')) initProfile(); });
  
  // Function to open study materials with specific chapter
  function openStudyMaterials(subject = 'physics', chapterName = null, chapterKey = null) {
    const exam = getExam();
    if (!exam || !subject || !chapterName) return;
    
    // Use provided chapterKey or generate one from the chapter name
    const finalChapterKey = chapterKey || chapterName.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
      .replace(/\s+/g, '-'); // Replace spaces with hyphens
    
    // Store in localStorage for the study page to use
    localStorage.setItem('study_subject', subject.toLowerCase());
    localStorage.setItem('study_chapter', finalChapterKey);
    localStorage.setItem('study_chapter_name', chapterName);
    
    // Navigate to study page
    window.location.href = 'study.html';
  }
  
  // Make function globally available
  window.openStudyMaterials = openStudyMaterials;
})();