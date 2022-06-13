<template>
  <v-app-bar theme="dark" prominent>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title>Zach's Portfolio</v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        :href="item.link"
      >
        <v-list-item-avatar>
          <v-icon :icon="item.icon"></v-icon
        ></v-list-item-avatar>
        <v-list-item-title href="/">{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "TopNavbar",

  data() {
    return {
      drawer: false,
      group: null,
      currentItem: 0,
      items: [
        {
          title: "Home",
          icon: "mdi-home",
          link: "/",
        },
        {
          title: "Projects",
          icon: "mdi-account",
          link: "/projects",
        },
      ],
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.navbar {
  border: 0;
}
</style>
