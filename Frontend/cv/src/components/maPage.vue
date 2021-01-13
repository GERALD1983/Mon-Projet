<template>
  <div
    class="slider backSlide d-flex flex-column justify-content-between align-items-between"
  >
    <div
      class="larg100 textSlide margTitre d-flex justify-content-around align-items-center"
    >
      <b-icon
        class="bg-white"
        icon="chevron-left"
        animation="fade"
        font-scale="3"
        aria-label="Help"
      ></b-icon>
      <h1 class="bg-white">Développeur Web</h1>
      <b-icon
        class="bg-white"
        icon="chevron-right"
        animation="fade"
        font-scale="3"
        aria-label="Help"
      ></b-icon>
    </div>
    <div class="larg100 mb-3 pl-3 d-flex justify-content-left">
      <img
        width="160px"
        class=" justify-content-left bordureProfil rounded-circle"
        src="../assets/photo1.jpg"
        alt="photo profil"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "maPage",
};
</script>

<style></style>
