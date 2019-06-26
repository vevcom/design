<template>
  <div class="ow-buttongroup"><slot></slot></div>
</template>

<style lang="scss">
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
    margin-right: 0;
  }
}
</style>
