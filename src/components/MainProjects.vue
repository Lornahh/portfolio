<template>
  <div>
    <h1 class="projectsPageTitle">Projects</h1>
    <v-carousel max-width="80%" v-model="model" border:ripple="true">
      <v-carousel-item v-for="(project, index) in projects" :key="index">
        <v-sheet tile height="100%">
          <div class="fill-height">
            <v-card-title class="projectTitle">
              {{ project.title }}
              <v-icon :color="project.technologyColor" class="technologyIcon">{{
                project.technologyMdi
              }}</v-icon>
            </v-card-title>
            <v-img :src="project.image" height="50%"></v-img>
            <v-card-text>{{ project.description }}</v-card-text>
            <v-card-actions>
              <v-btn color="primary" href="{{project.link}}">
                <v-icon>mdi-github</v-icon>
                View on Github
              </v-btn>
            </v-card-actions>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "MainProjects",
  data() {
    return {
      projects: [
        {
          title: "Vue Todo List",
          image: "https://picsum.photos/700/700",
          description:
            "A todo list written in Vue js, with vuetify. Uses features like local storage, filters, and sorting.",
          link: "https://github.com/Lornahh/vue-todo",
          technologyMdi: "mdi-vuejs",
          technologyColor: "green",
        },
        {
          title: "Basic React Eshop",
          image: "https://picsum.photos/600/600",
          description: "This is a description for project 2",
          link: "https://www.google.com",
          technologyMdi: "mdi-react",
          technologyColor: "blue",
        },
        {
          title: "Burger Maker",
          image: "https://picsum.photos/800/800",
          description: "This is a description for project 3",
          link: "https://www.google.com",
          technologyMdi: "mdi-language-javascript",
          technologyColor: "orange",
        },
      ],
    };
  },
};
</script>

<style>
.projectTitle {
  display: flex;
  justify-content: center;
  font-size: 2rem;
}
.technologyIcon {
  margin-left: 1rem;
}
.projectsPageTitle {
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 3rem;
}
</style>
