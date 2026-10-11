<script lang="ts" module>
  export const TextPositions = {
    LEFT: 'left',
    RIGHT: 'right'
  } as const;
  type TextPosition = typeof TextPositions[keyof typeof TextPositions];
</script>
<script lang="ts">
  type Props = {
    image: {
      src: string;
      alt: string;
    };
    text: {
      content: string;
      textPosition?: TextPosition;
    };
  };
  let { image, text }: Props = $props();
</script>

<div class="flex flex-col xs:flex-row items-center gap-4 {text.textPosition === TextPositions.RIGHT ? 'xs:flex-row-reverse' : ''}">
  <div class="marketing-image-container w-full xs:w-1/3">
    <img class="marketing-image" src={image.src} alt={image.alt} />
  </div>
  <div>
    <p>{text.content}</p>
  </div>
</div>

<style>
  .marketing-image-container {
    display: flex;
    justify-content: center;
    max-height: 600px;
  }
  .marketing-image {
    width: clamp(200px, 50vw, 400px);
    min-height: 100px;
    min-width: 200px;
    height: auto;
    aspect-ratio: 1;
    border-radius: 50%;
    align-self: center;
  }
</style>