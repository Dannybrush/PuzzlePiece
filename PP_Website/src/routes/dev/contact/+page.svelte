<script>
    let name = "";
    let email = "";
    let message = "";
    let sent = false;
  
    function handleSubmit() {
      // Normally you'd handle form submission here (e.g., send an email or store the form data)
      sent = true;
      name = "";
      email = "";
      message = "";
    }
  </script>
  
  <section id="contact" class="p-8 bg-gray-100">
    <h2 class="text-3xl font-semibold">Contact Me</h2>
    {#if sent}
      <p class="text-green-600 mt-4">Your message has been sent successfully!</p>
    {/if}
    <form on:submit|preventDefault={handleSubmit} class="mt-4">
      <div class="mb-4">
        <input bind:value={name} type="text" placeholder="Your Name" class="p-2 w-full border rounded" />
      </div>
      <div class="mb-4">
        <input bind:value={email} type="email" placeholder="Your Email" class="p-2 w-full border rounded" />
      </div>
      <div class="mb-4">
        <textarea bind:value={message} placeholder="Your Message" class="p-2 w-full border rounded h-32"></textarea>
      </div>
      <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded">Send Message</button>
    </form>
  </section>

  