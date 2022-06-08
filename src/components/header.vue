<template>
  <header ref="header">

    <div class="logo">
      <img
        :src="require('@/assets/logo.svg')"
        alt="Netflix logo"
      />
    </div>

    <ul>
      <li><a class="active" href="#">Início</a></li>
      <li><a href="#">Séries</a></li>
      <li><a href="#">Filmes</a></li>
      <li><a href="#">Bombando</a></li>
      <li><a href="#">Minha lista</a></li>
    </ul>

    <div class="searchBar"></div>

    <Button label="Infantil" class="link"/>

    <Button icon="notifications" class="notification"/>

    <Button image="../assets/avatar.png" class="userMenu"/>

  </header>
</template>

<script>
import Button from './button.vue';

export default {
  name: 'FrontHeader',
  components: {
    Button,
  },
  mounted() {
    document.addEventListener('scroll', () => {
      const headerC = this.$refs.header.classList;

      if (window.scrollY > 10) {
        headerC.add('scrolled');
        headerC.remove('smooth');
      } else {
        headerC.add('smooth');
        headerC.remove('scrolled');

        setTimeout(() => {
          headerC.remove('smooth');
        }, 1000);
      }
    });
  },
};
</script>

<style scoped lang="scss">
.logo {
  margin-right: 2rem;
  width: 7rem;

  > img {
    display: block;
    width: 100%;
  }
}

header {
  display: flex;
  align-items: center;
  padding: 1.4rem 3.8rem;
  position: fixed;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
  top: 0;

  &.smooth {
    transition: background-color .5s;
  }

  &.scrolled {
    background-color: rgb(20, 20, 20);
  }

  > ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    > li {
      margin-left: 1.3rem;
    }

    a {
      color: white;
      text-decoration: none;
      transition: opacity .3s;

      &.active {
        font-weight: 600;
        cursor: default;
      }

      &:not(.active):hover {
        opacity: .6;
      }
    }
  }

  > .btn {
    background-color: transparent!important;
    color: white!important;
    padding: 0!important;
  }
}

.searchBar {
  margin-left: auto;
}

@media screen and (max-width: 768px) {
  header > ul {
    display: none;
  }
}

</style>
