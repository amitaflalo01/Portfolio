<template>
  <div class="contact-view">
    <div class="title">
      {{ $t("contact.title") }}
    </div>
    <div class="sub-title">
      {{ $t("contact.sub.title") }}
    </div>
    <div class="website-links">
      <v-btn icon :href="linkedinProfile">
        <img :src="require('../assets/linkedin.svg')" alt="">
      </v-btn>
      <v-btn :href="githubProfile" icon>
        <img :src="require('../assets/github.svg')" alt="">
      </v-btn>
    </div>
  </div>
</template>

<script>
import { websites } from "@/constants/websites";

export default {
  name: "Contact",
  data() {
    return {
      linkedinProfile: websites.LINKEDIN,
      githubProfile: websites.GITHUB,
    };
  },
};
</script>

<style lang="scss" scoped>
.contact-view {
  display: flex;
  flex-direction: column;
  .title {
    font-family: "SF-Pro-Display-Heavy", sans-serif;
    font-weight: 800;
    font-size: 32px;
    height: 400px;
    line-height: 18px;
    padding-bottom: 25px;
    text-align: center;
    flex: 1;
  }
  .sub-title {
    font-family: "SF-Pro-Display-Medium", sans-serif;
    font-weight: 300;
    font-size: 24px;
    line-height: 18px;
    padding-bottom: 25px;
    text-align: center;
  }
  .website-links {
    display: flex;
    justify-content: center;
  }
}
</style>
