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
.frontPageBanner + .section {
  margin-top: -10rem;
}

.section {
  color: white;

  > h3 {
    font-size: 1.7rem;
    margin: 1rem 4rem;
    color: #d5d5d5;
  }

  + .section {
    margin-top: 4rem;
  }

  .card-content {
    display: none;
  }

  .row {
    gap: 5px;
    display: flex;
  }
}

@media screen and (max-width: 768px) {
  .frontPageBanner + .section {
    margin-top: 0;
  }

  .section > h3 {
    margin: 1rem 2rem;
  }
}
</style>
