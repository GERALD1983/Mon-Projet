<template>
  <div>
    <MaPage />
    <Contenu />
  </div>
</template>

<script>
import MaPage from "../components/maPage.vue";
import Contenu from "../components/contenu.vue";
export default {
  name: "Accueil",
  components: {
    MaPage,
    Contenu,
  },
};
</script>

<style></style>
