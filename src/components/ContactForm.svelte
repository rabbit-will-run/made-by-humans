<div class="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4">
  <div class="heading-container">
    <h2 class="h2 mb-2">Ready to Get Your Product Verified?</h2>
    <em class="text-sm">We think people want to buy products that are made by humans, not algorithms. If you want to get your product verified, please fill out the form and we'll get back to you as soon as possible.</em>
  </div>
  <form action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="db94a0a3-04aa-471a-bed9-b7a06e3492e3">
    <label class="label">
      <span class="label-text">Name:</span>
      <input class="input" type="text" name="name"/>
    </label>
    <label class="label">
      <span class="label-text">Email:</span>
      <input name="email" autocomplete="email" class="input" type="email"
      required/>
    </label>
    <label class="label">
			<span class="label-text">Message:</span>
			<textarea name="message" rows="4" class="textarea rounded-container" required></textarea>
		</label>
    <button type="submit" class="btn preset-filled-primary-800-200">Submit</button>
  </form>
</div>

<style>
  button {
    width: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 40vw;
    align-items: center;
    align-content: center;
    text-align: left;
  }
  .heading-container {
    max-width: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  textarea {
    field-sizing: content;
    min-height: 6rem;
  }
</style>