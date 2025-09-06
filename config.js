// Supabase client config (anon key is safe for frontend; enforce RLS policies on your tables)
(function(){
  // Slight obfuscation (not security) to avoid casual copy from view-source
  const p1 = 'https://qvmemiyjzksklnovejvk.';
  const p2 = 'supabase.co';
  const url = p1 + p2;

  const k1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.';
  const k2 = 'eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2bWVtaXlqemtza2xub3ZlanZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5MTcwNjIsImV4cCI6MjA3MDQ5MzA2Mn0.';
  const k3 = 'BwsPl9IPJ-l0sgXkprXudOAzrhXi0o7ENt1ELmgPCmk';
  const anon = k1 + k2 + k3;

  window.__SUPABASE_URL = url;
  window.__SUPABASE_ANON_KEY = anon;
})(); 