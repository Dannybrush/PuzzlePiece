<script>
  export let visible = false;
  export let onClose;
  export let member; // The selected team member

  function closeModal() {
    onClose();
  }
</script>

{#if visible && member}
  <div class="modal-overlay" on:click={closeModal}>
    <div class="modal-content" on:click|stopPropagation>
      <button class="close-button" on:click={closeModal}>×</button>
      <img src={member.image} alt={member.name} class="modal-image" />
      <h2>{member.name}</h2>
      <p>{member.role}</p>
      <p>{member.extendedBio}</p>

      <div class="social-links">
        {#if member.website}
          <a href={member.website} target="_blank" aria-label="Website">🌐 Website</a>
        {/if}
        {#if member.github}
          <a href={member.github} target="_blank" aria-label="GitHub">🐙 GitHub</a>
        {/if}
        {#if member.linkedin}
          <a href={member.linkedin} target="_blank" aria-label="LinkedIn">🔗 LinkedIn</a>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }

  .modal-content {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    width: 80%;
    max-width: 500px;
    text-align: center;
    position: relative;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .modal-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  .social-links a {
    color: #555;
    text-decoration: none;
    font-size: 1.1rem;
  }
</style>
