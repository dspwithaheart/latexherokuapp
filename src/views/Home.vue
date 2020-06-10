<template>
  <v-content>
    <v-container fluid> </v-container>
    <Dialog />
  </v-content>
</template>

<script>
// @ is an alias to /src
import Dialog from "@/components/Dialog.vue";

export default {
  name: "Home",
  components: {
    Dialog
  }
};
</script>
