<template>
  <div class="ow-buttongroup"><slot></slot></div>
</template>

<style lang="scss">
@import "../../scss/variables";
@import "../../scss/devices";

.ow-buttongroup {
   width: 100%;
  margin: 2em 0 4em;
  display: flex;
  justify-content: flex-end;
  flex-wrap: nowrap;

  & > * {
    margin-right: 0.75em;
  }
  & > *:last-child {
    margin: 0;
  }

  @include mobile {
    flex-direction: column;
    & > * {
      margin-right: 0;
      margin-bottom: $size-base;
    }
  }
}
</style>
