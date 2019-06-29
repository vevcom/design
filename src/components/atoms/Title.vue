<template>
  <h2 :class="style"><slot></slot></h2>
</template>

<script>
export default {
  props: {
    size: String,
    default: ""
  },
  computed: {
    style() {
      return "ow-title " + this.size;
    }
  }
};
</script>

<style lang="scss">
@import "../../scss/variables";

.ow-title {
  font-weight: bold;
  margin-bottom: $size-md;

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
