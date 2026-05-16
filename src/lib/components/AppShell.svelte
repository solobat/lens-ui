<svelte:options runes={false} />

<script>
  import { onMount } from "svelte";

  export let className = "";
  export let sidebarClassName = "";
  export let mainClassName = "";
  export let sidebarSticky = true;
  export let mobileMenuLabel = "工作台菜单";
  export let mobileMenuCloseLabel = "收起导航";

  let isMobile = false;
  let sidebarOpen = false;
  let mediaQuery;

  $: stickyClass = sidebarSticky && !isMobile ? " lens-app-shell__sidebar--sticky" : "";
  $: mobileShellClass = isMobile ? " lens-app-shell--mobile" : "";
  $: mobileDrawerClass = isMobile ? " lens-app-shell__sidebar--drawer" : "";
  $: mobileOpenClass = isMobile && sidebarOpen ? " lens-app-shell__sidebar--open" : "";
  $: if (typeof document !== "undefined") {
    document.body.classList.toggle("lens-sidebar-open", isMobile && sidebarOpen);
  }

  onMount(() => {
    mediaQuery = window.matchMedia("(max-width: 980px)");
    syncViewportMode();
    mediaQuery.addEventListener?.("change", syncViewportMode);

    return () => {
      mediaQuery?.removeEventListener?.("change", syncViewportMode);
      document.body.classList.remove("lens-sidebar-open");
    };
  });

  function syncViewportMode() {
    isMobile = Boolean(mediaQuery?.matches);
    if (!isMobile) {
      sidebarOpen = false;
    }
  }

  function toggleSidebar() {
    if (!isMobile) return;
    sidebarOpen = !sidebarOpen;
  }

  function closeSidebar() {
    if (!isMobile) return;
    sidebarOpen = false;
  }

  function handleSidebarClick(event) {
    if (!isMobile) return;
    if (event.target.closest("button, a")) {
      closeSidebar();
    }
  }
</script>

<div class={`lens-app-shell ${mobileShellClass} ${className}`.trim()}>
  <div class="lens-app-shell__mobile-bar">
    <button
      type="button"
      class="lens-app-shell__mobile-toggle"
      aria-expanded={sidebarOpen}
      aria-label={sidebarOpen ? mobileMenuCloseLabel : mobileMenuLabel}
      on:click={toggleSidebar}
    >
      <span class="lens-app-shell__mobile-toggle-icon">{sidebarOpen ? "✕" : "☰"}</span>
      <span>{sidebarOpen ? mobileMenuCloseLabel : mobileMenuLabel}</span>
    </button>
  </div>

  {#if isMobile && sidebarOpen}
    <button
      type="button"
      class="lens-app-shell__backdrop"
      aria-label="关闭导航"
      on:click={closeSidebar}
    />
  {/if}

  <aside
    class={`lens-app-shell__sidebar${stickyClass}${mobileDrawerClass}${mobileOpenClass} ${sidebarClassName}`.trim()}
    aria-hidden={isMobile && !sidebarOpen}
  >
    <div class="lens-app-shell__sidebar-inner" on:click={handleSidebarClick}>
      <slot name="sidebar" />
    </div>
  </aside>

  <main class={`lens-app-shell__main ${mainClassName}`.trim()}>
    <slot />
  </main>
</div>
