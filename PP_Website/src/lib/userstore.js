// src/lib/userStore.js
import { writable } from 'svelte/store';
import { supabase } from './supabaseClient';

export const user = writable(null);

supabase.auth.onAuthStateChange((event, session) => {
  user.set(session?.user || null);  // Update the store with the logged-in user or null
});
