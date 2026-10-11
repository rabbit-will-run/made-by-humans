<script lang="ts">
  import encodeQR from 'qr';

  const MOLLIE_PAYMENT_LINK = "https://payment-links.mollie.com/payment/8xAEZLqqvRXsWDNn7jvLk";

  const svgElement = encodeQR(MOLLIE_PAYMENT_LINK, 'svg');

</script>

<div class="qr-code-container">
  {@html svgElement}
</div>

<style>
  .qr-code-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    width: 400px;
    fill: white;
  }

</style>