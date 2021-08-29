<template lang="html">
  <div class="main-layout layout d-flex">
    <div class="sidebar d-flex align-center">
      <div class="title">
        <div class="first-line">{{ $t("title.first.line") }}</div>
        <div class="second-line">{{ $t("title.second.line") }}</div>
      </div>
      <main-menu-item
        class="item"
        :title="$t('about.me')"
        icon="mdi-account-outline"
      />
      <main-menu-item
        class="item"
        :title="$t('skills')"
        icon="mdi-code-tags"
      />
      <main-menu-item
        class="item"
        :title="$t('projects')"
        icon="mdi-note-outline"
      />
      <router-link class="item" :to="{ path: '/contact' }">
        <main-menu-item
          :title="$t('contact')"
          icon="mdi-information-outline"
        />
      </router-link>
    </div>
    <div class="content-area flex-grow-1">
      <router-view />
    </div>
  </div>
</template>

<script>
import MainMenuItem from "@/components/common/MainMenuItem.vue";
import vClickOutside from "v-click-outside";

export default {
  name: "MainLayout",
  components: {
    MainMenuItem,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
};
</script>

<style lang="scss" scoped>
.main-layout {
  padding-top: 420px;
  height: 100vh;
  background: rgb(244,224,207, 0.7);
}

.sidebar {
  background-size: 100px 100px;
  background: #d61070 url("../assets/atbv9-1ckr7.svg") no-repeat left;
  color: white;
  font-family: "SF-Pro-Display-Medium", sans-serif;
  font-weight: 500;
  font-size: 16px;
  height: 400px;
  right: 0;
  line-height: 18px;
  padding-bottom: 25px;
  position: fixed;
  text-align: center;
  top: 0;
  width: 100%;
  justify-content: flex-end;
  .title {
    height: 100%;
    padding-bottom: 20%;
    padding-top: 10%;
    display: flex;
    flex-direction: column;
    align-content: center;
    color: black;
    font-size: 80px;
    font-weight: bold;
    width: 35%;
    font-family: monospace;
    letter-spacing: 2px;
    .first-line {
      text-align: left;
      margin-bottom: 25%;
      height: 50%;
    }
    .second-line {
      text-align: left;
      height: 50%;
    }
  }
}

.item {
  margin-left: 25px;
  margin-right: 50px;
  margin-top: 23%;
  &:hover {
    cursor: pointer;
    color: black;
  }
}

.author-img {
  display: flex;
  justify-content: center;
  margin-top: 15px;

  img {
    max-height: 75px;
  }
}
</style>
