<template>
  <div
    class="slider backSlide d-flex flex-column justify-content-between align-items-between"
  >
    <div
      class="larg100 textSlide margTitre d-flex justify-content-around align-items-center"
    >
      <b-icon
        @click="prev"
        class="bg-white"
        role="button"
        icon="chevron-left"
        animation="fade"
        font-scale="3"
        aria-label="Help"
      ></b-icon>
      <div v-for="number in [currentNumber]" :key="number">
        <h1 class="rounded-pill backSize bg-white">
          {{ currentMsg }}
        </h1>
      </div>

      <b-icon
        @click="next"
        class="bg-white "
        role="button"
        icon="chevron-right"
        animation="fade"
        font-scale="3"
        aria-label="Help"
      ></b-icon>
    </div>
    <div class="larg100 mb-3 pl-3 d-flex justify-content-left">
      <img
        width="160px"
        class=" justify-content-left bordureProfil rounded-circle ombre"
        src="../assets/photo1.jpg"
        alt="photo profil"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "maPage",
  data() {
    return {
      messages: [
        "Développeur Web",
        "Spécialisé en javascript",
        "Développeur Frontend Vue.js",
        "Développeur Backend Node.js",
        "Intégrateur Prestashop",
        "Webmaster optimisation Seo",
        "Développeur Fullstack",
      ],
      currentNumber: 0,
      timer: null,
    };
  },
  mounted: function() {
    this.startRotation();
  },
  methods: {
    startRotation: function() {
      this.timer = setInterval(this.next, 5000);
    },

    stopRotation: function() {
      clearTimeout(this.timer);
      this.timer = null;
    },

    next: function() {
      this.currentNumber += 1;
    },
    prev: function() {
      this.currentNumber -= 1;
    },
  },

  computed: {
    currentMsg: function() {
      return this.messages[Math.abs(this.currentNumber) % this.messages.length];
    },
  },
};
</script>

<style scoped>
.backSize {
  width: 15em;
}
.ombre {
  box-shadow: 0 0 0 0 #748928ff;
  animation: pulse 1.3s infinite;
}
@keyframes pulse {
  to {
    box-shadow: 0 0 0 18px rgba(0, 0, 0, 0.01);
  }
}
</style>
