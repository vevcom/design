<template>
  <h2 class="ow-title xlarge"><slot></slot></h2>
</template>

<style lang="scss">
@import "../../scss/variables";

.ow-title {
  font-weight: bold;
  margin-bottom: 1em;

  &.medium {
    font-size: $font-size-md;
  }

  &.large {
    font-size: $font-size-lg;
  }

  &.xlarge {
    font-size: $font-size-xl;
  }
}
</style>
