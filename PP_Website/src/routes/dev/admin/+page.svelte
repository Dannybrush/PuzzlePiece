<script>

import { supabase } from '$lib/supabaseClient'; // Import the supabase client

	export let session;
  
	let users = [];
	let questions = [];
	let newUserEmail = '';
	let newQuestion = '';
	let newAnswer = '';
	let error = '';
	let loading = false;
  
	// Fetch users and questions
	const fetchUsers = async () => {
	  const { data, error: fetchError } = await supabase.from('users').select('*');
	  if (fetchError) {
		error = fetchError.message;
	  } else {
		users = data;
	  }
	};
  
	const fetchQuestions = async () => {
	  const { data, error: fetchError } = await supabase.from('questions').select('*');
	  if (fetchError) {
		error = fetchError.message;
	  } else {
		questions = data;
	  }
	};
  
	// Add a new user
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
  
	// Add a new question
	const addQuestion = async () => {
	  if (!newQuestion || !newAnswer) return;
	  const { data, error: addError } = await supabase
		.from('questions')
		.insert([{ puzzle_data: { question: newQuestion }, answer: newAnswer }]);
	  if (addError) {
		error = addError.message;
	  } else {
		fetchQuestions();
		newQuestion = '';
		newAnswer = '';
	  }
	};
  
	// Delete a user
	const deleteUser = async (id) => {
	  const { data, error: deleteError } = await supabase.from('users').delete().eq('id', id);
	  if (deleteError) {
		error = deleteError.message;
	  } else {
		fetchUsers();
	  }
	};
  
	// Delete a question
	const deleteQuestion = async (id) => {
	  const { data, error: deleteError } = await supabase.from('questions').delete().eq('id', id);
	  if (deleteError) {
		error = deleteError.message;
	  } else {
		fetchQuestions();
	  }
	};
  
	// Initialize data on page load
	const init = async () => {
	  await fetchUsers();
	  await fetchQuestions();
	};
  
	init();
  </script>
  
  <div class="container">
	<h1>Admin Dashboard</h1>
  
	<!-- Add User Section -->
	<div class="card">
	  <h3>Add New User</h3>
	  <input type="email" bind:value={newUserEmail} placeholder="User Email" />
	  <button on:click={addUser}>Add User</button>
	</div>
  
	<!-- Add Question Section -->
	<div class="card">
	  <h3>Add New Question</h3>
	  <input type="text" bind:value={newQuestion} placeholder="Question" />
	  <input type="text" bind:value={newAnswer} placeholder="Answer" />
	  <button on:click={addQuestion}>Add Question</button>
	</div>
  
	<!-- Error Display -->
	{#if error}
	  <div style="color: red;">{error}</div>
	{/if}
  
	<!-- Users List -->
	<div class="card">
	  <h3>Users</h3>
	  <div class="list">
		{#each users as user (user.id)}
		  <div class="list-item">
			<span>{user.username}</span>
			<button on:click={() => deleteUser(user.id)}>Delete</button>
		  </div>
		{/each}
	  </div>
	</div>
  
	<!-- Questions List -->
	<div class="card">
	  <h3>Questions</h3>
	  <div class="list">
		{#each questions as question (question.question_id)}
		  <div class="list-item">
			<span>{question.question_id}</span>
			<button on:click={() => deleteQuestion(question.id)}>Delete</button>
		  </div>
		{/each}
	  </div>
	</div>
  </div>
  
  <style>
	/* Basic styling for the admin page */
	.container {
	  padding: 2rem;
	}
  
	.card {
	  border: 1px solid #ddd;
	  padding: 1rem;
	  margin: 1rem 0;
	  border-radius: 8px;
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
	  background-color: #333;
	  color: white;
	  border: none;
	  border-radius: 4px;
	  cursor: pointer;
	}
  
	button:hover {
	  background-color: #444;
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
  </style>
  