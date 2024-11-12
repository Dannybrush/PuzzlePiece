<script>
    // This script could handle any logic for displaying additional information
    // or redirecting users to the login page if needed.
  </script>
  
  <style>
    /* Basic page styles */
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #f0f4f8;
      text-align: center;
      padding: 2rem;
    }
  
    .content {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 3rem 2rem;
      max-width: 700px;
      width: 100%;
    }
  
    h1 {
      font-size: 2.5rem;
      color: #1d3557;
      margin-bottom: 1rem;
    }
  
    p {
      font-size: 1.1rem;
      color: #555;
      line-height: 1.8;
      margin-bottom: 1rem;
    }
  
    .highlight {
      color: #0077b6;
      font-weight: bold;
    }
  
    .footer {
      margin-top: 3rem;
      font-size: 0.9rem;
      color: #999;
    }
  
    ul {
      text-align: left;
      margin-top: 1rem;
      margin-bottom: 2rem;
      padding-left: 2rem;
    }
  
    li {
      margin-bottom: 1rem;
    }
  
    .btn {
      background-color: #0077b6;
      color: white;
      padding: 1rem 3rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1.2rem;
      margin-top: 2rem;
      transition: background-color 0.3s;
    }
  
    .btn:hover {
      background-color: #005f75;
    }
  </style>
  
  <div class="container">
    <div class="content">
      <h1>Access Denied: Login Required</h1>
      <p>
        You are trying to access a page that requires authentication. Currently, this
        page only requires you to log in, but in the future, we may restrict access to
        certain sections of the website to specific users or admins.
      </p>
      <p>
        As we continue to develop the site, we'll explore the ability to:
      </p>
      <ul>
        <li><span class="highlight">Allow access only to certain users or admins</span></li>
        <li><span class="highlight">Force all users to log in before accessing certain areas of the site</span></li>
      </ul>
      <p>
        Please log in to continue accessing the admin pages.
      </p>
      <button class="btn" on:click={() => window.location.href = '/login'}>Go to Login</button>
  
      <div class="footer">
        <p>&copy; 2024 Your Website Name. All rights reserved.</p>
      </div>
    </div>
  </div>
  