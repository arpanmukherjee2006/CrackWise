// Study Platform JavaScript
(function() {
    'use strict';

    // Global variables
    let currentChapter = null;
    let currentSubject = 'physics';
    let currentTab = 'explanation';
    let quizState = {
        currentQuestion: 0,
        answers: [],
        score: 0,
        completed: false
    };
    let mobileSearchVisible = false;
    
    // Performance optimization: Cache DOM elements
    const domCache = {};
    let dataLoaded = false;
    let loadingScreen = null;
    
    function getCachedElement(id) {
        if (!domCache[id]) {
            domCache[id] = document.getElementById(id);
        }
        return domCache[id];
    }
    
    // Show/hide loading screen
    function showLoading() {
        if (!loadingScreen) {
            loadingScreen = getCachedElement('loading-screen');
        }
        if (loadingScreen) {
            loadingScreen.classList.remove('hidden');
        }
    }
    
    function hideLoading() {
        if (!loadingScreen) {
            loadingScreen = getCachedElement('loading-screen');
        }
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            // Remove from DOM after animation
            setTimeout(() => {
                if (loadingScreen && loadingScreen.parentNode) {
                    loadingScreen.parentNode.removeChild(loadingScreen);
                }
            }, 500);
        }
    }
    
    // Wait for data to be loaded
    function waitForData() {
        return new Promise((resolve) => {
            if (dataLoaded && window.STUDY_DATA) {
                resolve();
                return;
            }
            
            const checkData = () => {
                // Check for exam type and load appropriate data
                const exam = localStorage.getItem('smartstudy_exam') || 'JEE';
                let hasRequiredData = false;
                
                if (exam === 'NEET') {
                    hasRequiredData = window.NEET_PHYSICS_DATA && window.NEET_CHEMISTRY_DATA && window.NEET_BIOLOGY_DATA;
                } else {
                    hasRequiredData = window.STUDY_DATA && window.CHEMISTRY_DATA && window.MATHEMATICS_DATA;
                }
                
                if (hasRequiredData) {
                    dataLoaded = true;
                    resolve();
                } else {
                    setTimeout(checkData, 50);
                }
            };
            checkData();
        });
    }

    // Subject data mapping - dynamic based on exam type
    function getSubjectData() {
        const exam = localStorage.getItem('smartstudy_exam') || 'JEE';
        
        if (exam === 'NEET') {
            return {
                physics: typeof NEET_PHYSICS_DATA !== 'undefined' ? NEET_PHYSICS_DATA : {},
                chemistry: typeof NEET_CHEMISTRY_DATA !== 'undefined' ? NEET_CHEMISTRY_DATA : {},
                biology: typeof NEET_BIOLOGY_DATA !== 'undefined' ? NEET_BIOLOGY_DATA : {
                    'placeholder': {
                        title: 'Biology (Coming Soon)',
                        weightage: 'TBD',
                        introduction: 'Biology content will be available soon.',
                        topics: []
                    }
                }
            };
        } else {
            return {
                physics: typeof STUDY_DATA !== 'undefined' ? STUDY_DATA : {},
                chemistry: typeof CHEMISTRY_DATA !== 'undefined' ? CHEMISTRY_DATA : {},
                mathematics: typeof MATHEMATICS_DATA !== 'undefined' ? MATHEMATICS_DATA : {
                    'placeholder': {
                        title: 'Mathematics (Coming Soon)',
                        weightage: 'TBD',
                        introduction: 'Mathematics content will be available soon.',
                        topics: []
                    }
                }
            };
        }
    }
    
    // Update subject data based on exam type
    function updateSubjectData() {
        SUBJECT_DATA = getSubjectData();
        // Update UI elements based on exam type
        const exam = localStorage.getItem('smartstudy_exam') || 'JEE';
        const examBadge = byId('exam-badge');
        if (examBadge) {
            examBadge.textContent = exam;
        }
        
        // Update tabs based on exam type
        const mathTab = byId('math-tab');
        const bioTab = byId('bio-tab');
        
        if (mathTab && bioTab) {
            if (exam === 'NEET') {
                mathTab.style.display = 'none';
                bioTab.style.display = 'block';
            } else {
                mathTab.style.display = 'block';
                bioTab.style.display = 'none';
            }
        }
    }
    
    let SUBJECT_DATA = getSubjectData();

    // Utility functions - optimized with caching
    const byId = (id) => getCachedElement(id);
    const getSupabase = () => {
        if (window.supabase && window.__SUPABASE_URL && window.__SUPABASE_ANON_KEY) {
            return window.supabase.createClient(window.__SUPABASE_URL, window.__SUPABASE_ANON_KEY);
        }
        return null;
    };

    // Theme management - Always dark mode
    function initTheme() {
        document.documentElement.classList.add('dark');
        // Remove theme toggle button if it exists
        const themeBtn = byId('theme-toggle');
        if (themeBtn) {
            themeBtn.remove();
        }
    }

    // Load progress data from Supabase
    async function loadProgressFromSupabase() {
        try {
            const sb = getSupabase();
            if (!sb) return;
            
            const user = await getUser();
            if (!user) return;
            
            // Fetch user's exam preference from profiles
            const { data: profileData } = await sb.from('profiles').select('exam').eq('id', user.id).single();
            
            // Set exam preference from Supabase or use default
            const exam = profileData?.exam || localStorage.getItem('smartstudy_exam') || 'JEE';
            console.log('Setting exam type from Supabase:', exam);
            localStorage.setItem('smartstudy_exam', exam);
            
            // We'll update subject data after loading progress
            // Don't call updateSubjectData() here to avoid conflicts with setupExamBasedSubjects
            
            // Fetch progress data
            const { data: progressData, error } = await sb.from('progress')
                .select('*')
                .eq('user_id', user.id)
                .eq('exam', exam);
                
            if (error) {
                console.error('Error fetching progress:', error);
                return;
            }
            
            if (progressData && progressData.length > 0) {
                // Convert Supabase progress format to local storage format
                const progress = JSON.parse(localStorage.getItem('smartstudy_progress') || '{}');
                
                progressData.forEach(item => {
                    if (item.completed) {
                        progress[`${item.exam}::${item.subject}::${item.chapter}`] = true;
                    }
                });
                
                localStorage.setItem('smartstudy_progress', JSON.stringify(progress));
                console.log('Progress loaded from Supabase:', progressData.length, 'items');
                
                // Update UI with new progress data
                updateProgress();
            }
            
            // Display exam type in UI
            const examTypeDisplay = byId('exam-type-display');
            if (examTypeDisplay) {
                examTypeDisplay.textContent = `${exam} Study Material`;
            }
            
            return exam; // Return the exam type for use in other functions
        } catch (error) {
            console.error('Error loading progress from Supabase:', error);
            return localStorage.getItem('smartstudy_exam') || 'JEE';
        }
    }
    
    // User authentication
    async function initAuth() {
        const user = await getUser();
        if (!user) {
            window.location.href = 'index.html';
            return;
        }

        // Load progress data from Supabase
        await loadProgressFromSupabase();
        
        const greeting = byId('user-greeting');
        const userInitial = byId('user-initial');
        if (greeting && user) {
            const name = user.user_metadata?.full_name || user.email;
            greeting.textContent = name;
            // Set first name as data attribute for mobile view
            const firstName = name.split(' ')[0];
            greeting.setAttribute('data-firstname', firstName);
            if (userInitial) userInitial.textContent = name.charAt(0).toUpperCase();
        }

        // Setup profile dropdown
        setupProfileDropdown();
        
        // Sync user exam preference and progress from Supabase
        const sb = getSupabase();
        if (sb) {
            try {
                // Fetch user exam preference
                const { data: profileData } = await sb.from('profiles').select('exam').eq('id', user.id).single();
                if (profileData?.exam) {
                    localStorage.setItem('smartstudy_exam', profileData.exam);
                } else {
                    // If no profile exists yet, try to get from user metadata
                    const metaExam = user.user_metadata?.exam;
                    if (metaExam) {
                        localStorage.setItem('smartstudy_exam', metaExam);
                        // Create profile entry
                        await sb.from('profiles').upsert({
                            id: user.id,
                            full_name: user.user_metadata?.full_name || '',
                            email: user.email,
                            exam: metaExam,
                            updated_at: new Date().toISOString()
                        }, {onConflict: 'id'});
                    }
                }
                
                // Fetch and sync progress data
                await fetchProgressFromSupabase();
                
                // Update subject data based on exam type
                SUBJECT_DATA = getSubjectData();
            } catch (err) {
                console.error('Error syncing user data:', err);
            }
        }
    }

    async function getUser() {
        const sb = getSupabase();
        if (!sb) {
            try {
                return JSON.parse(localStorage.getItem('smartstudy_user') || 'null');
            } catch {
                return null;
            }
        }
        const { data } = await sb.auth.getUser();
        return data?.user || null;
    }

    function setupProfileDropdown() {
        const profileBtn = byId('profile-btn');
        const profileDropdown = byId('profile-dropdown');
        const logoutBtn = byId('logout-btn');

        if (profileBtn && profileDropdown) {
            profileBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = !profileDropdown.classList.contains('hidden');
                profileDropdown.classList.toggle('hidden', isOpen);
                profileDropdown.classList.toggle('show', !isOpen);
                profileBtn.setAttribute('aria-expanded', !isOpen);
            });

            document.addEventListener('click', (e) => {
                if (!profileBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
                    profileDropdown.classList.add('hidden');
                    profileDropdown.classList.remove('show');
                    profileBtn.setAttribute('aria-expanded', 'false');
                }
            });
        }

        if (logoutBtn) {
            logoutBtn.addEventListener('click', async () => {
                const sb = getSupabase();
                if (sb) await sb.auth.signOut();
                else localStorage.removeItem('smartstudy_user');
                
                // Redirect to landing page
                window.location.href = 'index.html';
            });
        }
    }

    // Check user login status and update UI
    async function checkUserLoginStatus() {
        const user = await getUser();
        const userGreeting = byId('user-greeting');
        const userInitial = byId('user-initial');
        
        if (user) {
            // User is logged in
            // Update user greeting and initial
            if (userGreeting) {
                const name = user.user_metadata?.full_name || user.email || 'User';
                userGreeting.textContent = name;
                if (userInitial) userInitial.textContent = name.charAt(0).toUpperCase();
            }
        } else {
            // User is not logged in - redirect to landing page
            window.location.href = 'index.html';
        }
    }
    
    // Initialize the page
    async function initializePage() {
        try {
            showLoading();
            
            // Check user login status
            await checkUserLoginStatus();
            
            // Load progress from Supabase first
            await loadProgressFromSupabase();
            
            // Then setup subjects based on the exam type
            await setupExamBasedSubjects();
            
            // Check URL parameters for direct navigation
            const urlParams = new URLSearchParams(window.location.search);
            const urlSubject = urlParams.get('subject');
            const urlChapter = urlParams.get('chapter');
            
            // Get saved subject and chapter from localStorage
            const savedSubject = localStorage.getItem('study_subject');
            const savedChapter = localStorage.getItem('study_chapter');
            
            // Priority: URL parameters > localStorage > default
            // Set subject from URL if provided, otherwise use saved subject
            if (urlSubject && SUBJECT_DATA[urlSubject]) {
                currentSubject = urlSubject;
            } else if (savedSubject && SUBJECT_DATA[savedSubject]) {
                currentSubject = savedSubject;
            }
            
            setupSubjectTabs();
            loadChapterList();
            setupEventListeners();
            
            // Load specific chapter from URL, localStorage, or first chapter by default
            const currentData = SUBJECT_DATA[currentSubject];
            let chapterToLoad = null;
            
            // First try URL parameter
            if (urlChapter && currentData) {
                // First try to find chapter by exact key match
                if (currentData[urlChapter]) {
                    chapterToLoad = urlChapter;
                } else {
                    // If not found by key, try to find by title
                    Object.keys(currentData).forEach(chapterKey => {
                        if (currentData[chapterKey].title === urlChapter) {
                            chapterToLoad = chapterKey;
                        }
                    });
                    
                    // If still not found, try partial matching
                    if (!chapterToLoad) {
                        Object.keys(currentData).forEach(chapterKey => {
                            const title = currentData[chapterKey].title.toLowerCase();
                            const searchChapter = urlChapter.toLowerCase();
                            if (title.includes(searchChapter) || searchChapter.includes(title.split(' ')[0])) {
                                chapterToLoad = chapterKey;
                            }
                        });
                    }
                }
            }
            
            // If no chapter from URL, try localStorage
            if (!chapterToLoad && savedChapter && currentData[savedChapter]) {
                chapterToLoad = savedChapter;
            }
            
            // If still no specific chapter found, load first chapter
            if (!chapterToLoad && currentData) {
                chapterToLoad = Object.keys(currentData)[0];
            }
            
            if (chapterToLoad) {
                loadChapter(chapterToLoad);
            }
            
            // Hide loading screen after everything is set up
            setTimeout(() => {
                hideLoading();
            }, 500);
            
        } catch (error) {
            console.error('Error initializing page:', error);
            hideLoading();
        }
    }
    
    // Load progress from Supabase and sync with localStorage
    async function loadProgressFromSupabase() {
        try {
            const sb = getSupabase();
            const user = await getUser();
            
            if (!sb || !user) {
                console.log('No Supabase connection or user, using localStorage only');
                return;
            }
            
            console.log('Loading progress from Supabase for user:', user.id);
            
            // Fetch progress data from Supabase
            const { data: progressData, error: progressError } = await sb
                .from('progress')
                .select('*')
                .eq('user_id', user.id);
                
            if (progressError) {
                console.error('Error loading progress from Supabase:', progressError);
                return;
            }
            
            // Fetch quiz progress data from Supabase
            const { data: quizData, error: quizError } = await sb
                .from('quiz_progress')
                .select('*')
                .eq('user_id', user.id);
                
            if (quizError) {
                console.error('Error loading quiz progress from Supabase:', quizError);
            }
            
            // Sync progress data to localStorage
            if (progressData && progressData.length > 0) {
                const localProgress = JSON.parse(localStorage.getItem('smartstudy_progress') || '{}');
                
                progressData.forEach(item => {
                    const key = `${item.exam}::${item.subject}::${item.chapter}`;
                    localProgress[key] = item.completed;
                });
                
                localStorage.setItem('smartstudy_progress', JSON.stringify(localProgress));
                console.log('Synced progress from Supabase to localStorage:', progressData.length, 'items');
            }
            
            // Sync quiz progress data to localStorage
            if (quizData && quizData.length > 0) {
                const localQuizProgress = JSON.parse(localStorage.getItem('quiz_progress') || '[]');
                
                // Merge Supabase data with local data (keep most recent)
                quizData.forEach(supabaseItem => {
                    const existingIndex = localQuizProgress.findIndex(
                        local => local.chapter === supabaseItem.chapter
                    );
                    
                    if (existingIndex >= 0) {
                        // Update if Supabase data is more recent
                        if (new Date(supabaseItem.completed_at) > new Date(localQuizProgress[existingIndex].completed_at)) {
                            localQuizProgress[existingIndex] = {
                                chapter: supabaseItem.chapter,
                                score: supabaseItem.score,
                                completed_at: supabaseItem.completed_at
                            };
                        }
                    } else {
                        // Add new item
                        localQuizProgress.push({
                            chapter: supabaseItem.chapter,
                            score: supabaseItem.score,
                            completed_at: supabaseItem.completed_at
                        });
                    }
                });
                
                localStorage.setItem('quiz_progress', JSON.stringify(localQuizProgress));
                console.log('Synced quiz progress from Supabase to localStorage:', quizData.length, 'items');
            }
            
        } catch (error) {
            console.error('Error in loadProgressFromSupabase:', error);
        }
    }
    
    // Setup exam-based subjects
    async function setupExamBasedSubjects() {
        // Get exam type from localStorage, which should be set by loadProgressFromSupabase
        const exam = localStorage.getItem('smartstudy_exam') || 'JEE';
        console.log('Setting up subjects for exam type:', exam);
        
        const subjectTabs = document.querySelector('.subject-tabs');
        
        // Refresh subject data based on exam type
        SUBJECT_DATA = getSubjectData();
        
        if (exam === 'NEET') {
            // For NEET: Physics, Chemistry, Biology
            subjectTabs.innerHTML = `
                <button class="subject-tab active" data-subject="physics">📚 Physics</button>
                <button class="subject-tab" data-subject="chemistry">🧪 Chemistry</button>
                <button class="subject-tab" data-subject="biology">🧬 Biology</button>
            `;
            currentSubject = 'physics';
            
            // Make sure mathematics tab is hidden and biology tab is shown
            const mathTab = byId('math-tab');
            const bioTab = byId('bio-tab');
            if (mathTab) mathTab.style.display = 'none';
            if (bioTab) bioTab.style.display = 'block';
        } else {
            // For JEE: Physics, Chemistry, Mathematics
            subjectTabs.innerHTML = `
                <button class="subject-tab active" data-subject="physics">📚 Physics</button>
                <button class="subject-tab" data-subject="chemistry">🧪 Chemistry</button>
                <button class="subject-tab" data-subject="mathematics">📐 Mathematics</button>
            `;
            currentSubject = 'physics';
            
            // Make sure mathematics tab is shown and biology tab is hidden
            const mathTab = byId('math-tab');
            const bioTab = byId('bio-tab');
            if (mathTab) mathTab.style.display = 'block';
            if (bioTab) bioTab.style.display = 'none';
        }
        
        // Update page title
        const pageTitle = document.querySelector('title');
        if (pageTitle) {
            pageTitle.textContent = `${exam} Study Materials - CrackWise`;
        }
        
        // Update welcome message
        const welcomeTitle = document.querySelector('.welcome-message h2');
        if (welcomeTitle) {
            welcomeTitle.textContent = `Welcome to ${exam} Study`;
        }
    }
    
    // Setup subject tabs
    function setupSubjectTabs() {
        const subjectTabs = document.querySelectorAll('.subject-tab');
        subjectTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const subject = tab.dataset.subject;
                switchSubject(subject);
                // Update content tab label based on subject (Biology → Key Concepts)
                updateFormulasTabLabel();
            });
        });
        
        // Set initial active tab
        document.querySelector(`[data-subject="${currentSubject}"]`)?.classList.add('active');
        // Ensure correct label on first load
        updateFormulasTabLabel();
    }
    
    // Switch between subjects
    function switchSubject(subject) {
        currentSubject = subject;
        
        // Update active tab
        document.querySelectorAll('.subject-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`[data-subject="${subject}"]`)?.classList.add('active');
        
        // Clear current chapter to force fresh load
        currentChapter = null;
        
        // Reset quiz state
        quizState = {
            currentQuestion: 0,
            answers: [],
            score: 0,
            completed: false
        };
        
        // Clear all tab content first
        const explanationTab = byId('explanation-tab');
        const formulasTab = byId('formulas-tab');
        const quizTab = byId('problems-tab');
        
        if (explanationTab) {
            explanationTab.innerHTML = `
                <div class="welcome-message">
                    <div class="welcome-icon">📖</div>
                    <h2>Welcome to ${subject.charAt(0).toUpperCase() + subject.slice(1)} Study</h2>
                    <p>Select a chapter from the left sidebar to start studying.</p>
                </div>
            `;
        }
        
        if (formulasTab) {
            const formulasContent = formulasTab.querySelector('.formulas-content');
            if (formulasContent) {
                const isBiology = currentSubject === 'biology';
                formulasContent.innerHTML = `<p class="tab-instruction">Select a chapter to view its ${isBiology ? 'key concepts' : 'formulas'}</p>`;
            }
        }
        
        if (quizTab) {
            const quizContent = quizTab.querySelector('.quiz-content');
            if (quizContent) {
                quizContent.innerHTML = '<p class="tab-instruction">Select a chapter to take its quiz</p>';
            }
        }
        
        // Update chapter title
        const titleElement = byId('chapter-title');
        if (titleElement) titleElement.textContent = 'Select a Chapter';
        
        // Reload chapter list and content
        loadChapterList();
        
        // Load first chapter of new subject
        const currentData = SUBJECT_DATA[currentSubject];
        if (currentData && Object.keys(currentData).length > 0) {
            const firstChapter = Object.keys(currentData)[0];
            if (firstChapter) {
                loadChapter(firstChapter);
            }
        }
    }

    // Update the label of the formulas tab button based on subject
    function updateFormulasTabLabel() {
        const formulasTabBtn = document.querySelector('.tab-btn[data-tab="formulas"]');
        if (!formulasTabBtn) return;
        const isBiology = currentSubject === 'biology';
        // Keep the icon, just replace the label
        const icon = '📐';
        formulasTabBtn.textContent = `${icon} ${isBiology ? 'Key Concepts' : 'Formulas'}`;
    }
    
    // Load chapter list
    function loadChapterList() {
        const chapterList = document.getElementById('chapter-list');
        if (!chapterList) return;
        
        chapterList.innerHTML = '';
        
        const currentData = SUBJECT_DATA[currentSubject];
        Object.keys(currentData).forEach(chapterKey => {
            const chapter = currentData[chapterKey];
            const chapterItem = document.createElement('li');
            chapterItem.className = 'chapter-item';
            chapterItem.dataset.chapter = chapterKey;
            
            // Use consistent completion check
            const isCompleted = isChapterCompleted(chapterKey);
            
            chapterItem.innerHTML = `
                <h3>${chapter.title}</h3>
                <p>${chapter.weightage} weightage</p>
                <span class="status-badge ${isCompleted ? 'completed' : 'pending'}">
                    ${isCompleted ? 'Completed' : 'Pending'}
                </span>
            `;
            
            chapterItem.addEventListener('click', () => loadChapter(chapterKey));
            chapterList.appendChild(chapterItem);
        });
        
        updateProgress();
    }
    
    // Load chapter content
    function loadChapter(chapterKey) {
        const currentData = SUBJECT_DATA[currentSubject];
        const chapter = currentData[chapterKey];
        if (!chapter) {
            console.error('Chapter not found:', chapterKey, 'in subject:', currentSubject);
            return;
        }
        
        console.log('Loading chapter:', chapterKey, 'in subject:', currentSubject);
        
        currentChapter = chapterKey;
        
        // Save current subject and chapter to localStorage for persistence across sessions
        localStorage.setItem('study_subject', currentSubject);
        localStorage.setItem('study_chapter', chapterKey);
        
        // Update active chapter
        document.querySelectorAll('.chapter-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-chapter="${chapterKey}"]`)?.classList.add('active');
        
        // Update chapter title
        const titleElement = byId('chapter-title');
        if (titleElement) titleElement.textContent = chapter.title;
        
        // Check completion status using consistent method
        const isCompleted = isChapterCompleted(chapterKey);
        
        // Reset quiz state for new chapter
        const quizLength = chapter.quiz ? chapter.quiz.length : 0;
        quizState = {
            currentQuestion: 0,
            answers: new Array(quizLength).fill(-1),
            score: 0,
            completed: false
        };
        
        // Render current tab content
        renderTabContent(currentTab, chapter);
        
        console.log('Chapter loaded successfully:', chapter.title);
    }
    
    // Setup event listeners
    function setupEventListeners() {
        // This function can be used for additional event listeners if needed
    }

    // Chapter navigation
    function initChapterNavigation() {
        // This will be handled by loadChapterList() dynamically
    }

    function selectChapter(chapterKey) {
        loadChapter(chapterKey);
    }

    function updateChapterTitle(title) {
        const titleElement = byId('chapter-title');
        if (titleElement) titleElement.textContent = title;
    }

    // Tab management
    function initTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabName = btn.dataset.tab;
                switchTab(tabName);
            });
        });
    }

    function switchTab(tabName) {
        // Update active tab button
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Update active tab panel
        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        byId(`${tabName}-tab`).classList.add('active');

        currentTab = tabName;

        // Render content for current tab
        if (currentChapter) {
            const currentData = SUBJECT_DATA[currentSubject];
            const chapterData = currentData[currentChapter];
            renderTabContent(tabName, chapterData);
        }
    }

    // Content rendering
    function renderChapterContent(chapterData) {
        renderTabContent(currentTab, chapterData);
    }

    function renderTabContent(tabName, chapterData) {
        switch (tabName) {
            case 'explanation':
                renderExplanationTab(chapterData);
                break;
            case 'formulas':
                renderFormulasTab(chapterData);
                break;
            case 'quiz':
                renderQuizTab(chapterData);
                break;
        }
    }

    function renderExplanationTab(chapterData) {
        const explanationTab = byId('explanation-tab');
        
        // Track that user has visited explanation tab
        trackTabVisit('explanation');
        
        // Check completion status
        const isCompleted = isChapterCompleted(currentChapter);
        
        console.log('Rendering explanation tab for chapter:', currentChapter);
        console.log('Is completed:', isCompleted);
        
        explanationTab.innerHTML = `
            <div class="chapter-content">
                <div class="chapter-header-actions">
                    <div class="chapter-meta">
                        <span class="weightage-badge">${chapterData.weightage || 'Weightage not specified'} weightage</span>
                        <span class="questions-count">50 practice questions</span>
                    </div>
                    <div class="completion-actions">
                        <button id="toggle-completion" class="btn ${isCompleted ? 'success' : 'primary'} completion-btn">
                            ${isCompleted ? 'Complete' : 'Mark as Complete'}
                        </button>
                    </div>
                </div>
                <div class="chapter-intro">
                    <h2>Introduction</h2>
                    <p>${chapterData.introduction || 'Introduction not available for this chapter.'}</p>
                </div>
                <div class="topics-grid">
                    ${(chapterData.topics || []).map(topic => `
                        <div class="topic-card">
                            <h3>${topic.name || 'Topic'}</h3>
                            <p>${topic.description || 'Description not available'}</p>
                            ${topic.subtopics ? `
                                <div class="subtopics-section">
                                    ${topic.subtopics.map(subtopic => `
                                        <div class="subtopic-item">
                                            <h4>${subtopic.name || 'Subtopic'}</h4>
                                            <p class="subtopic-explanation">${subtopic.explanation || 'Explanation not available'}</p>
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Setup completion toggle functionality
        setupCompletionToggle();
    }

    function renderFormulasTab(chapterData) {
        const formulasTab = byId('formulas-tab');
        const formulasContent = formulasTab.querySelector('.formulas-content');
        
        // Track that user has visited formulas tab
        trackTabVisit('formulas');
        const isBiology = currentSubject === 'biology';
        
        if (isBiology) {
            // For Biology, render Key Concepts instead of formulas
            const keyConcepts = chapterData.key_concepts;
            if (!keyConcepts || Object.keys(keyConcepts).length === 0) {
                formulasContent.innerHTML = '<p class="tab-instruction">No key concepts available for this chapter</p>';
                return;
            }
            formulasContent.innerHTML = `
                <div class="formulas-section">
                    ${Object.entries(keyConcepts).map(([category, concepts]) => `
                        <div class="formula-category">
                            <h3>${category}</h3>
                            <div class="formula-list">
                                ${concepts.map(concept => `
                                    <div class="formula-item">
                                        <div class="formula-name">${concept.name || 'Concept'}</div>
                                        <div class="formula-description">${concept.description || ''}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            return;
        }

        // Default rendering for subjects with formulas
        if (!chapterData.formulas) {
            formulasContent.innerHTML = '<p class="tab-instruction">No formulas available for this chapter</p>';
            return;
        }

        formulasContent.innerHTML = `
            <div class="formulas-section">
                ${Object.entries(chapterData.formulas).map(([category, formulas]) => `
                    <div class="formula-category">
                        <h3>${category}</h3>
                        <div class="formula-list">
                            ${formulas.map(formula => `
                                <div class="formula-item">
                                    <div class="formula-name">${formula.name}</div>
                                    <div class="formula-expression">${formula.expression}</div>
                                    <div class="formula-description">${formula.description}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function renderQuizTab(chapterData) {
        const quizTab = byId('quiz-tab');
        const quizContent = quizTab.querySelector('.quiz-content');
        
        // Track that user has visited quiz tab (now problems tab)
        trackTabVisit('quiz');
        
        // Clear any existing content first to ensure clean state
        quizContent.innerHTML = '';
        
        // Check if we have problems instead of quiz
        if (chapterData.problems && chapterData.problems.length > 0) {
            renderProblemsInterface(chapterData);
            return;
        }
        
        // Fallback to quiz format if problems not available
        if (!chapterData.quiz || chapterData.quiz.length === 0) {
            quizContent.innerHTML = '<p class="tab-instruction">No problems available for this chapter</p>';
            return;
        }

        // Reset quiz state for new chapter
        quizState = {
            currentQuestion: 0,
            answers: new Array(chapterData.quiz.length).fill(-1),
            score: 0,
            completed: false
        };
        
        renderQuizInterface(chapterData);
    }

    // Setup completion toggle functionality using event delegation
    function setupCompletionToggle() {
        // Remove any existing event listeners on the explanation tab
        const explanationTab = byId('explanation-tab');
        if (explanationTab) {
            // Use event delegation to handle button clicks
            explanationTab.removeEventListener('click', handleCompletionToggle);
            explanationTab.addEventListener('click', handleCompletionToggle);
        }
    }
    
    // Handle completion toggle with event delegation
    function handleCompletionToggle(e) {
        // Check if the clicked element is the completion button
        if (e.target && e.target.id === 'toggle-completion') {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Toggle button clicked for chapter:', currentChapter);
            
            if (!currentChapter) {
                console.error('No current chapter selected');
                return;
            }
            
            // Get current status and toggle it
            const currentStatus = isChapterCompleted(currentChapter);
            const newStatus = !currentStatus;
            
            console.log('Current status:', currentStatus, 'New status:', newStatus);
            
            // Update completion status
            if (newStatus) {
                markChapterComplete(currentChapter);
            } else {
                markChapterIncomplete(currentChapter);
            }
            
            // Update button immediately
            const toggleBtn = e.target;
            if (newStatus) {
                toggleBtn.textContent = 'Complete';
                toggleBtn.className = 'btn success completion-btn';
                const currentData = SUBJECT_DATA[currentSubject];
                const chapterName = currentData[currentChapter].title;
                showCompletionMessage(chapterName);
            } else {
                toggleBtn.textContent = 'Mark as Complete';
                toggleBtn.className = 'btn primary completion-btn';
            }
            
            // Update chapter list and progress
            loadChapterList();
            updateProgress();
            
            console.log('Chapter completion updated successfully');
        }
    }

    function renderProblemsInterface(chapterData) {
        const quizContent = byId('quiz-tab').querySelector('.quiz-content');
        const totalProblems = chapterData.problems.length;

        quizContent.innerHTML = `
            <div class="problems-container">
                <div class="problems-header">
                    <h2>${chapterData.title} - Numerical Problems</h2>
                    <div class="problems-info">
                        <div class="problems-stat">
                            <span class="problems-stat-value">${totalProblems}</span>
                            <span class="problems-stat-label">Problems</span>
                        </div>
                        <div class="problems-stat">
                            <span class="problems-stat-value">Mixed</span>
                            <span class="problems-stat-label">Difficulty</span>
                        </div>
                        <div class="problems-stat">
                            <span class="problems-stat-value">${localStorage.getItem('smartstudy_exam') || 'JEE'}</span>
                            <span class="problems-stat-label">Level</span>
                        </div>
                    </div>
                </div>
                <div class="problems-list">
                    ${chapterData.problems.map((problem, index) => `
                        <div class="problem-card" data-problem="${index}">
                            <div class="problem-header">
                                <span class="problem-number">Problem ${index + 1}</span>
                                <span class="problem-difficulty ${problem.difficulty}">${problem.difficulty}</span>
                            </div>
                            <div class="problem-statement">${problem.problem}</div>
                            ${currentSubject === 'biology' && problem.options ? `
                            <div class="options-section">
                                <h4>📝 Options:</h4>
                                <ul class="options-list">
                                    ${Array.isArray(problem.options)
                                        ? problem.options.map((opt, oi) => `
                                            <li class="option-row"><span class="option-label">${String.fromCharCode(65 + oi)}.</span> <span class="option-text">${opt}</span></li>
                                        `).join('')
                                        : Object.keys(problem.options).map(key => `
                                            <li class="option-row"><span class="option-label">${key}.</span> <span class="option-text">${problem.options[key]}</span></li>
                                        `).join('')
                                    }
                                </ul>
                            </div>
                            ` : ''}
                            <div class="solution-toggle">
                                <button class="btn secondary solution-btn" data-problem="${index}">
                                    <span class="toggle-icon">▶</span> Show Solution
                                </button>
                            </div>
                            <div class="solution-content" id="solution-${index}" style="display: none;">
                                <div class="solution-section">
                                    <h4>📋 Given Data:</h4>
                                    <ul class="given-list">
                                        ${Array.isArray(problem.solution.given) ? problem.solution.given.map(item => `<li>${item}</li>`).join('') : 
                                          problem.solution.given ? `<li>${problem.solution.given}</li>` : 
                                          problem.given ? (Array.isArray(problem.given) ? problem.given.map(item => `<li>${item}</li>`).join('') : `<li>${problem.given}</li>`) :
                                          '<li>Data not provided</li>'}
                                    </ul>
                                </div>
                                <div class="solution-section">
                                    <h4>🔍 To Find:</h4>
                                    <p class="find-text">${problem.solution.find || problem.find || 'Solution to the problem'}</p>
                                </div>
                                ${currentSubject === 'biology' ? `
                                <div class="solution-section">
                                    <h4>🧭 Principle:</h4>
                                    <p class="principle-text">${problem.solution.principle || problem.principle || 'Principle not provided'}</p>
                                </div>
                                ` : ''}
                                ${currentSubject === 'biology' ? '' : `
                                <div class="solution-section">
                                    <h4>📐 Formula Used:</h4>
                                    <p class="formula-text">${problem.solution.formula || problem.formula || 'Formula not provided'}</p>
                                </div>
                                `}
                                <div class="solution-section">
                                    <h4>💡 Step-by-Step Solution:</h4>
                                    <div class="solution-steps">
                                        ${Array.isArray(problem.solution.steps) ? problem.solution.steps.map((step, stepIndex) => {
                                            if (typeof step === 'string') {
                                                return `
                                                    <div class="solution-step">
                                                        <div class="step-header">
                                                            <span class="step-number">Step ${stepIndex + 1}:</span>
                                                        </div>
                                                        <div class="step-content">
                                                            <p class="step-text">${step}</p>
                                                        </div>
                                                    </div>
                                                `;
                                            } else if (step && typeof step === 'object') {
                                                return `
                                                    <div class="solution-step">
                                                        <div class="step-header">
                                                            <span class="step-number">Step ${stepIndex + 1}:</span>
                                                            <span class="step-title">${step.step || step.title || `Step ${stepIndex + 1}`}</span>
                                                        </div>
                                                        <div class="step-content">
                                                            ${step.work ? `<p class="step-work"><strong>Work:</strong> ${step.work}</p>` : ''}
                                                            ${step.result ? `<p class="step-result"><strong>Result:</strong> ${step.result}</p>` : ''}
                                                            ${step.text ? `<p class="step-text">${step.text}</p>` : ''}
                                                            ${step.description ? `<p class="step-description">${step.description}</p>` : ''}
                                                            ${!step.work && !step.result && !step.text && !step.description ? `<p class="step-text">Step details not provided</p>` : ''}
                                                        </div>
                                                    </div>
                                                `;
                                            } else {
                                                return `
                                                    <div class="solution-step">
                                                        <div class="step-header">
                                                            <span class="step-number">Step ${stepIndex + 1}:</span>
                                                        </div>
                                                        <div class="step-content">
                                                            <p class="step-text">Step information not available</p>
                                                        </div>
                                                    </div>
                                                `;
                                            }
                                        }).join('') : '<div class="solution-step"><div class="step-content"><p class="step-text">No detailed steps available</p></div></div>'}
                                    </div>
                                </div>
                                <div class="solution-section answer-section">
                                    <h4>✅ Final Answer:</h4>
                                    <p class="final-answer">${problem.solution.answer || problem.answer || 'Answer not provided'}</p>
                                </div>
                                <div class="solution-section concept-section">
                                    <h4>🎯 Key Concept:</h4>
                                    <p class="concept-text">${problem.solution.concept || problem.key_concept || problem.concept || 'Concept not provided'}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        setupProblemsControls();
    }

    function renderQuizInterface(chapterData) {
        const quizContent = byId('quiz-tab').querySelector('.quiz-content');
        const totalQuestions = chapterData.quiz.length;

        quizContent.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-header">
                    <h2>${chapterData.title} Quiz</h2>
                    <div class="quiz-info">
                        <div class="quiz-stat">
                            <span class="quiz-stat-value">${totalQuestions}</span>
                            <span class="quiz-stat-label">Questions</span>
                        </div>
                        <div class="quiz-stat">
                            <span class="quiz-stat-value">${Math.ceil(totalQuestions * 2)}</span>
                            <span class="quiz-stat-label">Minutes</span>
                        </div>
                        <div class="quiz-stat">
                            <span class="quiz-stat-value">Mixed</span>
                            <span class="quiz-stat-label">Difficulty</span>
                        </div>
                    </div>
                </div>
                <div id="quiz-questions-container"></div>
                <div class="quiz-controls">
                    <button id="prev-question" class="btn secondary" disabled>Previous</button>
                    <div class="quiz-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 0%"></div>
                        </div>
                        <div class="progress-text">Question 1 of ${totalQuestions}</div>
                    </div>
                    <button id="next-question" class="btn primary">Next</button>
                </div>
                <div id="quiz-results" class="quiz-results" style="display: none;"></div>
            </div>
        `;

        renderCurrentQuestion(chapterData);
        setupQuizControls(chapterData);
    }

    function renderCurrentQuestion(chapterData) {
        const container = byId('quiz-questions-container');
        const question = chapterData.quiz[quizState.currentQuestion];
        const questionNumber = quizState.currentQuestion + 1;
        const totalQuestions = chapterData.quiz.length;

        container.innerHTML = `
            <div class="question-card">
                <div class="question-header">
                    <span class="question-number">Question ${questionNumber}</span>
                    <span class="question-difficulty ${question.difficulty}">${question.difficulty}</span>
                </div>
                <div class="question-text">${question.question}</div>
                <div class="options-list">
                    ${question.options.map((option, index) => `
                        <div class="option-item ${quizState.answers[quizState.currentQuestion] === index ? 'selected' : ''}" 
                             data-option="${index}">
                            <div class="option-radio"></div>
                            <span>${option}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="answer-explanation" id="explanation-${quizState.currentQuestion}">
                    <div class="explanation-header">
                        <span>✓</span> Explanation
                    </div>
                    <div class="explanation-text">${question.explanation}</div>
                </div>
            </div>
        `;

        // Add option click handlers
        container.querySelectorAll('.option-item').forEach(option => {
            option.addEventListener('click', () => {
                const optionIndex = parseInt(option.dataset.option);
                selectOption(optionIndex);
            });
        });

        // Update progress
        updateQuizProgress(questionNumber, totalQuestions);
    }

    function selectOption(optionIndex) {
        quizState.answers[quizState.currentQuestion] = optionIndex;
        
        // Update UI
        document.querySelectorAll('.option-item').forEach((option, index) => {
            option.classList.toggle('selected', index === optionIndex);
        });

        // Show explanation
        const explanation = byId(`explanation-${quizState.currentQuestion}`);
        if (explanation) {
            explanation.classList.add('show');
        }
    }

    function setupQuizControls(chapterData) {
        const prevBtn = byId('prev-question');
        const nextBtn = byId('next-question');
        const totalQuestions = chapterData.quiz.length;

        prevBtn.addEventListener('click', () => {
            if (quizState.currentQuestion > 0) {
                quizState.currentQuestion--;
                renderCurrentQuestion(chapterData);
                updateQuizControls();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (quizState.currentQuestion < totalQuestions - 1) {
                quizState.currentQuestion++;
                renderCurrentQuestion(chapterData);
                updateQuizControls();
            } else {
                finishQuiz(chapterData);
            }
        });

        updateQuizControls();
    }

    function updateQuizControls() {
        const prevBtn = byId('prev-question');
        const nextBtn = byId('next-question');
        const currentData = SUBJECT_DATA[currentSubject];
        const totalQuestions = currentData[currentChapter].quiz.length;

        prevBtn.disabled = quizState.currentQuestion === 0;
        
        if (quizState.currentQuestion === totalQuestions - 1) {
            nextBtn.textContent = 'Finish Quiz';
            nextBtn.classList.remove('primary');
            nextBtn.classList.add('success');
        } else {
            nextBtn.textContent = 'Next';
            nextBtn.classList.remove('success');
            nextBtn.classList.add('primary');
        }
    }

    function updateQuizProgress(current, total) {
        const progressFill = document.querySelector('.progress-fill');
        const progressText = document.querySelector('.progress-text');
        
        const percentage = (current / total) * 100;
        if (progressFill) progressFill.style.width = `${percentage}%`;
        if (progressText) progressText.textContent = `Question ${current} of ${total}`;
    }

    function finishQuiz(chapterData) {
        // Calculate score
        quizState.score = 0;
        chapterData.quiz.forEach((question, index) => {
            if (quizState.answers[index] === question.correct) {
                quizState.score++;
            }
        });

        quizState.completed = true;
        
        // Mark quiz as completed for this chapter
        markQuizCompleted();
        
        renderQuizResults(chapterData);
    }

    function renderQuizResults(chapterData) {
        const resultsContainer = byId('quiz-results');
        const totalQuestions = chapterData.quiz.length;
        const percentage = Math.round((quizState.score / totalQuestions) * 100);
        
        let resultClass = 'poor';
        let resultIcon = '😞';
        let resultMessage = 'Keep practicing! You can do better.';
        
        if (percentage >= 90) {
            resultClass = 'excellent';
            resultIcon = '🎉';
            resultMessage = 'Excellent work! You have mastered this chapter.';
        } else if (percentage >= 70) {
            resultClass = 'good';
            resultIcon = '😊';
            resultMessage = 'Good job! You have a solid understanding.';
        } else if (percentage >= 50) {
            resultClass = 'average';
            resultIcon = '😐';
            resultMessage = 'Not bad, but there\'s room for improvement.';
        }

        resultsContainer.innerHTML = `
            <div class="results-icon">${resultIcon}</div>
            <div class="results-score ${resultClass}">${percentage}%</div>
            <div class="results-message">${resultMessage}</div>
            <div class="results-stats">
                <div class="result-stat">
                    <span class="result-stat-value">${quizState.score}</span>
                    <span class="result-stat-label">Correct</span>
                </div>
                <div class="result-stat">
                    <span class="result-stat-value">${totalQuestions - quizState.score}</span>
                    <span class="result-stat-label">Incorrect</span>
                </div>
                <div class="result-stat">
                    <span class="result-stat-value">${totalQuestions}</span>
                    <span class="result-stat-label">Total</span>
                </div>
            </div>
            <div style="margin-top: 24px;">
                <button id="retake-quiz" class="btn primary">Retake Quiz</button>
                <button id="review-answers" class="btn secondary">Review Answers</button>
            </div>
        `;

        resultsContainer.style.display = 'block';
        
        // Hide quiz controls
        document.querySelector('.quiz-controls').style.display = 'none';
        document.querySelector('#quiz-questions-container').style.display = 'none';

        // Setup result buttons
        byId('retake-quiz').addEventListener('click', () => {
            renderQuizTab(chapterData);
        });

        byId('review-answers').addEventListener('click', () => {
            reviewQuizAnswers(chapterData);
        });

        // Save progress
        saveQuizProgress(chapterData.title, percentage);
    }

    function reviewQuizAnswers(chapterData) {
        const container = byId('quiz-questions-container');
        container.style.display = 'block';
        byId('quiz-results').style.display = 'none';
        document.querySelector('.quiz-controls').style.display = 'none';

        container.innerHTML = `
            <div class="quiz-review">
                <h3>Quiz Review</h3>
                ${chapterData.quiz.map((question, index) => {
                    const userAnswer = quizState.answers[index];
                    const isCorrect = userAnswer === question.correct;
                    
                    return `
                        <div class="question-card">
                            <div class="question-header">
                                <span class="question-number">Question ${index + 1}</span>
                                <span class="question-difficulty ${question.difficulty}">${question.difficulty}</span>
                                <span class="result-indicator ${isCorrect ? 'correct' : 'incorrect'}">
                                    ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                                </span>
                            </div>
                            <div class="question-text">${question.question}</div>
                            <div class="options-list">
                                ${question.options.map((option, optIndex) => {
                                    let optionClass = '';
                                    if (optIndex === question.correct) optionClass = 'correct';
                                    else if (optIndex === userAnswer && !isCorrect) optionClass = 'incorrect';
                                    else if (optIndex === userAnswer) optionClass = 'selected';
                                    
                                    return `
                                        <div class="option-item ${optionClass}">
                                            <div class="option-radio"></div>
                                            <span>${option}</span>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                            <div class="answer-explanation show">
                                <div class="explanation-header">
                                    <span>💡</span> Explanation
                                </div>
                                <div class="explanation-text">${question.explanation}</div>
                            </div>
                        </div>
                    `;
                }).join('')}
                <div style="text-align: center; margin-top: 32px;">
                    <button id="back-to-results" class="btn primary">Back to Results</button>
                </div>
            </div>
        `;

        byId('back-to-results').addEventListener('click', () => {
            container.style.display = 'none';
            byId('quiz-results').style.display = 'block';
        });
    }

    function setupProblemsControls() {
        // Use setTimeout to ensure DOM is fully rendered
        setTimeout(() => {
            // Add event listeners for solution toggle buttons
            document.querySelectorAll('.solution-btn').forEach(btn => {
                // Remove any existing listeners first
                btn.removeEventListener('click', handleSolutionButtonClick);
                btn.addEventListener('click', handleSolutionButtonClick);
            });
            
            console.log('Setup problems controls for', document.querySelectorAll('.solution-btn').length, 'buttons');
        }, 100);
        
    }

    function handleSolutionButtonClick(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const solutionBtn = e.currentTarget;
        const problemIndex = solutionBtn.dataset.problem;
        const solutionContent = document.getElementById(`solution-${problemIndex}`);
        
        if (!solutionContent) {
            console.error('Solution content not found for problem:', problemIndex);
            return;
        }
        
        // Check current visibility - solution content starts with display: none
        const isCurrentlyHidden = solutionContent.style.display === 'none' ||
                                 solutionContent.style.display === '';
        
        if (isCurrentlyHidden) {
            // Show solution
            solutionContent.style.display = 'block';
            solutionBtn.innerHTML = '<span class="toggle-icon">▼</span> Hide Solution';
            console.log('Showing solution for problem:', problemIndex);
        } else {
            // Hide solution
            solutionContent.style.display = 'none';
            solutionBtn.innerHTML = '<span class="toggle-icon">▶</span> Show Solution';
            console.log('Hiding solution for problem:', problemIndex);
        }
    }

    function markProblemsCompleted() {
        if (!currentChapter) return;
        
        const exam = localStorage.getItem('smartstudy_exam') || 'JEE';
        const subjectName = currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1);
        const currentData = SUBJECT_DATA[currentSubject];
        const chapterName = currentData[currentChapter].title;
        
        const key = `problems_completed_${exam}_${subjectName}_${chapterName}`;
        localStorage.setItem(key, 'true');
        
        console.log('Marked problems completed for chapter:', chapterName);
    }

    async function saveQuizProgress(chapterTitle, percentage) {
        try {
            const user = await getUser();
            if (!user) return;

            const progressData = {
                chapter: chapterTitle,
                score: percentage,
                completed_at: new Date().toISOString()
            };

            // Save to localStorage
            const existingProgress = JSON.parse(localStorage.getItem('quiz_progress') || '[]');
            const existingIndex = existingProgress.findIndex(p => p.chapter === chapterTitle);
            
            if (existingIndex >= 0) {
                existingProgress[existingIndex] = progressData;
            } else {
                existingProgress.push(progressData);
            }
            
            localStorage.setItem('quiz_progress', JSON.stringify(existingProgress));

            // Save to Supabase if available
            const sb = getSupabase();
            if (sb) {
                await sb.from('quiz_progress').upsert({
                    user_id: user.id,
                    chapter: chapterTitle,
                    score: percentage,
                    completed_at: progressData.completed_at
                });
            }
        } catch (error) {
            console.error('Error saving quiz progress:', error);
        }
    }

    // Search functionality
    function initSearch() {
        const searchInput = byId('search-input');
        const mobileSearchBtn = byId('mobile-search-btn');
        const mobileSearch = byId('mobile-search');
        const searchInputMobile = byId('search-input-mobile');

        if (searchInput) {
            searchInput.addEventListener('input', handleSearch);
        }

        if (searchInputMobile) {
            searchInputMobile.addEventListener('input', (e) => {
                if (searchInput) searchInput.value = e.target.value;
                handleSearch(e);
            });
        }

        if (mobileSearchBtn && mobileSearch) {
            mobileSearchBtn.addEventListener('click', () => {
                mobileSearch.classList.toggle('hidden');
                if (!mobileSearch.classList.contains('hidden')) {
                    setTimeout(() => searchInputMobile.focus(), 0);
                }
            });
        }
    }

    function handleSearch(e) {
        const query = e.target.value.toLowerCase();
        const chapterItems = document.querySelectorAll('.chapter-item');
        
        chapterItems.forEach(item => {
            const chapterTitle = item.querySelector('h3').textContent.toLowerCase();
            const isMatch = chapterTitle.includes(query);
            item.style.display = isMatch ? 'block' : 'none';
        });
    }

    // Progress tracking and completion functionality
    function updateProgress() {
        const currentData = SUBJECT_DATA[currentSubject];
        const totalChapters = Object.keys(currentData).length;
        let completedCount = 0;
        
        // Count completed chapters using consistent method
        Object.keys(currentData).forEach(chapterKey => {
            if (isChapterCompleted(chapterKey)) {
                completedCount++;
            }
        });
        
        const completedCountEl = byId('completed-count');
        const totalCountEl = byId('total-count');
        
        if (completedCountEl) completedCountEl.textContent = completedCount;
        if (totalCountEl) totalCountEl.textContent = totalChapters;
        
        // Update chapter status badges
        updateChapterStatusBadges();
        
        // Update subject title
        const subjectTitle = byId('subject-title');
        if (subjectTitle) {
            const subjectName = currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1);
            subjectTitle.textContent = `${subjectName} Chapters`;
        }
    }

    function getCompletedChapters() {
        try {
            // Use localStorage structure for sync
            const progress = JSON.parse(localStorage.getItem('smartstudy_progress') || '{}');
            const exam = localStorage.getItem('smartstudy_exam') || 'JEE';
            const subjectName = currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1);
            const completedChapters = [];
            
            // Extract completed chapters from progress data for current subject
            Object.keys(progress).forEach(key => {
                if (progress[key] && key.startsWith(`${exam}::${subjectName}::`)) {
                    const chapterName = key.split('::')[2];
                    // Find the chapter key that matches this name
                    const currentData = SUBJECT_DATA[currentSubject];
                    Object.keys(currentData).forEach(chapterKey => {
                        if (currentData[chapterKey].title === chapterName) {
                            completedChapters.push(chapterKey);
                        }
                    });
                }
            });
            
            console.log('Completed chapters:', completedChapters); // Debug log
            return completedChapters;
        } catch (error) {
            console.error('Error getting completed chapters:', error);
            return [];
        }
    }
    
    function isChapterCompleted(chapterKey) {
        try {
            const currentData = SUBJECT_DATA[currentSubject];
            if (!currentData || !currentData[chapterKey]) {
                return false;
            }
            
            const chapterName = currentData[chapterKey].title;
            const exam = localStorage.getItem('smartstudy_exam') || 'JEE';
            const subjectName = currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1);
            const progress = JSON.parse(localStorage.getItem('smartstudy_progress') || '{}');
            const progressKey = `${exam}::${subjectName}::${chapterName}`;
            
            console.log('Checking completion for:', progressKey, 'Result:', progress[progressKey]);
            return progress[progressKey] === true;
        } catch (error) {
            console.error('Error checking chapter completion:', error);
            return false;
        }
    }

    function getChapterKeyFromName(chapterName) {
        const nameToKeyMap = {
            'Modern Physics': 'modern-physics',
            'Electrostatics & Current Electricity': 'electrostatics',
            'Heat & Thermodynamics': 'thermodynamics',
            'Oscillations & Waves': 'oscillations',
            'Optics': 'optics',
            'Mechanics': 'mechanics'
        };
        return nameToKeyMap[chapterName] || null;
    }

    function getChapterNameFromKey(chapterKey) {
        const keyToNameMap = {
            'modern-physics': 'Modern Physics',
            'electrostatics': 'Electrostatics & Current Electricity',
            'thermodynamics': 'Heat & Thermodynamics',
            'oscillations': 'Oscillations & Waves',
            'optics': 'Optics',
            'mechanics': 'Mechanics'
        };
        return keyToNameMap[chapterKey] || '';
    }

    function updateChapterStatusBadges() {
        document.querySelectorAll('.chapter-item').forEach(item => {
            const chapterKey = item.dataset.chapter;
            const statusBadge = item.querySelector('.status-badge');
            const isCompleted = isChapterCompleted(chapterKey);
            
            if (isCompleted) {
                statusBadge.textContent = 'Completed';
                statusBadge.className = 'status-badge completed';
                item.classList.add('completed');
            } else {
                statusBadge.textContent = 'Pending';
                statusBadge.className = 'status-badge pending';
                item.classList.remove('completed');
            }
        });
    }

    async function markChapterComplete(chapterKey) {
        try {
            const currentData = SUBJECT_DATA[currentSubject];
            if (!currentData || !currentData[chapterKey]) {
                console.error('Chapter data not found:', chapterKey);
                return;
            }
            
            const chapterName = currentData[chapterKey].title;
            const exam = localStorage.getItem('smartstudy_exam') || 'JEE';
            const subjectName = currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1);
            
            // Update progress using study format
            const progress = JSON.parse(localStorage.getItem('smartstudy_progress') || '{}');
            progress[`${exam}::${subjectName}::${chapterName}`] = true;
            localStorage.setItem('smartstudy_progress', JSON.stringify(progress));
            
            console.log('Marked chapter complete:', `${exam}::${subjectName}::${chapterName}`);
            
            // Update Supabase if available
            const sb = getSupabase();
            if (sb) {
                try {
                    const user = await getUser();
                    if (user) {
                        await sb.from('progress').upsert({
                            user_id: user.id,
                            exam: exam,
                            subject: subjectName,
                            chapter: chapterName,
                            completed: true,
                            updated_at: new Date().toISOString()
                        }, { onConflict: 'user_id,exam,subject,chapter' });
                    }
                } catch (error) {
                    console.error('Error updating Supabase:', error);
                }
            }
        } catch (error) {
            console.error('Error marking chapter complete:', error);
        }
    }

    async function markChapterIncomplete(chapterKey) {
        try {
            const currentData = SUBJECT_DATA[currentSubject];
            if (!currentData || !currentData[chapterKey]) {
                console.error('Chapter data not found:', chapterKey);
                return;
            }
            
            const chapterName = currentData[chapterKey].title;
            const exam = localStorage.getItem('smartstudy_exam') || 'JEE';
            const subjectName = currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1);
            
            // Update progress using study format
            const progress = JSON.parse(localStorage.getItem('smartstudy_progress') || '{}');
            progress[`${exam}::${subjectName}::${chapterName}`] = false;
            localStorage.setItem('smartstudy_progress', JSON.stringify(progress));
            
            console.log('Marked chapter incomplete:', `${exam}::${subjectName}::${chapterName}`);
            
            // Update Supabase if available
            const sb = getSupabase();
            if (sb) {
                try {
                    const user = await getUser();
                    if (user) {
                        await sb.from('progress').upsert({
                            user_id: user.id,
                            exam: exam,
                            subject: subjectName,
                            chapter: chapterName,
                            completed: false,
                            updated_at: new Date().toISOString()
                        }, { onConflict: 'user_id,exam,subject,chapter' });
                    }
                } catch (error) {
                    console.error('Error updating Supabase:', error);
                }
            }
        } catch (error) {
            console.error('Error marking chapter incomplete:', error);
        }
    }

    function showCompletionMessage(chapterTitle) {
        // Create and show a temporary success message
        const message = document.createElement('div');
        message.className = 'completion-message';
        message.innerHTML = `
            <div class="completion-content">
                <span class="completion-icon">🎉</span>
                <span class="completion-text">Great! You've completed <strong>${chapterTitle}</strong></span>
            </div>
        `;
        
        document.body.appendChild(message);
        
        // Animate in
        setTimeout(() => message.classList.add('show'), 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            message.classList.remove('show');
            setTimeout(() => document.body.removeChild(message), 300);
        }, 3000);
    }

    // Automatic completion tracking functions
    function trackTabVisit(tabName) {
        if (!currentChapter) return;
        
        const exam = localStorage.getItem('smartstudy_exam') || 'JEE';
        const subjectName = currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1);
        const currentData = SUBJECT_DATA[currentSubject];
        const chapterName = currentData[currentChapter].title;
        
        const key = `tab_visit_${exam}_${subjectName}_${chapterName}_${tabName}`;
        localStorage.setItem(key, 'true');
        
        console.log('Tracked tab visit:', tabName, 'for chapter:', chapterName);
    }
    
    function hasVisitedTab(tabName) {
        if (!currentChapter) return false;
        
        const exam = localStorage.getItem('smartstudy_exam') || 'JEE';
        const subjectName = currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1);
        const currentData = SUBJECT_DATA[currentSubject];
        const chapterName = currentData[currentChapter].title;
        
        const key = `tab_visit_${exam}_${subjectName}_${chapterName}_${tabName}`;
        return localStorage.getItem(key) === 'true';
    }
    
    function markQuizCompleted() {
        if (!currentChapter) return;
        
        const exam = localStorage.getItem('smartstudy_exam') || 'JEE';
        const subjectName = currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1);
        const currentData = SUBJECT_DATA[currentSubject];
        const chapterName = currentData[currentChapter].title;
        
        const key = `quiz_completed_${exam}_${subjectName}_${chapterName}`;
        localStorage.setItem(key, 'true');
        
        console.log('Marked quiz completed for chapter:', chapterName);
    }
    
    function hasCompletedQuiz() {
        if (!currentChapter) return false;
        
        const exam = localStorage.getItem('smartstudy_exam') || 'JEE';
        const subjectName = currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1);
        const currentData = SUBJECT_DATA[currentSubject];
        const chapterName = currentData[currentChapter].title;
        
        // Check for both quiz and problems completion
        const quizKey = `quiz_completed_${exam}_${subjectName}_${chapterName}`;
        const problemsKey = `problems_completed_${exam}_${subjectName}_${chapterName}`;
        
        return localStorage.getItem(quizKey) === 'true' || localStorage.getItem(problemsKey) === 'true';
    }
    

    // Initialize everything
    function init() {
        initTheme();
        initAuth();
        initializePage();
        initTabs();
        initSearch();
        updateProgress();
        setupSetPasswordModal();

        // Set current year
        const yearElement = byId('year');
        if (yearElement) yearElement.textContent = new Date().getFullYear();
    }
    
    // Setup Set Password Modal
    function setupSetPasswordModal() {
        const setPasswordBtn = byId('set-password-btn');
        const setPasswordModal = byId('set-password-modal');
        const setPasswordClose = byId('set-password-close');
        const setPasswordForm = byId('set-password-form');
        const skipPasswordBtn = byId('skip-password');
        const passwordToggles = document.querySelectorAll('.password-toggle');
        
        if (setPasswordBtn && setPasswordModal) {
            setPasswordBtn.addEventListener('click', () => {
                setPasswordModal.showModal();
            });
            
            if (setPasswordClose) {
                setPasswordClose.addEventListener('click', () => {
                    setPasswordModal.close();
                });
            }
            
            if (skipPasswordBtn) {
                skipPasswordBtn.addEventListener('click', () => {
                    setPasswordModal.close();
                });
            }
            
            if (setPasswordForm) {
                setPasswordForm.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    const newPassword = byId('new-password').value;
                    const confirmPassword = byId('confirm-password').value;
                    const errorElement = byId('set-password-error');
                    
                    // Clear previous error
                    if (errorElement) errorElement.textContent = '';
                    
                    // Validate passwords
                    if (newPassword !== confirmPassword) {
                        if (errorElement) errorElement.textContent = 'Passwords do not match';
                        return;
                    }
                    
                    if (newPassword.length < 6) {
                        if (errorElement) errorElement.textContent = 'Password must be at least 6 characters';
                        return;
                    }
                    
                    try {
                        const sb = getSupabase();
                        if (sb) {
                            const { error } = await sb.auth.updateUser({ password: newPassword });
                            if (error) throw error;
                            
                            // Show success message
                            if (errorElement) {
                                errorElement.textContent = 'Password updated successfully';
                                errorElement.style.color = 'green';
                            }
                            
                            // Close modal after a delay
                            setTimeout(() => {
                                setPasswordModal.close();
                                // Reset form
                                setPasswordForm.reset();
                                if (errorElement) {
                                    errorElement.textContent = '';
                                    errorElement.style.color = '';
                                }
                            }, 1500);
                        }
                    } catch (error) {
                        console.error('Error updating password:', error);
                        if (errorElement) errorElement.textContent = error.message || 'Failed to update password';
                    }
                });
            }
            
            // Setup password toggles
            if (passwordToggles.length > 0) {
                passwordToggles.forEach(toggle => {
                    toggle.addEventListener('click', (e) => {
                        const passwordInput = e.target.closest('.password-input-wrapper').querySelector('input');
                        if (passwordInput) {
                            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                            passwordInput.setAttribute('type', type);
                            
                            // Update icon
                            const svg = toggle.querySelector('svg');
                            if (svg) {
                                if (type === 'text') {
                                    svg.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
                                } else {
                                    svg.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
                                }
                            }
                        }
                    });
                });
            }
        }
    }

    // Start the application
    document.addEventListener('DOMContentLoaded', init);

})();