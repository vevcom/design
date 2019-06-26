<template>
  <button :class="style">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    primary: Boolean,
    danger: Boolean
  },
  computed: {
    style() {
      return (
        "ow-button" +
        (this.primary ? " primary" : "") +
        (this.danger ? " danger" : "")
      );
    }
  }
};
</script>

<style lang="scss">
@import "../../scss/variables";

$button-border: 3px;
$button-corner: $button-border * 1.5;

@mixin buttonPadding($horizontal, $vertical, $border) {
  padding: ($vertical - 2 * $border) ($horizontal - 2 * $border);
}

.ow-button {
  @include buttonPadding(32px, 16px, $button-border);
  font-size: inherit;
  background-color: $color-light;
  color: $color-dark;
  font-weight: bold;
  min-width: 64px;
  border-radius: $button-corner;
  border: $button-border solid $color-dark;
  cursor: pointer;
  //box-shadow: 0 0.5em 1em #0004;

  &.primary {
    color: $color-light;
    background-color: $color-dark;
  }

  &.danger {
    color: $color-light;
    background-color: $color-error;
    border-color: $color-error;
  }

  &.small {
    @include buttonPadding(24px, 12px, $button-border);
  }

  &.large {
    @include buttonPadding(48px, 24px, $button-border);
  }
}
</style>
