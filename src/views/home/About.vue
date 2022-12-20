<template>
  <section id="main__section" class="container">
    <h2 class="title--font header--font">About</h2>
    <p>
      Heyo! I'm
      <a
        href="https://www.linkedin.com/in/adrianhhong/"
        target="_blank"
        rel="noreferrer noopener"
        ><b class="header--font">Adrian Hong</b></a
      >, a software developer based in Australia. I enjoy building things that
      make you <i>~feel good~</i>. I currently work at
      <a
        href="https://www.mongodb.com/"
        target="_blank"
        rel="noreferrer noopener"
        ><b class="header--font"> MongoDB</b>
      </a>
      as a full-stack engineer.
      <br />
      <br />
      Technologies I have worked with include:
    </p>
    <h4 class="tech">
      <Technologies
        icon="mdi mdi-language-javascript"
        text="Javascript"
      ></Technologies>
      <Technologies
        icon="mdi mdi-language-typescript"
        text="Typescript"
      ></Technologies>
      <Technologies icon="mdi mdi-language-html5" text="HTML5"></Technologies>
      <Technologies icon="mdi mdi-language-css3" text="CSS"></Technologies>
      <Technologies icon="mdi mdi-nodejs" text="Node.js"></Technologies>
      <Technologies icon="icon-express" text="Express.js"></Technologies>
      <Technologies icon="mdi mdi-react" text="React"></Technologies>
      <Technologies icon="icon-redux" text="Redux"></Technologies>
      <Technologies icon="mdi mdi-vuejs" text="Vue.js"></Technologies>
      <Technologies icon="icon-mongodb" text="MongoDB"></Technologies>
      <Technologies icon="mdi mdi-git" text="Git"></Technologies>
      <Technologies icon="mdi mdi-jira" text="Jira"></Technologies>
      <Technologies icon="mdi mdi-aws" text="AWS"></Technologies>
      <Technologies icon="mdi mdi-coffee" text="Mocha"></Technologies>
      <Technologies icon="icon-jest" text="Jest"></Technologies>
    </h4>
  </section>
</template>

<script>
import Technologies from "../../components/Technologies.vue";

export default {
  components: { Technologies },
};
</script>

<style scoped>
.tech {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-weight: 400;
}
</style>
