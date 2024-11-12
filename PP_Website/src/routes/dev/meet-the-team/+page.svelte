<script>
    import Modal from '$lib/Modal.svelte';
  
    // Team member data, now with social links
    let teamMembers = [
      {
        id: 1,
        name: 'Alice Johnson',
        role: 'Project Manager',
        bio: 'Alice has over 10 years of experience...',
        extendedBio: 'Alice leads with a passion for organization...',
        image: '/images/Joe_Bremont.jpg',
        website: 'https://alicejohnson.com',
        github: 'https://github.com/alicejohnson',
        linkedin: 'https://linkedin.com/in/alicejohnson'
      },
      {
        id: 1,
        name: 'Alice Johnson',
        role: 'Project Manager',
        bio: 'Alice has over 10 years of experience...',
        extendedBio: 'Alice leads with a passion for organization...',
        image: '/images/Joe_Bremont.jpg',
        website: 'https://alicejohnson.com',
        github: 'https://github.com/alicejohnson',
        linkedin: 'https://linkedin.com/in/alicejohnson'
      },
      {
        id: 1,
        name: 'Alice Johnson',
        role: 'Project Manager',
        bio: 'Alice has over 10 years of experience...',
        extendedBio: 'Alice leads with a passion for organization...',
        image: '/images/Joe_Bremont.jpg',
        website: 'https://alicejohnson.com',
        github: 'https://github.com/alicejohnson',
        linkedin: 'https://linkedin.com/in/alicejohnson'
      }
      // Add more team members here
    ];
    let selectedMember = null; // The team member to show in the modal
  let isModalVisible = false;

  // Function to open the modal with the selected member
  function openModal(member) {
    selectedMember = member;
    isModalVisible = true;
  }

  // Function to close the modal
  function closeModal() {
    isModalVisible = false;
    selectedMember = null;
  }
</script>

<section class="team-page">
    <h1 class = "team-heading">Meet the Team</h1>
  <div class="team-grid">
    {#each teamMembers as member}
      <article class="team-member" on:click={() => openModal(member)}>
        <img src={member.image} alt={member.name} class="member-image" />
        <h2>{member.name}</h2>
        <p class="role">{member.role}</p>
        <p class="bio">{member.bio}</p>
        <p class="extended-bio">{member.extendedBio}</p>
      </article>
    {/each}
  </div>
</section>

<Modal visible={isModalVisible} onClose={closeModal} member={selectedMember} />

<style>
  /* Fancy "Meet the Team" title */
  .team-heading {
    font-family: 'Lobster', cursive; /* Fancy script font */
    font-size: 3rem;
    color: #333;
    letter-spacing: 2px;
    margin-bottom: 2rem;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    animation: fadeIn 2s ease-out; /* Fade-in animation */
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }


  .team-page {
    padding: 2rem;
    text-align: center;
    background-color: #f0f4f8; /* Light background for the entire page */
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Cards will fill available space */
    gap: 2rem;
    margin-top: 2rem;
  }

  .team-member {
    padding: 1rem;
    background-color: #f9f9f9;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    text-align: left;
  }

  .team-member:hover {
    transform: scale(1.10);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  .team-member:hover .extended-bio {
  display: block; /* Show on hover */
}

  .member-image {
    width: 100%;
    height: auto;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }

  h2 {
    margin: 0.5rem 0;
    font-size: 1.5rem;
  }

  .role {
    font-weight: bold;
    color: #555;
  }

  .bio {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .extended-bio {
    display: none;
    color: #444;
    font-size: 0.85rem;
    margin-top: 0.5rem;
    border-top: 1px solid #ddd;
    padding-top: 0.5rem;
  }
</style>