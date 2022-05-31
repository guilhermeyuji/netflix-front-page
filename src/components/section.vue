<template>
  <div class="section">
    <h3>{{ name }}</h3>

    <div class="row">
      <card v-for="card in cards" :key="card" :data="card"></card>
    </div>
  </div>
</template>

<script>
import card from './card.vue';

export default {
  name: 'SectionCons',
  props: {
    name: {
      type: String,
      required: true,
    },
    cards: {
      type: Array,
    },
  },
  components: {
    card,
  },
};
</script>

<style lang="scss">
.section {
  color: white;
}

.row {
    white-space: nowrap;
    display: flex;
}
</style>
