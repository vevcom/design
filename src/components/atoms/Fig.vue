<template>
  <div class="ow-image" :style="style"></div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  },
  computed: {
    style() {
      return `background-image: url("${this.src}");`;
    }
  }
};
</script>

<style lang="scss">
@import "../../scss/variables";

.ow-image {
  border-radius: 3px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  padding-top: 9 / 16 * 100%;
  margin-bottom: $size-base;
}
</style>
