<template>

  <Section name="Séries cômicas"></Section>

  <Section name="Em alta"></Section>

  <Section name="Só na Netflix"></Section>

  <Section name="Séries americanas vencedoras do Globo de Ouro"></Section>

  <Section name="Séries de terrpr e ficção científica"></Section>

  <Section name="Ação e aventura"></Section>

</template>

<script>
import Section from './section.vue';

export default {
  name: 'FrontPageRecommendations',
  components: {
    Section,
  },
};
</script>

<style lang="scss">
</style>
