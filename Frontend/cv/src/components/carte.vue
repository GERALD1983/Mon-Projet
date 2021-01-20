<template>
  <div>
    <div id="exemple">
      <div>
        <p>Tout contenu que vous voulez montrer aux utilisateurs.</p>
        <button @click="exemple()">Cliquez ici pour fermer la boîte</button>
      </div>
    </div>
    <div
      class="pb-5 mx-5 px-5 d-flex flex-wrap justify-content-around align-items-center "
    >
      <div v-for="(image, id) in images" :key="id" class=" my-5 col-8 col-lg-4">
        <div class="bordureCarte ombreCarte card ">
          <img
            role="button"
            @click="exemple()"
            class="hautImg card-img-top"
            :src="image.link"
            alt="photo-monSite"
          />
          <div class="bg-secondary hautDivColor"></div>
          <div class="card-body">
            <h5 class="card-title">{{ image.nom }}</h5>

            <button @click="afficherMasquer(image)" class="btn btn-secondary">
              Détails
            </button>

            <p :id="image.id" class="nonAfficher pt-3 card-text"></p>

            <button
              class="ml-3 btn btnCarte btn-secondary"
              @click="clickUrl(image)"
            >
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
          id: 1,
          link: require("../assets/cv400.jpg"),
          nom: "Maquette Cv",
          description: `Cv responsive. Ceci est un site fait entiérement en html et css il est optimiser
           pour mobile.
           il est le premiet projet concret que j'ai fait dans la formation developpeur web d'openclassroom.
           Celui ci est une intégration d'apres une maquette fournit qui à été reproduit à la lettre et au
            graphisme prés.
           Celui ci récapitule aussi mon parcours professionnel dans le domaine du web.Vous pouvez en voir
            un aperçu sur mon github page ici :`,
          url: "https://gerald1983.github.io/moncv/",
        },
        {
          id: 2,
          link: require("../assets/resto400.jpg"),
          nom: "Oh My Food",
          description: `Projet oh my food restaurant.
          Ceci est un rendu d'une maquette faite en HTML Css et du préprocesseur Saas.
          Une reproduction et version MVP de réservation de restaurants.
          il a été réaliser dans le cadre du projet 3 du parcours Openclassroom.
          Il dispose de petites animations et de l'utilisation de police en conformité avec la maquette
          fournit et des spécifications demandées par le projet.
          Vous découvrirez l'intégralité de mon travail à cette adresse Git Page: `,
          url: "https://gerald1983.github.io/PROJET3/",
        },
        {
          id: 3,
          link: require("../assets/site400.jpg"),
          nom: "Projet Site Perso",
          description: "En construction",
          url: "#",
        },
        {
          id: 4,
          link: require("../assets/chouette400.jpg"),
          nom: "Agence Web",
          description: `Amelioration site la chouette agence, Seo optimisation.
          Ceci est le site chouette agence après optimisation des Seo des graphismes
          des différentes erreur et bug sur la plate-forme.
          Ceci a été revu grace à des outils comme Gt metirx et bien d'autres applications en ligne.
          Le code a été revu et accompagné d'une liste de recommandations avant son optimisation
          et d'un rapport après la mise en oeuvre de celle-ci.
          Vous pouvez découvrir l'application revue à cette adresse git hub Page`,
          url: "https://gerald1983.github.io/chouette-modifier/",
        },
        {
          id: 5,
          link: require("../assets/orinoco400.jpg"),
          nom: "E-commerce Orinico",
          description: "descrip4",
          url: "https://github.com/GERALD1983/FrontEndP5",
        },
        {
          id: 6,
          link: require("../assets/sopecocko400.jpg"),
          nom: "Critiqe Gastronomique",
          description: "descrip5",
          url: "https://github.com/GERALD1983/Projet6_SoPekocko",
        },
        {
          id: 7,
          link: require("../assets/groupomania400.jpg"),
          nom: "Réseau social",
          description: "descrip5",
          url: "https://github.com/GERALD1983/Projet7_Reseau_social_entreprise",
        },
      ],
    };
  },
  methods: {
    afficherMasquer(image) {
      if (
        document.getElementById(`${image.id}`).style.display == "none" ||
        document.getElementById(`${image.id}`).style.display == ""
      ) {
        document.getElementById(`${image.id}`).style.display = "block";
        document.getElementById(
          `${image.id}`
        ).textContent = `${image.description}`;
      } else {
        document.getElementById(`${image.id}`).style.display = "none";
      }
    },
    clickUrl(image) {
      window.open(`${image.url}`);
    },
    exemple() {
      document.getElementById("exemple").style.visibility =
        document.getElementById("exemple").style.visibility == "visible"
          ? "hidden"
          : "visible";
    },
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
.nonAfficher {
  display: none;
}
@keyframes pulse {
  to {
    box-shadow: 0 0 0 18px rgba(0, 0, 0, 0.01);
  }
}
#exemple {
  visibility: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 1000;
}
#exemple div {
  width: 350px;
  height: 300px;
  margin: 100px auto;
  background-color: #f2f2f2;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border: 1px solid #666666;
  padding: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  border: 3px solid #cccccc;
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}
</style>
