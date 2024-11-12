<!-- +layout.svelte -->
<script>
    export let session;
  </script>
  
  <style>
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
      visibility: visible;
      opacity: 1;
      flex-direction: column;
    }
  
    /* Content area */
    .content {
      flex: 1;
      padding: 2rem;
      margin-left: 320px;
    }
  
    /* Footer */
    .footer {
      text-align: center;
      margin-top: 3rem;
      font-size: 0.9rem;
      color: #999;
    }
  </style>
  
  <div class="sidebar">
    <span>Pages in development. Authentication + Security features needed.</span>
  </div>
  
  <div class="content">
    <slot></slot> <!-- Injects the page content here -->
  </div>
  