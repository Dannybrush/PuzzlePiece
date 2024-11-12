// src/routes/admin/+page.server.js
import { redirect } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export const load = async () => {
  // Retrieve session data
  const { data, error } = await supabase.auth.getSession();
  const session = data?.session;  // Access session from 'data.session'

  // Log the session and any errors for debugging
  console.log('Session:', session);  // Check if session is returned correctly
  console.log('Error:', error);

  // If there's no session or an error, redirect to login page
  if (error || !session) {
    console.log('No valid session, redirecting...');
    throw redirect(303, '/dev/admin/h4X0r');  // Redirect to login page
  }

  // Return session data if valid
  return {
    session
  };
};
