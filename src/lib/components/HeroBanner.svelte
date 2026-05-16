<svelte:options runes={false} />

<script>
  export let eyebrow = "";
  export let title = "";
  export let description = "";
  export let className = "";
</script>

<header class={`lens-hero-banner ${className}`.trim()}>
  <div class="lens-hero-banner__copy">
    {#if eyebrow}
      <span class="lens-display-eyebrow">{eyebrow}</span>
    {/if}
    {#if title}
      <h1>{title}</h1>
    {/if}
    {#if description}
      <p class="lens-copy">{description}</p>
    {/if}
  </div>

  {#if $$slots.aside}
    <div class="lens-hero-banner__aside">
      <slot name="aside" />
    </div>
  {/if}
</header>
