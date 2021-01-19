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
        id="logos"
        class="invisible col-md-8 d-flex flex-wrap justify-content-center align-items-center "
      >
        <img class="cube" src="../assets/html.png" alt="" />
        <img class="cube" src="../assets/css.png" alt="" />
        <img class="cube" src="../assets/js.png" alt="" />
        <img class="cube" src="../assets/json.png" alt="" />
        <img class="cube" src="../assets/vuejs.png" alt="" />
        <img class="cube" src="../assets/bootstrap.png" alt="" />
        <img class="cube" src="../assets/npm.png" alt="" />
        <img class="cube" src="../assets/vscode.png" alt="" />
        <img class="cube" src="../assets/sql.png" alt="" />
        <img class="cube" src="../assets/mysql.png" alt="" />
        <img class="cube" src="../assets/mongodb.png" alt="" />
        <img class="cube" src="../assets/git.png" alt="" />
        <img class="cube" src="../assets/github.png" alt="" />
        <img class="cube" src="../assets/gimp.png" alt="" />
        <img class="cube" src="../assets/node1.png" alt="" />
        <img class="cube" src="../assets/cline.png" alt="" />
        <img class="cube" src="../assets/postman.jpg" alt="" />
        <img class="cube" src="../assets/express1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "competences",
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
};
</script>

<style scoped>
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
