<template>
  <v-app>
    <v-app-bar app color="transparent" dark>
      <v-btn to="/about" text color="blue">
        <span class="mr-2">Panda</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
      <v-btn to="/home" text color="blue">
        <span class="mr-2">Home</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
      <v-btn to="/HelloWorld" text color="blue">
        <span class="mr-2">HelloWorld</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
      <v-btn to="/apply" text color="blue">
        <span class="mr-2">Apply</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
        color="green"
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content class="align-center justify-space-between">
      <!-- If using vue-router -->
      <router-view></router-view>

      <!-- <Home /> -->
    </v-content>
    <v-footer app>
      <h2>Fuck fuck fuckaaa</h2>
    </v-footer>
  </v-app>
</template>

<script>
// import Home from "@/views/Home";

export default {
  name: "App",

  components: {
    // Home
  },

  data: () => ({
    //
  })
};
</script>
