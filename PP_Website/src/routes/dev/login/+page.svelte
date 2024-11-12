<script>
  import { supabase } from '$lib/supabaseClient';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  let email = '';
  let password = '';
  let error = '';

  const login = async () => {
    const { error: loginError } = await supabase.auth.signInWithPassword({ email, password });
    if (loginError) {
      error = loginError.message;
    } else {
      goto('/'); // Redirect to home page or dashboard after login
    }
  };

  const signUp = async () => {
    const { error: signUpError } = await supabase.auth.signUp({ email, password });
    if (signUpError) {
      error = signUpError.message;
    } else {
      error = 'Check your email for a confirmation link.';
    }
  };

  onMount(async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      goto('/'); // Redirect if already logged in
    }
  });
</script>

<h2>Login or Sign Up</h2>
<div>
  <input type="email" placeholder="Email" bind:value={email} />
  <input type="password" placeholder="Password" bind:value={password} />
  <button on:click={login}>Login</button>
  <button on:click={signUp}>Sign Up</button>
  {#if error}
    <p style="color: red;">{error}</p>
  {/if}
</div>
