<template>
  <section id="main__section" class="container">
    <h2 class="title--font header--font">About</h2>
    <p>
      Hi there 👋 I'm
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
      as a front-end engineer (with a little bit of back-end sprinkled in there)
      ✨
      <br />
      <br />
      Technologies I have worked with include:
    </p>
    <h4 class="tech">
      <Technologies icon="mdi mdi-language-javascript" text="Javascript" />
      <Technologies icon="mdi mdi-language-typescript" text="Typescript" />
      <Technologies icon="mdi mdi-language-java" text="Java" />
      <Technologies icon="mdi mdi-language-html5" text="HTML5" />
      <Technologies icon="mdi mdi-language-css3" text="CSS" />
      <Technologies icon="mdi mdi-nodejs" text="Node.js" />
      <Technologies icon="icon-express" text="Express.js" />
      <Technologies icon="mdi mdi-react" text="React" />
      <!-- <Technologies icon="icon-redux" text="Redux" /> -->
      <Technologies icon="mdi mdi-vuejs" text="Vue.js" />
      <Technologies icon="icon-mongodb" text="MongoDB" />
      <Technologies icon="mdi mdi-git" text="Git" />
      <Technologies icon="mdi mdi-jira" text="Jira" />
      <Technologies icon="mdi mdi-aws" text="AWS" />
      <Technologies icon="mdi mdi-coffee" text="Mocha" />
      <Technologies icon="icon-jest" text="Jest" />
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
