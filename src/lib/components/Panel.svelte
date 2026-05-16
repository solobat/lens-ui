<svelte:options runes={false} />

<script>
  export let eyebrow = "";
  export let title = "";
  export let titleAs = "h2";
  export let description = "";
  export let className = "";
  export let bodyClassName = "";
  export let tone = "default";

  const toneClassMap = {
    default: "",
    accent: " lens-panel--accent",
    muted: " lens-panel--muted",
    danger: " lens-panel--danger"
  };

  $: toneClass = toneClassMap[tone] || "";
  $: hasHeader = Boolean(eyebrow || title || description || $$slots.action);
</script>

<section class={`lens-panel${toneClass} ${className}`.trim()}>
  {#if hasHeader}
    <div class="lens-panel__header">
      <div class="lens-panel__title-group">
        {#if eyebrow}
          <span class="lens-display-eyebrow">{eyebrow}</span>
        {/if}
        {#if title}
          <svelte:element this={titleAs} class="lens-panel__title">{title}</svelte:element>
        {/if}
        {#if description}
          <p class="lens-copy lens-panel__description">{description}</p>
        {/if}
      </div>
      {#if $$slots.action}
        <div class="lens-panel__action">
          <slot name="action" />
        </div>
      {/if}
    </div>
  {/if}

  <div class={`lens-panel__body ${bodyClassName}`.trim()}>
    <slot />
  </div>
</section>
