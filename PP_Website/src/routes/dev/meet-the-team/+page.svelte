

<script>
  // Team data array
  const teamMembers = [
    {
      name: 'Daniel Broomhead',
      role: 'Lead Code Monkey',
      image: '/images/Dan- Codemonkey.jpg', // add a relevant image path
      bio: 'Dan is a poor abused slave to the machine who has to do all Joe\'s bidding at his beck and Call, on demand.',
      extendedBio: 'Dan is actually the real mastermind behind all this'
    },
    {
      name: 'Joseph Sykes',
      role: 'Big Brain Extraordinaire',
      image: '/images/Joe_Bremont.jpg',
      bio: 'Joe is the big boss, the money man and the ideas guys',
      extendedBio: 'although he does need some help solving his own puzzles'
    },
    {
      name: 'Lissy Haig-Thomas',
      role: 'Senior Consultant',
      image: '/images/Lissy-Austria.png',
      bio: 'Lissy is just a f*cking genius who saves the day',
      extendedBio: 'she also knows everything'
    }
    // Add more team members as needed
  ];

// State to track which team member's bio is expanded
let expandedMember = -1; // -1 means no member is expanded

// Toggle function to expand or collapse the bio
function toggleBio(index) {
  expandedMember = expandedMember === index ? -1 : index;
}

  
</script>


<main class="team-page">
  <h1 class="fancy-heading">Meet the awesome Team</h1>

  <section class="team-grid">
    {#each teamMembers as member, index}
      <button 
        type="button" 
        class="team-member" 
        on:click={() => toggleBio(index)} 
        on:keydown={(e) => e.key === 'Enter' && toggleBio(index)}
        aria-expanded={expandedMember === index}
      >
        <img src={member.image} alt={member.name} class="member-image" />
        <h2>{member.name}</h2>
        <p class="role">{member.role}</p>
        <p class="bio">{member.bio}</p>

        {#if expandedMember === index}
          <p class="extended-bio">{member.extendedBio}</p>
        {/if}
      </button>
    {/each}
  </section>
</main>


<style>
  .team-page {
    padding: 2rem;
    text-align: center;
    background-color: #f0f4f8; /* Light background for the entire page */
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
    transition: transform 0.2s;
    text-align: left;
  }

  .team-member:hover {
    transform: scale(1.10);

    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
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
    color: #444;
    font-size: 0.85rem;
    margin-top: 0.5rem;
    border-top: 1px solid #ddd;
    padding-top: 0.5rem;
  }
  /* Fancy Heading Style */
.fancy-heading {
  font-family: 'Playfair Display', serif; /* Use a fancy serif font */
  font-size: 3rem; /* Make the font large */
  color: #333; /* Dark gray color */
  letter-spacing: 3px; /* Space out the letters */
  text-transform: uppercase; /* Uppercase letters for emphasis */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  margin-bottom: 1rem; /* Add some space below the heading */
  font-weight: bold; /* Make the font bold */
}

</style>