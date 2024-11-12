<!-- +page.svelte -->
<script>
    import { supabase } from '$lib/supabaseClient';
    
    let users = [];
    let newUserEmail = '';
    let error = '';
  
    const fetchUsers = async () => {
      const { data, error: fetchError } = await supabase.from('users').select('*');
      if (fetchError) {
        error = fetchError.message;
      } else {
        users = data;
      }
    };
  
    const addUser = async () => {
      if (!newUserEmail) return;
      const { data, error: addError } = await supabase
        .from('users')
        .insert([{ email: newUserEmail }]);
      if (addError) {
        error = addError.message;
      } else {
        fetchUsers();
        newUserEmail = '';
      }
    };
  
    const deleteUser = async (id) => {
      const { data, error: deleteError } = await supabase.from('users').delete().eq('id', id);
      if (deleteError) {
        error = deleteError.message;
      } else {
        fetchUsers();
      }
    };
  
    const init = async () => {
      await fetchUsers();
    };
  
    init();
  </script>
  
  <style>
    .card {
      border: 1px solid #ddd;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      border-radius: 8px;
      background-color: white;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  
    h1 {
      font-size: 2.5rem;
      color: #1d3557;
      margin-bottom: 1.5rem;
      text-align: center;
    }
  
    input {
      padding: 0.8rem;
      width: 100%;
      margin-bottom: 1rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  
    button {
      padding: 0.8rem 2rem;
      background-color: #0077b6;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      margin-top: 1rem;
    }
  
    button:hover {
      background-color: #005f75;
    }
  
    .list {
      margin-top: 1rem;
    }
  
    .list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.5rem 0;
    }
  
    .list-item button {
      background-color: red;
      padding: 0.4rem 1rem;
      color: white;
      border-radius: 4px;
    }
  
    .error {
      color: red;
      margin-top: 1rem;
    }
  </style>
  
  <h1>Manage Users</h1>
  
  <!-- Add User Section -->
  <div class="card">
    <h3>Add New User</h3>
    <input type="email" bind:value={newUserEmail} placeholder="Enter User Email" />
    <button on:click={addUser}>Add User</button>
  </div>
  
  <!-- Error Display -->
  {#if error}
    <div class="error">{error}</div>
  {/if}
  
  <!-- Users List -->
  <div class="card">
    <h3>Users</h3>
    <div class="list">
      {#each users as user (user.id)}
        <div class="list-item">
          <span>{user.email}</span>
          <button on:click={() => deleteUser(user.id)}>Delete</button>
        </div>
      {/each}
    </div>
  </div>
  
  <div class="footer">
    <p>&copy; 2024 PuzzlePiece. All rights reserved.</p>
  </div>
  