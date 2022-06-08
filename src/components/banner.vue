<template>
  <div class="frontPageBanner">

    <div class="background">
      <div
        class="image"
        v-bind:style="{'background-image': `url(${require('@/assets/backgrounds/' + background)})`}"
      ></div>

      <div class="video" v-if="videoId">
        <div id="player" ref="bannerVideo"></div>
      </div>
    </div>

    <div class="meta">
      <div class="production-logo">
        <img
          :src="require('@/assets/logos/' + logo)"
          :alt="name"
        />
      </div>

      <div class="production-description">{{ description }}</div>

      <div class="meta-buttons">
        <Button
          class="playButton"
          icon="play_arrow"
          label="Assistir"
        />

        <Button
          class="infoButton"
          icon="info"
          :iconOutlined="true"
          label="Mais Informações"
        />
      </div>
    </div>
  </div>
</template>

<script>
import loadVideo from '../scripts/loadVideo';
import Button from './button.vue';

export default {
  name: 'FrontBanner',
  props: [
    'name',
    'description',
    'logo',
    'videoId',
    'classification',
    'background',
  ],
  components: {
    Button,
  },

  mounted() {
    if (this.videoId) {
      loadVideo(this.videoId, this.$refs.bannerVideo);
    }
  },
};
</script>

<style lang="scss">
.frontPageBanner {
  background-color: black;
  position: relative;
  padding: 0 4rem 15rem;
  color: white;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  z-index: -1;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 15rem;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, #1414149f, transparent);
    z-index: 1;
  }

  > .background, > .background > div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  > .meta {
    position: relative;
    z-index: 1;
    user-select: none;
  }

  > .background {

    > .image {
        background-size: cover;
        background-position: 50%;
    }

    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    &:after {
        content: "";
        display: block;
        position: absolute;
        background: linear-gradient(90deg, #1414145c, transparent);
        width: 30vw;
        height: 100vh;
    }

    > div > #player {
      width: 100%;
      height: 100%;
      display: block;
      border: none;
      transition: .5s;
      opacity: 0;
      margin: -15rem;
      width: calc(100% + 30rem);
      height: calc(100% + 30rem);

      &.playing {
        opacity: 1;
      }
    }
  }

  &:after {
      content: "";
      display: block;
      width: 100%;
      height: 10rem;
      background: linear-gradient(0deg, #141414, transparent);
      bottom: 0;
      position: absolute;
      left: 0;
  }
}

.production-logo {
  width: 40rem;
  margin-bottom: 2rem;

  > img {
    display: block;
    width: 100%;
  }
}

.production-description {
  max-width: 50rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  font-size: 18px;
  text-shadow: 1px 2px 5px black;
}

.meta-buttons {
  display: flex;
  align-items: center;
  gap: 1rem;

  .btn {
    > .icon {
      margin: -.25rem 0;

      > i {
        font-size: 3rem;
        display: block;
      }
    }

    &.playButton {
      color: black;
      background-color: white;

      &:hover {
        background-color: rgba(255, 255, 255, 0.733);
      }

      > .icon {
        margin: -.75rem -.4rem -.75rem -1rem;

        > i {
          font-size: 4rem;
        }
      }
    }

    &.infoButton {
      background-color: #808080a2;

      &:hover {
        background-color: #80808067;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .frontPageBanner {
    display: none;
  }
}
</style>
