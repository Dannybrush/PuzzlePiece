<script>
    import { supabase } from '$lib/supabaseClient';
    
    export let session;
    
    let questions = [];
    let newQuestion = '';
    let newAnswer = '';
    let error = '';
  
    const fetchQuestions = async () => {
      const { data, error: fetchError } = await supabase.from('questions').select('*');
      if (fetchError) {
        error = fetchError.message;
      } else {
        questions = data;
      }
    };
  
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
  
    const deleteQuestion = async (id) => {
      const { data, error: deleteError } = await supabase.from('questions').delete().eq('question_id', id);
      if (deleteError) {
        error = deleteError.message;
      } else {
        fetchQuestions();
      }
    };
  
    const init = async () => {
      await fetchQuestions();
    };
  
    init();
  </script>
  
  <style>
    .container {
      padding: 2rem;
      max-width: 900px;
      margin: 0 auto;
    }
  
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
  
    .footer {
      text-align: center;
      margin-top: 3rem;
      font-size: 0.9rem;
      color: #999;
    }
  
    .error {
      color: red;
      margin-top: 1rem;
    }
  </style>
  
  <div class="container">
    <h1>Manage Questions</h1>
    
    <!-- Add Question Section -->
    <div class="card">
      <h3>Add New Question</h3>
      <input type="text" bind:value={newQuestion} placeholder="Enter Question" />
      <input type="text" bind:value={newAnswer} placeholder="Enter Answer" />
      <button on:click={addQuestion}>Add Question</button>
    </div>
  
    <!-- Error Display -->
    {#if error}
      <div class="error">{error}</div>
    {/if}
    
    <!-- Questions List -->
    <div class="card">
      <h3>Questions</h3>
      <div class="list">
        {#each questions as question (question.question_id)}
          <div class="list-item">
            <span>{question.puzzle_data?.question}</span>
            <button on:click={() => deleteQuestion(question.question_id)}>Delete</button>
          </div>
        {/each}
      </div>
    </div>
  
    <div class="footer">
      <p>&copy; 2024 PuzzlePiece Limited. All rights reserved.</p>
    </div>
  </div>
  