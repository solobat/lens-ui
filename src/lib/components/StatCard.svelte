<svelte:options runes={false} />

<script>
  export let eyebrow = "";
  export let value = "";
  export let className = "";
</script>

<article class={`lens-stat-card ${className}`.trim()}>
  {#if eyebrow}
    <span class="lens-display-eyebrow lens-display-eyebrow--soft">{eyebrow}</span>
  {/if}
  {#if value}
    <strong>{value}</strong>
  {/if}
  <slot />
</article>
