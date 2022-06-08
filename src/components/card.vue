<template>
  <div class="card">
    <div class="card-image">
      <img :src="require('@/assets/box/' + data.box)" :alt="data.name"/>
    </div>
    <div class="card-content">
      <div class="buttons">
        <Button
          class="play-prod"
          icon="play_arrow"
        />
        <Button
          icon="done"
        />
        <Button
          :iconOutlined="true"
          icon="thumb_up"
        />

        <Button
          class="more-info-button"
          icon="keyboard_arrow_down"
        />
      </div>
      <div class="meta">
        <div class="relevance">98% Relevante</div>
        <div class="classification" :c="data.classification"></div>
        <div class="resolution">HD</div>
      </div>
      <ul class="categories">
        <li>Categoria 1</li>
        <li>Categoria 2</li>
        <li>Categoria 3</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Button from './button.vue';

export default {
  name: 'cardConstructor',
  props: [
    'data',
  ],
  components: {
    Button,
  },
};
</script>

<style lang="scss">
.card-content {
  padding: 1rem;

  > .buttons {
    display: flex;
    margin-bottom: 1rem;
    gap: 7px;

    > .btn {
      padding: .5rem;
      border: 2px solid;
      border-color: #bdbdbd;
      border-radius: 100%;
      font-size: 1.3rem;

      &:hover {
        background-color: #2a2a2a;
        border-color: white;
      }

      &.more-info-button {
        margin-left: auto;

        > .icon {
          margin: -.5rem;
        }
      }

      &.play-prod {
        border-color: white;
        background-color: white;
        color: #141414;

        &:hover {
          background-color: #cdcdcd;
          border-color: #cdcdcd;
        }
      }

      &.play-prod, &.more-info-button {
        font-size: 2.3rem;

        > .icon {
          margin: -0.5rem;
        }
      }

      > .icon {
        font-size: 1em;
      }
    }
  }

  .meta {
    display: flex;
    gap: 7px;
    align-items: center;
  }

  .relevance {
    color: #46d369;
    font-weight: 700;
    font-size: .9rem;
  }

  .categories {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    margin-top: 1rem;
    flex-flow: wrap;

    > li {
      font-size: .9rem;

      + li:before {
        content: "•";
        margin: 0 .5rem;
        font-size: 2rem;
        color: #484848;
        display: inline-block;
        vertical-align: middle;
        line-height: 1rem;
      }
    }
  }
}

.icon > i {
    display: block;
    font-size: 1em;
}

.card {
  width: 21rem;
  min-width: 21rem;
  overflow: hidden;
  cursor: pointer;
  border-radius: 3px;
  transition: transform .4s;
  position: relative;

  .card-image > img {
    display: block;
    width: 100%;
  }

  &:hover {
    transform: scale(1.2);
    z-index: 1;
    transition: transform .1s;
    background-color: #202020;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 2px #222222ad;

    > .card-content {
      display: block;
    }
  }
}

.section {
  .row {
    > .card:first-of-type {
      margin-left: 4rem;
    }
  }
}

.resolution {
  border: 1px solid;
  border-color: #8d8d8d;
  padding: 0 .4rem;
  border-radius: .3rem;
  font-size: .7rem;
  height: .8rem;
  vertical-align: middle;
}

.classification {
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  background-size: cover;
  background-position: 50%;

  &[c="L"] {
    background-image: URL('@/assets/ratings/L.svg.png');
  }

  &[c="10"] {
    background-image: URL('@/assets/ratings/10.svg.png');
  }

  &[c="12"] {
    background-image: URL('@/assets/ratings/12.svg.png');
  }

  &[c="14"] {
    background-image: URL('@/assets/ratings/14.svg.png');
  }

  &[c="16"] {
    background-image: URL('@/assets/ratings/16.svg.png');
  }

  &[c="18"] {
    background-image: URL('@/assets/ratings/18.svg.png');
  }
}

@media screen and (max-width: 768px) {
  .section .row > .card:first-of-type {
    margin-left: 2rem;
  }

  .card {
    width: 20rem;
    min-width: 20rem;
    border-radius: 0;
  }
}
</style>
