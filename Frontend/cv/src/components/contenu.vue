<template>
  <div class="bg-white">
    <div>
      <div class="d-flex justify-content-center align-items-center">
        <h2 class="boxt py-5 ">Mes Objectifs</h2>
      </div>

      <div
        class="d-flex flex-column justify-content-center paragraphe bg-secondary"
      >
        <h3 class="para1 text-white ">
          " Aime développer produire dans le web rester connecté à la
          technologie. "
        </h3>
        <h3 class="para2 text-white">
          " Vous rendre de la qualité , du travail bien fait , un service
          optimiser. "
        </h3>
      </div>
    </div>
    <div class="bg-white margTitre">
      <div class="d-flex justify-content-center align-items-center">
        <h2 class="boxt bg-white py-5">
          Mes Compétences
        </h2>
      </div>
      <div class="backSkillSize">
        <Competences />
      </div>
    </div>
    <div class="mb-5">
      <div class="d-flex justify-content-center align-items-center">
        <h2
          class="d-flex justify-content-center align-items-center rounded-pill text-pop-up-top text-white my-5"
        >
          Quelles sont mes offres ?
        </h2>
      </div>
      <div class="bg-secondary paragraphe">
        <h5 class="text-white pt-5">
          <ul class="para1">
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
        <h4 class="para2 text-white pt-5">
          Mes services correspondront donc peut être à ce que vous avez peut
          être toujours chercher !
        </h4>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <h2 class="boxt mb-0 pb-5 pt-5">Mes projets</h2>
    </div>
    <div>
      <Carte />
    </div>
  </div>
</template>

<script>
import Competences from "./competences.vue";
import Carte from "./carte.vue";
export default {
  name: "contenu",
  components: {
    Competences,
    Carte,
  },
};
</script>

<style lang="scss">
.boxt {
  animation: 1s linear boxt;
}
.boxb {
  animation: 1s linear boxb;
}
.para1 {
  animation: 1s linear para1;
}
.para2 {
  animation: 1s linear para2;
}
@keyframes boxt {
  0% {
    opacity: 0;
    transform: translateX(200%);
  }
  100% {
    opacity: 1;
  }
}
@keyframes boxb {
  0% {
    opacity: 0;
    transform: translateX(-200%);
  }
  100% {
    opacity: 1;
  }
}
@keyframes para1 {
  0% {
    opacity: 0;
    transform: translateY(-200%);
  }
  100% {
    visibility: hidden;
    opacity: 1;
  }
}
@keyframes para2 {
  0% {
    opacity: 0;
    transform: translateY(200%);
  }
  100% {
    visibility: hidden;
    opacity: 1;
  }
}
.text-pop-up-top {
  height: 60px;
  width: 15em;
  background-color: #aca5a5;
  animation: text-shadow-pop-top 0.6s both;
}
@keyframes text-shadow-pop-top {
  0% {
    text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555,
      0 0 #555555, 0 0 #555555, 0 0 #555555;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    text-shadow: 0 -1px #555555, 0 -2px #555555, 0 -3px #555555, 0 -4px #555555,
      0 -5px #555555, 0 -6px #555555, 0 -7px #555555, 0 -8px #555555;
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
}

/*
.btnt {
  &:hover + .boxt {
    transform: scale(2) !important;
  }
}
.boxt {
  width: 100px;
  height: 30px;
  background-color: red;
  transition: transform 3300ms ease-in-out !important;
}
.boxcont {
  height: 500px;
  width: 500px;
}
*/
</style>
