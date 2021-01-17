<template>
  <div>
    <MaPage />
    <Contenu class="Cont" />
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
  /*
  data() {
    return {
      nav: document.querySelector(".Cont"),
    };
  },
  methods: {
    Scrolling: window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        this.nav.classList.add("scroll");
      }
    }),
  },
  */
};
</script>

<style></style>
