<template>
  <div class="bg-white ">
    <h2 class="pb-5 pt-5">Informations</h2>
    <div class="backFooter foot">
      <div>
        <h3 class="text-light pt-5 pb-3">Contact</h3>
      </div>

      <div class="mb-5 mt-3 d-flex justify-content-center ">
        <div class="larg50 d-flex justify-content-between">
          <b-icon icon="facebook" font-scale="2"></b-icon>
          <b-icon icon="github" font-scale="2"></b-icon>
          <b-icon icon="linkedin" font-scale="2"></b-icon>
          <b-icon icon="twitter" font-scale="2"></b-icon>
        </div>
      </div>
      <div class="d-flex justify-content-around">
        <div class="d-flex flex-column justify-content-center text-light">
          <h5><b-icon icon="house-door-fill"></b-icon> Adresse :</h5>
          <p>3 rue de la gare</p>
          <p>REDANGE 57390</p>
          <p>
            <b-icon class="mr-2" icon="telephone-plus"></b-icon> Tel: 03 82 52
            26 42
          </p>
          <p><b-icon class="mr-2" icon="mailbox"></b-icon> Mail: dfggggfdgrr</p>
        </div>
        <div class="larg50">
          <Formulaire />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Formulaire from "./form.vue";
export default {
  name: "foot",
  components: {
    Formulaire,
  },
};
</script>

<style></style>
