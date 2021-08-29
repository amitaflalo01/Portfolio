<template>
  <div class="main-menu-item" :class="{ active }">
    <div class="full-name">
      <slot name="title">{{ title }}</slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainMenuItem",
  props: {
    title: String,
    icon: String,
    active: {
      type: Boolean,
      default: true,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.main-menu-item {
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  .full-name {
    font-size: 18px;
  }

  .icon {
    width: 40px;
    height: 40px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    .v-icon {
      background-color: transparent;
      color: whitesmoke;
      font-size: 32px;
      &:hover {
        cursor: pointer;
        color: black;
      }
    }
    &:hover {
      cursor: pointer;
      color: black;
    }
  }

  &.active {
    color: whitesmoke;
    .icon {
      background: transparent;

      .v-icon {
        color: whitesmoke;
        &:hover {
          cursor: pointer;
          color: black;
        }
      }
      &:hover {
        cursor: pointer;
        color: black;
      }
    }
  }
}
</style>
