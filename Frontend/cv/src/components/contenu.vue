<template>
  <div class="bg-white">
    <div>
      <h2 class=" py-5">Mes Objectifs</h2>
      <div class="bg-secondary">
        <h3 class="text-white ">
          " Aime développer produire dans le web rester connecté à la
          technologie. "
        </h3>
        <h3 class="text-white">
          " Vous rendre de la qualité , du travail bien fait , un service
          optimiser. "
        </h3>
      </div>
    </div>
    <div class="bg-white margTitre">
      <h2 class="bg-white py-5">Mes Compétences</h2>
      <Competences />
    </div>
  </div>
</template>

<script>
import Competences from "./competences.vue";
export default {
  name: "contenu",
  components: {
    Competences,
  },
};
</script>

<style></style>
