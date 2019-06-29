<template>
  <table class="ow-table">
    <tr>
      <td v-for="label in Object.keys(data[0])" :key="label">
        {{ label | capitalize }}
      </td>
    </tr>
    <tr v-for="row in this.data" :key="row">
      <td v-for="cell in Object.values(row)" :key="cell">{{ cell }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
@import "../../scss/variables";

.ow-table {
  width: 100%;

  td {
    padding: $size-md 0;
  }
  tr {
    border-bottom: 2px solid $color-dark;
  }
  tr:first-child {
    font-weight: bold;
  }
}
</style>
