<script lang="ts">
  type Props = {
    image: {
      src: string;
      alt: string;
    };
  };
  let { image }: Props = $props();
</script>

<section class="heading-block">
  <img class="h-1/4 md:h-70 heading-block-image" src={image.src} alt={image.alt} />
</section>


<style>
  .heading-block {
    position: relative;
    width: 100vw;
  }

  .heading-block-image {
    width: 100vw;
    object-fit: cover;
    object-position: bottom center;
  }
</style>