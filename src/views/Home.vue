<template>
  <div>
    <Header />
    <About />
    <Experience />
    <Projects />
    <Connect />
  </div>
</template>

<script>
import About from "./home/About.vue";
import Experience from "./home/Experience.vue";
import Header from "./home/Header.vue";
import Projects from "./home/Projects.vue";
import Connect from "./home/Connect.vue";

export default {
  name: "Home",
  components: { About, Experience, Header, Projects, Connect },
};
</script>

<style>
/* Main */
p {
  font-size: 33px;
}

h2 {
  font-size: 50px;
}

h3 {
  font-size: 35px;
}

h4 {
  font-size: 25px;
}

h5 {
  font-size: 20px;
}

a {
  color: inherit;
  text-decoration: underline;
}

a:hover {
  color: var(--tertiary-color);
}

sup {
  font-size: 20px;
}

.container {
  width: min(90%, 1500px);
  margin-inline: auto;
  padding: 10px 0;
}

.header--font {
  font-family: var(--header);
}

.name--font {
  font-family: var(--name);
  font-weight: 700;
}

.description--font {
  font-family: var(--description);
  font-weight: 700;
}

@keyframes color-animate {
  0% {
    color: var(--accent1-color);
  }
  50% {
    color: var(--accent2-color);
  }
  100% {
    color: var(--accent1-color);
  }
}

.title--font {
  -webkit-animation: color-animate 5s ease infinite;
  animation: color-animate 5s ease infinite;
}

@media (max-width: 800px) {
  p {
    font-size: 20px;
  }

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 25px;
  }

  h4 {
    font-size: 15px;
  }

  h5 {
    font-size: 13px;
  }

  sup {
    font-size: 15px;
  }

  .mdi__contact {
    font-size: 36px;
  }
}

@media (max-width: 1500px) {
  .project--wrap {
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px;
  }
}
</style>
