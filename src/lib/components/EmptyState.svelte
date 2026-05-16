<svelte:options runes={false} />

<script>
  export let title = "";
  export let description = "";
  export let className = "";
</script>

<div class={`lens-empty-state ${className}`.trim()}>
  {#if title}
    <strong>{title}</strong>
  {/if}
  {#if description}
    <p class="lens-copy">{description}</p>
  {/if}
  <slot />
</div>
