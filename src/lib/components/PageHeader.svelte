<svelte:options runes={false} />

<script>
  export let eyebrow = "";
  export let title = "";
  export let description = "";
  export let className = "";
  export let tone = "default";

  const toneClassMap = {
    default: "",
    accent: " lens-page-header--accent"
  };

  $: toneClass = toneClassMap[tone] || "";
</script>

<header class={`lens-page-header${toneClass} ${className}`.trim()}>
  <div class="lens-page-header__body">
    <div class="lens-page-header__brand">
      {#if $$slots.brand}
        <div class="lens-page-header__brand-mark">
          <slot name="brand" />
        </div>
      {/if}
      <div class="lens-page-header__copy">
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
    </div>

    {#if $$slots.actions}
      <div class="lens-page-header__actions">
        <slot name="actions" />
      </div>
    {/if}
  </div>
</header>
