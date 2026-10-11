<script lang="ts">
  import ContactForm from '$components/ContactForm.svelte';
  import HeadingBlock from '$components/HeadingBlock.svelte';
	import authorWritingImage from '$lib/images/author-writing-cropped-reduced.jpg';
</script>

<svelte:head>
	<title>Made By Humans</title>
	<meta name="description" content="Provides verification and labeling services for artists and creators" />
</svelte:head>

<HeadingBlock image={{ src: authorWritingImage, alt: "Person Writing" }} />
<section id="contact-form" class="route-content">
	<ContactForm />
</section>

<style>

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
