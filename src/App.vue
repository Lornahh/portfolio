<template>
  <v-app>
    <TopNavbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TopNavbar from "./components/TopNavbar.vue";
export default {
  name: "App",
  components: { TopNavbar },
};
</script>
