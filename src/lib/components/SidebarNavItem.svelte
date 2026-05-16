<svelte:options runes={false} />

<script>
  export let active = false;
  export let className = "";
  export let type = "button";
</script>

<button
  class={`lens-sidebar-nav-item ${active ? "is-active" : ""} ${className}`.trim()}
  type={type}
  {...$$restProps}
>
  {#if $$slots.leading}
    <span class="lens-sidebar-nav-item__leading">
      <slot name="leading" />
    </span>
  {/if}

  <span class="lens-sidebar-nav-item__content">
    <slot />
  </span>
</button>
