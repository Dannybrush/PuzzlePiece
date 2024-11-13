<script lang="ts">
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient'; // Ensure this is properly set up

	let puzzleNumber = 4; // Static for now, could be dynamic if needed
	let puzzleDate = '';
  let gdata = {};
	let puzzleContent = '';
	let guessesRemaining = 4;
	let isCorrect: boolean | null = null;
	let userGuess = '';
	let isLoading = false; // Loading state for fetching data

	// Function to fetch puzzle details from Supabase
	async function fetchPuzzle() {
		isLoading = true; // Set loading to true before fetching
		const { data, error } = await supabase
			.from('questions') // Replace 'questions' with your actual table name
			.select('*')
			.eq('question_id', puzzleNumber) // Add any specific filtering condition you need
			.single(); // Use .single() if you expect only one result

		if (error) {
			console.error('Error fetching puzzle:', error);
		} else if (data) {
      gdata = data
			puzzleDate = data.release_dt;
			if (typeof data.puzzle_data === 'string') {
				// If it's a string (JSON format), parse it
				const parsedContent = JSON.parse(data.puzzle_data);
				puzzleContent = parsedContent.question; // Extract 'question' field
			} else {
				// If it's already an object, just access the 'question' field
				puzzleContent = data.puzzle_data.question;
			}
		}
		isLoading = false; // Set loading to false after fetching
	}

	// Fetch the initial puzzle on page load
	onMount(fetchPuzzle);

	// Function to handle guess submission
	async function submitGuess() {
		if (userGuess.trim() === '') return;

		// Check if user's guess matches the correct answer
		isCorrect = userGuess.toLowerCase().trim() === gdata.answer.toLowerCase().trim();
		guessesRemaining--;
		userGuess = '';

		// Optional: Add additional logic here for handling correct/incorrect answers
	}

	// Function to handle next/previous question
	function navigateQuestion(direction: 'next' | 'previous') {
		if (direction === 'next') {
			puzzleNumber += 1; // Increment to the next question number
		} else if (direction === 'previous') {
			puzzleNumber = Math.max(1, puzzleNumber - 1); // Decrement to the previous question, ensuring it's not less than 1
		}
		fetchPuzzle(); // Refetch puzzle data for the updated puzzle number
	}
</script>

<!-- Header -->
<header>
	<div class="header-left">
		<img src="/images/puzzle.jpg" alt="Client Logo" height="40" />
		<a href="#">What's this?</a>
		<a href="#">All puzzles</a>
	</div>
	<a href="#" class="login-button">Login</a>
</header>

<!-- Main content -->
<div class="page-container">
	<div class="puzzle-header">
		<!-- Buttons for navigating to the previous and next questions -->
		<button on:click={() => navigateQuestion('previous')}>&lt;</button>
		<h2>PUZZLE {puzzleNumber}</h2>
		<button on:click={() => navigateQuestion('next')}>&gt;</button>
	</div>
	<p>{puzzleDate}</p>

	<div class="puzzle-box">
		<div class="puzzle-question">
			{#if isLoading}
				<p>Loading...</p>
				<!-- Show loading text while fetching -->
			{:else}
				{puzzleContent}
			{/if}
		</div>
	</div>

	<div class="input-container">
		<input type="text" placeholder="Enter your answer" bind:value={userGuess} />
		<button class="submit-btn" on:click={submitGuess}>Submit</button>

		{#if isCorrect === true}
			<p class="feedback correct">Correct!</p>
		{:else if isCorrect === false && guessesRemaining > 0}
			<p class="feedback incorrect">Incorrect, {guessesRemaining} guesses remaining.</p>
		{:else if guessesRemaining <= 0}
			<p class="feedback incorrect">No more guesses. Try again tomorrow!</p>
		{/if}
	</div>
</div>

<!-- Footer -->
<footer>
	<div class="footer-left">
		<p>Logo</p>
	</div>
	<div class="footer-links">
		<a href="#">About Us</a>
		<a href="#">Link two</a>
		<a href="#">Link three</a>
		<a href="#">Link four</a>
	</div>
</footer>

<style>
	/* General styling */
	* {
		box-sizing: border-box;
	}
	body {
		font-family: Arial, sans-serif;
		color: #333;
	}

	/* Header styling */
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		background-color: #f0f4f8;
		border-bottom: 1px solid #ddd;
	}
	.header-left,
	.header-right {
		display: flex;
		align-items: center;
	}
	.header-left img {
		margin-right: 1rem;
	}
	.header-left a,
	.header-right a {
		margin: 0 1rem;
		text-decoration: none;
		color: #333;
	}
	.login-button {
		padding: 0.5rem 1rem;
		background-color: #333;
		color: white;
		border-radius: 4px;
		text-decoration: none;
	}

	/* Main content styling */
	.page-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		background: #f7f7f7;
		min-height: 100vh;
		gap: 1rem;
	}

	.puzzle-header {
		display: flex;
		align-items: center;
		font-size: 1.5rem;
	}

	.puzzle-header span {
		margin: 0 1rem;
	}

	.puzzle-box {
		background-color: #fff;
		padding: 2rem;
		border-radius: 8px;
		border: 1px solid #ddd;
		width: 100%;
		max-width: 600px;
		text-align: center;
		font-size: 1rem;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.puzzle-question {
		white-space: pre-line;
		text-align: left;
		font-size: 1.1rem;
		margin-bottom: 1rem;
		color: #555;
	}

	.input-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 400px;
		gap: 1rem;
		margin-top: 1rem;
	}

	input {
		padding: 0.8rem;
		width: 100%;
		font-size: 1rem;
		border: 1px solid #ddd;
		border-radius: 4px;
	}

	.submit-btn {
		padding: 0.8rem 2rem;
		font-size: 1rem;
		color: white;
		background-color: #333;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	.submit-btn:hover {
		background-color: #444;
	}

	.feedback {
		font-size: 0.9rem;
		color: #555;
		margin-top: 0.5rem;
	}

	.feedback.correct {
		color: #27ae60;
	}

	.feedback.incorrect {
		color: #e74c3c;
	}

	/* Footer styling */
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		background-color: #f0f4f8;
		border-top: 1px solid #ddd;
		width: 100%;
		position: fixed;
		bottom: 0;
	}

	footer .footer-links a {
		margin: 0 1rem;
		text-decoration: none;
		color: #333;
	}

	/* Logo resizing */
	.header-left img {
		height: 40px; /* Adjust this value for the desired height */
		width: auto; /* Keep the aspect ratio intact */
		max-width: 100%; /* Prevent the logo from being larger than the container */
	}
</style>
