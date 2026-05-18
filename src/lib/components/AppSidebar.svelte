<svelte:options runes={false} />

<script>
  export let className = "";
  export let compact = false;
  export let footerPinned = true;
</script>

<section class={`lens-app-sidebar${compact ? " lens-app-sidebar--compact" : ""} ${className}`.trim()}>
  {#if $$slots.brand}
    <div class="lens-app-sidebar__brand">
      <slot name="brand" />
    </div>
  {/if}

  {#if $$slots.nav}
    <nav class="lens-app-sidebar__nav">
      <slot name="nav" />
    </nav>
  {/if}

  {#if $$slots.tools}
    <div class="lens-app-sidebar__tools">
      <slot name="tools" />
    </div>
  {/if}

  {#if $$slots.footer}
    <div class={`lens-app-sidebar__footer${!footerPinned ? " lens-app-sidebar__footer--inline" : ""}`.trim()}>
      <slot name="footer" />
    </div>
  {/if}
</section>
