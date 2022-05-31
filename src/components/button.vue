<template>
  <div class="btn">
    <div v-if="icon" class="icon">
      <i v-bind:class="{
        'material-symbols-outlined': iconOutlined,
        'material-symbols-rounded': !iconOutlined,
      }">{{ icon }}</i>
    </div>
    <div v-if="image" class="image"></div>
    <span v-if="label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'ButtonConstructor',
  props: {
    label: {
      type: String,
    },
    icon: {
      type: String,
    },
    iconOutlined: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.btn {
  display: flex;
  align-items: center;
  gap: .8rem;

  &:not(.link) {
    padding: 1rem 2.5rem;
    font-size: 1.6rem;
    font-weight: 700;
    border-radius: .3rem;
    cursor: pointer;
    user-select: none;
  }

  > span {
    font-size: 1em;
  }

  &.link {
    color: white;
    margin-right: 1.3rem;
  }
}
</style>
