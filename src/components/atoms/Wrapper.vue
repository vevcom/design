<template>
  <div class="ow-contentwrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@import "../../scss/variables";

.ow-contentwrapper {
  max-width: 640px;
  min-width: 320px;
  margin: 0 auto;
  padding: 2em $size-base 0;
}
</style>
