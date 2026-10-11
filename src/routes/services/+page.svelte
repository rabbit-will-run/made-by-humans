<script>
  import MarketingBlock, { TextPositions } from "$components/MarketingBlock.svelte";
  import painterImage from "$lib/images/painter.jpg";
  import authorImage from "$lib/images/author-signing.jpg";
  const services = [
    {
      text: {
        content: "You just finished writing a novel and you're wondering if people will believe you wrote every word? We understand. If you can prove your writing was produced without the help of AI, we'd love for you to use our verified logo!",
        textPosition: TextPositions.LEFT
      },
      image: { src: authorImage, alt: "Author signing a book"}
    },
    {
      text: {
        content: "You just finished a painting and you're wondering if people will believe you painted every stroke? We understand. If you can prove your art was produced without the help of AI, we'd love for you to use our verified logo!",
        textPosition: TextPositions.RIGHT
      },
      image: { src: painterImage, alt: "Painter" }
    },
  ];
</script>
<section class="route-content">
  {#each services as { text, image }}
    <MarketingBlock text={text} image={image} />
  {/each}
</section>
<!--
	- Human production verification
    - Writing
      - Short stories and novels
      - Movie scripts and plays
    - Art
      - paintings, drawings, 
    - Digital designs
      - For print on t-shirts, hats, brouchers, etc.
    - Music
  - Workshops (currently in the Netherlands)
    - Want to organize a workshop on the dangers and ramifications of AI? We'll help you! 
    - Local artist workshops
-->  
<style>
  
	section {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		gap: 2rem;
		padding: 2rem 0;
	}
</style>