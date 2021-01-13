<template>
  <div>
    <MaPage />
    <Contenu />
    <Foot />
  </div>
</template>

<script>
import MaPage from "../components/maPage.vue";
import Contenu from "../components/contenu.vue";
import Foot from "../components/footer.vue";
export default {
  name: "Accueil",
  components: {
    MaPage,
    Contenu,
    Foot,
  },
};
</script>

<style></style>
