<svelte:options runes={false} />

<script>
  export let className = "";
  export let sidebarClassName = "";
  export let mainClassName = "";
  export let sidebarSticky = true;

  $: stickyClass = sidebarSticky ? " lens-app-shell__sidebar--sticky" : "";
</script>

<div class={`lens-app-shell ${className}`.trim()}>
  <aside class={`lens-app-shell__sidebar${stickyClass} ${sidebarClassName}`.trim()}>
    <slot name="sidebar" />
  </aside>

  <main class={`lens-app-shell__main ${mainClassName}`.trim()}>
    <slot />
  </main>
</div>
