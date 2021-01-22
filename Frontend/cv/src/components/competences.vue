<template>
  <div class="bg-white margTitre">
    <div class="d-flex justify-content-center align-items-center">
      <h2 id="competence" class="invisible bg-white py-5">
        Mes Compétences
      </h2>
    </div>

    <div
      id="animback"
      class=" backSkillSize invisible slider d-flex justify-content-center"
    >
      <div
        class="backModal efface col-md-8 d-flex flex-wrap justify-content-center align-items-center "
      ></div>
      <div
        id="animlogos"
        class="invisible col-md-8 d-flex flex-wrap justify-content-center align-items-center "
      >
        <img
          role="button"
          class="cube ombreCarte"
          src="../assets/html.png"
          alt=""
        />
        <img
          role="button"
          class="cube ombreCarte"
          src="../assets/css.png"
          alt=""
        />
        <img
          role="button"
          class="cube ombreCarte"
          src="../assets/js.png"
          alt=""
        />
        <img
          role="button"
          class="cube ombreCarte"
          src="../assets/json.png"
          alt=""
        />
        <img
          role="button"
          class="cube ombreCarte"
          src="../assets/vuejs.png"
          alt=""
        />
        <img
          role="button"
          class="cube ombreCarte"
          src="../assets/bootstrap.png"
          alt=""
        />
        <img
          role="button"
          class="cube ombreCarte"
          src="../assets/npm.png"
          alt=""
        />
        <img
          role="button"
          class="cube ombreCarte"
          src="../assets/vscode.png"
          alt=""
        />
        <img
          role="button"
          class="cube ombreCarte"
          src="../assets/sql.png"
          alt=""
        />
        <img
          role="button"
          class="cube ombreCarte"
          src="../assets/mysql.png"
          alt=""
        />
        <img
          role="button"
          class="cube ombreCarte"
          src="../assets/mongodb.png"
          alt=""
        />
        <img
          role="button"
          class="cube ombreCarte"
          src="../assets/git.png"
          alt=""
        />
        <img
          role="button"
          class="cube ombreCarte"
          src="../assets/github.png"
          alt=""
        />
        <img
          role="button"
          class="cube ombreCarte"
          src="../assets/gimp.png"
          alt=""
        />
        <img
          role="button"
          class="cube ombreCarte"
          src="../assets/node1.png"
          alt=""
        />
        <img
          role="button"
          class="cube ombreCarte"
          src="../assets/cline.png"
          alt=""
        />
        <img
          role="button"
          class="cube ombreCarte"
          src="../assets/postman.jpg"
          alt=""
        />
        <img
          role="button"
          class="cube ombreCarte"
          src="../assets/express1.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "competences",
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
  mounted() {
    const competence = document.getElementById("competence");
    const back = document.getElementById("animback");
    const logos = document.getElementById("animlogos");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        competence.classList.remove("invisible");
        competence.classList.add("boxt");

        back.classList.remove("invisible");
        back.classList.add("backSkill");

        logos.classList.remove("invisible");
        logos.classList.add("logos");
      }
    });
  },
  methods: {},
};
</script>

<style scoped>
.backModal {
  width: 20em;
  height: 120px;
  border-radius: 25px;
  background-color: white;
}
.efface {
  display: none !important;
}
.logos {
  animation: 1.5s linear logo;
}
@keyframes logo {
  0% {
    opacity: 0;
    transform: translateY(150%);
  }
  100% {
    opacity: 1;
  }
}
.backSkill {
  background-image: url("../assets/trou.jpg");

  animation: rotate-vert-center 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
}

@keyframes rotate-vert-center {
  0% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
    opacity: 1;
  }
}
</style>
