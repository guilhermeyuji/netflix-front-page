<template>
  <div class="card">
    <img :src="require('@/assets/box/' + data.box)" :alt="data.name"/>
    {{ data.name }}
  </div>
</template>

<script>
export default {
  name: 'cardConstructor',
  props: [
    'data',
  ],
};
</script>

<style lang="scss">
</style>
