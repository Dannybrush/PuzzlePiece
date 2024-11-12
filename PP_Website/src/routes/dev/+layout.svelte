<script>
  export let session;
  import { page } from '$app/stores';
  import { Fa } from 'svelte-fa';
  import { faTwitter, faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
</script>

<style>
  /* Layout Wrapper */
  .layout-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Full height of the viewport */
  }

  /* Navbar styling */
  nav {
    background-color: var(--primary-color, #0077b6);
    color: white;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 320px; /* Leaves space for the sidebar */
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
  }

  .nav-links a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
  }

  .nav-links a.active {
    border-bottom: 2px solid #90e0ef;
  }

  /* Sidebar for development notice */
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    background-color: #dc0000;
    color: white;
    padding: 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    flex-direction: column;
  }

  /* Main Content Area */
  .main-content {
    flex: 1;
    margin-left: 320px; /* Adjusted for sidebar width */
    padding: 2rem;
  }

  /* Footer Styling */
  footer {
    background-color: #03045e;
    color: #caf0f8;
    padding: 3rem 2rem;
    text-align: center;
    font-size: 1rem;
    border-top: 3px solid #0077b6;
    margin-left: 320px; /* Aligns with content and navbar */
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 2rem;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .social-icons :global(svg) {
    cursor: pointer;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  .social-icons :global(svg:hover) {
    color: #90e0ef;
    transform: scale(1.2);
  }

  .footer-text {
    font-size: 1rem;
    color: #90e0ef;
    margin-top: 1rem;
  }

  .footer-text a {
    color: #caf0f8;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-text a:hover {
    color: #0077b6;
  }




  .watermark {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    color: rgba(0, 0, 0, 0.1); /* Light color for watermark effect */
    font-weight: bold;
    pointer-events: none; /* Make the watermark unclickable */
    z-index: -1; /* Place it behind all other content */
    text-transform: uppercase;
    white-space: nowrap;
  }

  /* Optional styling to ensure content appears above the watermark */
  .main-content {
    position: relative;
    z-index: 1;
  }
</style>

<div class="layout-wrapper">
  <!-- Sidebar -->
  <div class="sidebar">
    <span>Pages in development. Authentication + Security features needed.</span>
  </div>

  <!-- Navbar -->
  <nav>
    <div class="logo">
      <h2>PuzzlePiece</h2>
    </div>

    <div class="nav-links">
      <a href="/" class={$page.url.pathname === '/' ? 'active' : ''}>Home</a>
      <a href="/about" class={$page.url.pathname === '/about' ? 'active' : ''}>About</a>
      <a href="/users" class={$page.url.pathname === '/users' ? 'active' : ''}>Users</a>
      <a href="/questions" class={$page.url.pathname === '/questions' ? 'active' : ''}>Questions</a>
    </div>
  </nav>

<!-- Layout markup -->
<div class="watermark">
  PuzzlePiece
</div>

  <!-- Main Content -->
  <div class="main-content">
    <slot />
  </div>

  <!-- Footer -->
  <footer>
    <div class="footer-content">
      <!-- Social Media Icons -->
      <div class="social-icons">
        <Fa icon={faTwitter} />
        <Fa icon={faFacebook} />
        <Fa icon={faInstagram} />
        <Fa icon={faGithub} />
        <Fa icon={faLinkedin} />
      </div>

      <!-- Footer Text -->
      <div class="footer-text">
        <p>&copy; {new Date().getFullYear()} PuzzlePiece. All rights reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
        </p>
      </div>
    </div>
  </footer>
</div>
