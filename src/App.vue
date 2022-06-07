<template>

  <Header></Header>

  <Banner
    :name="highlightedProduction.name"
    :description="highlightedProduction.description"
    :logo="highlightedProduction.logo"
    :videoId="highlightedProduction.videoId"
    :classification="highlightedProduction.classification"
    :background="highlightedProduction.background"
  />

  <Section
    v-for="section in sections" :key="section"
    :name="section.name"
    :cards="section.cards"
  />

</template>

<script>
import Header from './components/header.vue';
import Banner from './components/banner.vue';
import Section from './components/section.vue';
import productions from './scripts/productions';

const randomP = Math.floor(Math.random() * productions.length);

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    Section,
  },
  data() {
    return {
      highlightedProduction: {
        name: productions[randomP].name,
        description: productions[randomP].description,
        logo: productions[randomP].logo,
        videoId: productions[randomP].videoId,
        classification: productions[randomP].classification,
        background: productions[randomP].background,
      },
      sections: [],
      loadingSections: false,
    };
  },

  mounted() {
    this.sections.push({
      name: 'Minha Lista',
      cards: this.randomProductions(),
    });

    setTimeout(() => {
      this.sections.push({
        name: 'Top 10',
        cards: this.randomProductions(),
      });
    }, 1000);

    // eslint-disable-next-line
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.sections.push({
          name: 'Lorem Ipsum',
          cards: this.randomProductions(),
        });
      }, 1000);
    }

    // verifica se ocorreu um scroll de página suficiente para
    // carregar mais seções de produções recomendadas
    setInterval(this.loadMoreSections, 100);

    document.addEventListener('scroll', this.loadMoreSections);
  },

  methods: {
    randomProductions: () => {
      // eslint-disable-next-line
      let newArr = productions;
      // cria um loop que percorre todas as produções
      // eslint-disable-next-line
      for (let i = 0; i < newArr.length; i++) {
        const randomPosition = Math.floor(Math.random() * newArr.length);

        // eslint-disable-next-line
        [newArr[i], newArr[randomPosition]] = [newArr[randomPosition], newArr[i]];
      }

      console.log(newArr);

      return newArr;
    },

    loadMoreSections() {
      // eslint-disable-next-line
      if (!this.loadingSections && ((document.body.clientHeight - (window.innerHeight * 2)) < window.scrollY)) {
        this.loadingSections = true;

        this.sections.push({
          name: 'Lorem Ipsum',
          cards: this.randomProductions(),
        });

        setTimeout(() => {
          this.loadingSections = false;
        }, 500);
      }
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0px;
  background-color: #141414;
}

* {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
}
</style>
