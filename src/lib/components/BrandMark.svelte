<svelte:options runes={false} />

<script>
  export let glyph = "VX";
  export let label = "VERIDEX";
  export let className = "";
</script>

<div class={`lens-brand-mark ${className}`.trim()}>
  <span class="lens-brand-mark__glyph">{glyph}</span>
  <strong>{label}</strong>
</div>
