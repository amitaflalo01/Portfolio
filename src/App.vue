<template>
  <v-app>
    <v-main>
      <router-view/> |
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  created() {
    document.title = this.$t("app.title");
  },
  data: () => ({
    //
  }),
};
</script>
