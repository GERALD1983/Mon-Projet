<template>
  <div>
    <div
      class="pb-5 mx-5 px-5 d-flex flex-wrap justify-content-around align-items-center "
    >
      <div v-for="(image, id) in images" :key="id" class=" my-5 col-8 col-lg-4">
        <div class="bordureCarte ombreCarte card ">
          <img
            class="hautImg card-img-top"
            :src="image.link"
            alt="photo-monSite"
          />
          <div class="bg-secondary hautDivColor"></div>
          <div class="card-body">
            <h5 class="card-title">{{ image.nom }}</h5>
            <p class="card-text">
              {{ image.description }}
            </p>
            <button class="btn btnCarte btn-secondary ">
              Voir Projet
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carte",
  data() {
    return {
      images: [
        {
          link: require("../assets/cv400.jpg"),
          nom: "Maquette Cv",
          description: "Site ambiance naturelle",
        },
        {
          link: require("../assets/resto400.jpg"),
          nom: "Oh My Food",
          description: "descrip1",
        },
        {
          link: require("../assets/site400.jpg"),
          nom: "Projet Site Perso",
          description: "descrip2",
        },
        {
          link: require("../assets/chouette400.jpg"),
          nom: "Agence Web",
          description: "descrip3",
        },
        {
          link: require("../assets/orinoco400.jpg"),
          nom: "E-commerce Orinico",
          description: "descrip4",
        },
        {
          link: require("../assets/sopecocko400.jpg"),
          nom: "Critiqe Gastronomique",
          description: "descrip5",
        },
        {
          link: require("../assets/groupomania400.jpg"),
          nom: "Réseau social",
          description: "descrip5",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.hautImg {
  height: 370px;
}
.hautDivColor {
  height: 40px;
  width: 100%;
}
.bordureCarte {
  border: 0.5mm ridge#a6b622ff !important;
}
.ombreCarte:hover {
  box-shadow: 0 0 0 0 #748928ff;
  animation: pulse 1.3s infinite;
}
.ombreCarte {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
}
@keyframes pulse {
  to {
    box-shadow: 0 0 0 18px rgba(0, 0, 0, 0.01);
  }
}
</style>
