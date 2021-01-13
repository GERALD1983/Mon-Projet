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
    <div class="mb-5">
      <h2 class="my-5">
        Quelles sont mes offres ?
      </h2>
      <div class="bg-secondary paragraphe">
        <h5 class="text-white pt-5">
          <ul>
            <li>
              - Vous avez un projet : création de plate-forme e-commerce
            </li>
            <br />
            <li>
              - Vous révez d'avoir votre propre réseau social et marquer
              l'histoire
            </li>
            <br />
            <li>
              - Vous aspirez à faire valoir votre savoir-faire
            </li>
            <br />
            <li>
              - Vous voulez dévelloper votre entreprise
            </li>
            <br />
            <li>
              - Où simplement afficher votre présence dan le monde digitale
            </li>
          </ul>
        </h5>
        <h4 class="text-white pt-5">
          Mes services correspondront donc peut être à ce que vous avez peut
          être toujours chercher !
        </h4>
      </div>
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
