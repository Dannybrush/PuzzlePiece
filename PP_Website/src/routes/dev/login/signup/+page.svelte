<script>
    import { supabase } from '$lib/supabaseClient';
  
    let email = '';
    let password = '';
    let errorMessage = '';
    let isSignUp = false;
  
    const handleAuth = async () => {
      errorMessage = '';
  
      if (isSignUp) {
        // Sign Up Logic
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) {
          errorMessage = error.message;
        } else {
          errorMessage = 'Sign up successful! Please check your email to confirm your account.';
        }
      } else {
        // Sign In Logic
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) {
          errorMessage = error.message;
        } else {
          window.location.href = '/dashboard';
        }
      }
    };
  
    const signInWithGoogle = async () => {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (error) {
        errorMessage = error.message;
      }
    };
  </script>
  
  <style>
    .container {
      max-width: 400px;
      margin: 0 auto;
      padding: 2rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #f9f9f9;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  
    h2 {
      text-align: center;
      color: #0077b6;
      margin-bottom: 1.5rem;
    }
  
    input {
      width: 100%;
      padding: 0.8rem;
      margin-bottom: 1rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  
    button {
      width: 100%;
      padding: 0.8rem;
      background-color: #0077b6;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #005f75;
    }
  
    .google-button {
      margin-top: 1rem;
      background-color: #db4437; /* Google red color */
    }
  
    .toggle {
      text-align: center;
      margin-top: 1rem;
      color: #0077b6;
      cursor: pointer;
    }
  
    .toggle:hover {
      text-decoration: underline;
    }
  
    .error {
      color: red;
      text-align: center;
      margin-top: 1rem;
    }
  </style>
  
  <div class="container">
    <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
  
    <input type="email" bind:value={email} placeholder="Email" required />
    <input type="password" bind:value={password} placeholder="Password" required />
  
    <button on:click={handleAuth}>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
  
    {#if errorMessage}
      <p class="error">{errorMessage}</p>
    {/if}
  
    <button class="google-button" on:click={signInWithGoogle}>Sign in with Google</button>
  
    <div class="toggle" on:click={() => isSignUp = !isSignUp}>
      {isSignUp ? 'Already have an account? Sign In' : 'Don’t have an account? Sign Up'}
    </div>
  </div>
  