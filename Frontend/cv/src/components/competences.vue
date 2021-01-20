<template>
  <div class="bg-white margTitre">
    <div class="d-flex justify-content-center align-items-center">
      <h2 id="competence" class="invisible bg-white py-5">
        Mes Compétences
      </h2>
    </div>

    <div
      id="back"
      class=" backSkillSize invisible slider d-flex justify-content-center"
    >
      <div
        class="backModal efface col-md-8 d-flex flex-wrap justify-content-center align-items-center "
      ></div>
      <div
        id="logos"
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
    const back = document.getElementById("back");
    const logos = document.getElementById("logos");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        competence.classList.remove("invisible");
        competence.classList.add("boxt");
        console.log(window.length);
      }
      if (window.scrollY > 1000) {
        back.classList.remove("invisible");
        logos.classList.remove("invisible");
        back.classList.add("backSkill");
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
</style>
