<script>
    let name = "Puzzle Piece";
    let title = "Interactive Challenge Extraordinaires";
  </script>
  
  <section class="home-page">
    <header class="header">
      <h1>Welcome to Our Website</h1>
      <p>Your one-stop destination to meet the team and learn about our project!</p>
      <a href="/dev/meet-the-team" class="cta-button">Meet the Team</a>
    </header>
  
    <nav class="navigation">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/dev/admin">In development - admin</a></li>
        <li><a href="/dev/admin/h4X0r">hacker</a></li>
        <li><a href="/dev/admin/questions">questions</a></li>
        <li><a href="/dev/admin/users">users</a></li>
        <li><a href="/dev/meet-the-team">meet the team</a></li>
        <li><a href="/dev/login/signup">projects</a></li>
        <li><a href="/dev/login">login</a></li>
        <li><a href="/dev/supabase">supabase</a></li>
        <li><a href="/dev/contact">contact</a></li>
      </ul>
    </nav>
  
    <section class="main-content">
      <h2>About Our Project</h2>
      <p>We are building something amazing! Our team is passionate about creating innovative solutions that make a difference. Stay tuned as we grow and evolve!</p>
    </section>
  
    <footer class="footer">
      <p>&copy; 2024 Puzzle Piece. All Rights Reserved.</p>
    </footer>
  </section>
  
  <style>
  /* Home Page Styles */
    .home-page {
      text-align: center;
      font-family: Arial, sans-serif;
      padding: 2rem;
    }
    
    .header {
      background-color: #f0f4f8;
      padding: 3rem 2rem;
      border-radius: 10px;
      margin-bottom: 2rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    .header h1 {
      font-size: 3rem;
      color: #333;
    }
    
    .header p {
      font-size: 1.2rem;
      color: #555;
      margin: 1rem 0;
    }
    
    .cta-button {
      display: inline-block;
      padding: 1rem 2rem;
      background-color: #3498db;
      color: white;
      font-size: 1rem;
      text-decoration: none;
      border-radius: 5px;
      margin-top: 1rem;
      transition: background-color 0.3s ease;
    }
    
    .cta-button:hover {
      background-color: #2980b9;
    }
    
    .navigation {
      margin-top: 3rem;
    }
    
    .navigation ul {
      list-style: none;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr); /* Two columns */
      gap: 1rem; /* Space between columns and rows */
      justify-items: center; /* Center items horizontally */
    }
    
    .navigation li {
      margin: 0; /* Remove margin between items */
    }
    
    .navigation a {
      text-decoration: none;
      font-size: 1.1rem;
      color: #3498db;
      transition: color 0.3s ease;
    }
    
    .navigation a:hover {
      color: #2980b9;
    }
    
    .main-content {
      margin-top: 3rem;
      font-size: 1.2rem;
      color: #444;
    }
    
    .footer {
      margin-top: 3rem;
      padding: 1rem;
      background-color: #f0f4f8;
      text-align: center;
      border-top: 1px solid #ddd;
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
      .header h1 {
        font-size: 2.5rem;
      }
    
      .header p {
        font-size: 1rem;
      }
    
      .cta-button {
        padding: 0.8rem 1.5rem;
      }
    
      .navigation ul {
        grid-template-columns: repeat(2, 1fr); /* Two columns */
        gap: 1rem; /* Space between columns and rows */
      }
    
      .navigation li {
        margin: 0;
      }
    
      .main-content {
        padding: 1rem;
      }
    }
    
    @media (max-width: 480px) {
      .header h1 {
        font-size: 2rem;
      }
    
      .cta-button {
        padding: 0.5rem 1rem;
        font-size: 1.1rem;
      }
    
      .navigation ul {
        grid-template-columns: 1fr; /* Stack items in one column on very small screens */
        gap: 1rem;
      }
    
      .navigation li {
        margin: 0;
      }
    }
    
</style>