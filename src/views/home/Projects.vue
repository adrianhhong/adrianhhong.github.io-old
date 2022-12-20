<template>
  <section class="container">
    <h2 class="title--font header--font">Projects</h2>
    <Project
      title="Crab & Coconuts"
      github-link="https://github.com/adrianhhong/crabandcoconuts"
      website-link="http://crabandcoconuts.herokuapp.com/"
      :video-src="require(`@/assets/videos/crabandcoconuts.mp4`)"
      :technologies="[`Vue.js`, `Typescript`, `HTML`, `CSS`, `Socket.IO`]"
      description="An online adaption of the bluffing based board game called Skull &
            Roses, but redesigned because 🦀 crabs are cool 🦀. Jump into a room and play with mates! Uses WebSockets to maintain a live connection for the game rooms."
    >
    </Project>
    <Project
      title="Fake E-commerce Site"
      github-link="https://github.com/adrianhhong/fake-ecommerce"
      website-link="https://adrianhong.dev/fake-ecommerce/"
      :video-src="require(`@/assets/videos/fake-ecommerce.mp4`)"
      :technologies="[`React.js`, `Typescript`, `HTML`, `CSS`]"
      description="A fake e-commerce site using the Fake Store API. Features the
            ability to filter, search, and sort all items. Also allows a user to
            view their shopping cart, and edit their profile."
    >
    </Project>
    <Project
      title="Just One"
      github-link="https://github.com/adrianhhong/just-one"
      website-link="https://justonegame.herokuapp.com/"
      :video-src="require(`@/assets/videos/justone.mp4`)"
      :technologies="[`Javascript`, `HTML`, `CSS`, `Socket.IO`]"
      description="An online adaption of the board game Just One (a co-operative,
            word-guessing party game). Jump into a room and play with mates!"
    >
    </Project>
  </section>
</template>

<script>
import Project from "../../components/Project.vue";

export default {
  components: { Project },
};
</script>

<style scoped></style>
