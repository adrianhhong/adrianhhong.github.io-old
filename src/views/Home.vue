<template>
  <div>
    <header class="header">
      <div class="header__color">
        <div>
          <div class="header__color--1"></div>
          <div class="header__color--2"></div>
        </div>
        <div>
          <div class="header__color--3"></div>
          <div class="header__color--4"></div>
        </div>
      </div>
      <h1 class="header__name">Adrian Hong</h1>
      <h2 class="header__subtitle">Software Developer</h2>
      <div class="header__scroll">
        <span class="mdi mdi-chevron-double-down"></span>
      </div>
      <div class="header__description">
        <h3>Melbourne, Australia <br />2021</h3>
        <a
          href="mailto: adrianhhong@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span class="mdi mdi-email"></span>
        </a>
        <a
          href="https://www.linkedin.com/in/adrianhhong/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span class="mdi mdi-linkedin"></span>
        </a>
        <a
          href="https://github.com/adrianhhong"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span class="mdi mdi-github"></span>
        </a>
      </div>
    </header>

    <section class="container">
      <h2 class="subheading text--color-about">about</h2>
      <p>
        Heyo! I'm <b>Adrian Hong</b> a software developer based in
        <b>Melbourne, Australia</b>. I enjoy curating memorable products that
        are not only functional, but maintainable. I currently work at
        <b>Telstra</b>
        doing full-stack on the internal API Gateway for Telstra's networks.
        <br />
        <br />
        Technologies I have worked with:
      </p>

      <h4 style="font-size: 30rem">
        <ul>
          <li>
            <span class="mdi mdi-language-javascript"></span>
            JavaScript
          </li>
          <li>
            <span class="mdi mdi-language-typescript"></span>
            TypeScript
          </li>
          <li>
            <span class="mdi mdi-vuejs"></span>
            Vue.js
          </li>
          <li>
            <span class="mdi mdi-language-html5"></span>
            HTML5
          </li>
          <li>
            <span class="mdi mdi-nodejs"></span>
            Node.js
          </li>
          <li>
            <img src="@/assets/expressjs.svg" alt="ExpressJS" />
            Express.js
          </li>
          <li>
            <span class="mdi mdi-language-css3"></span>
            CSS
          </li>
          <li>
            <img src="@/assets/mongodb.svg" alt="MongoDB" />
            MongoDB
          </li>
          <li>
            <span class="mdi mdi-git"></span>
            Git
          </li>
        </ul>
      </h4>
    </section>

    <section class="container work">
      <h2 class="subheading text--color-work">experience</h2>
      <h3 class="work__subtitle">work</h3>
      <hr />
      <div class="work__item">
        <div class="work__title">
          <h4>Telstra</h4>
          <h5>2020 – Present</h5>
        </div>
        <div class="work__detail">
          <h4>Software Engineer</h4>
        </div>
      </div>
      <hr />
      <div class="work__item">
        <div class="work__title">
          <h4>Woodside Petroleum</h4>
          <h5>2018 – 2019</h5>
        </div>
        <div class="work__detail">
          <h4>Intern • Instrument Controls Engineer</h4>
        </div>
      </div>
      <hr />
      <div class="work__item">
        <div class="work__title">
          <h4>Deloitte</h4>
          <h5>2018 – 2018</h5>
        </div>
        <div class="work__detail">
          <h4>Intern • Data Engineer</h4>
        </div>
      </div>
      <hr />
      <div class="work__item">
        <div class="work__title">
          <h4>Telstra</h4>
          <h5>2017 – 2018</h5>
        </div>
        <div class="work__detail">
          <h4>Intern • Network Engineer</h4>
        </div>
      </div>
      <h3 class="work__subtitle">education</h3>
      <hr />
      <div class="work__item">
        <div class="work__title">
          <h4>Monash University</h4>
          <h5>2014 – 2019</h5>
        </div>
        <div class="work__detail">
          <h4>BEngineering & BCommerce (Honours)</h4>
          <p>Electrical & Computer Systems Engineering • Accounting</p>
        </div>
      </div>
    </section>

    <section class="container">
      <h2 class="subheading text--color-projects">projects</h2>
      <div class="project">
        <h3>
          <router-link to="crab">Crab & Coconuts</router-link>
        </h3>
        <div class="chip"><div class="chip__label">Vue.js</div></div>
        <div class="chip"><div class="chip__label">Socket.IO</div></div>
        <div class="chip"><div class="chip__label">Typescript</div></div>
        <div class="chip"><div class="chip__label">Node.js</div></div>
        <div class="chip"><div class="chip__label">Express.js</div></div>
        <h4>
          An online adaption of the bluffing based board game called Skull &
          Roses, but redesigned because crabs are cool.
        </h4>
        <a
          href="http://crabandcoconuts.herokuapp.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span class="mdi mdi-web"></span>
        </a>
        <a
          href="https://github.com/adrianhhong/crabandcoconuts"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span class="mdi mdi-github"></span>
        </a>
        <h5>
          <router-link to="crab"> See More → </router-link>
        </h5>
      </div>
      <div class="project">
        <h3>
          <router-link to="just-one">Just One </router-link>
        </h3>
        <div class="chip"><div class="chip__label">Javascript</div></div>
        <div class="chip"><div class="chip__label">Socket.IO</div></div>
        <div class="chip"><div class="chip__label">HTML</div></div>
        <div class="chip"><div class="chip__label">CSS</div></div>
        <h4>Online implementation of the Just One Board Game.</h4>
        <a
          href="http://crabandcoconuts.herokuapp.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span class="mdi mdi-web"></span>
        </a>
        <a
          href="https://github.com/adrianhhong/crabandcoconuts"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span class="mdi mdi-github"></span>
        </a>
        <h5>
          <router-link to="just-one"> See More → </router-link>
        </h5>
      </div>
    </section>

    <section class="container">
      <h2 class="subheading text--color-contact">connect</h2>
      <p>Give me a buzz yea?</p>
      <a
        href="mailto: adrianhhong@gmail.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span class="mdi mdi-email"></span>
      </a>
      <a
        href="https://www.linkedin.com/in/adrianhhong/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span class="mdi mdi-linkedin"></span>
      </a>
      <a
        href="https://github.com/adrianhhong"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span class="mdi mdi-github"></span>
      </a>
    </section>
    <small style="text-align: end; margin-top: 80px">
      This website was made by Adrian Hong using Vue.js :)
    </small>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.header__color {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: 4rem auto;
}

.header__color--1,
.header__color--2,
.header__color--3,
.header__color--4 {
  display: inline-block;
  width: 10vw;
  height: 10vw;
  margin: 30rem 30rem;
  border-radius: 50%;
  -webkit-animation-name: color;
  animation-name: color;
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-play-state: running;
  animation-play-state: running;
  -webkit-animation-timing-function: cubic-bezier(0.35, 0, 0.15, 1);
  animation-timing-function: cubic-bezier(0.35, 0, 0.15, 1);
}

.header__color--1 {
  background-color: var(--accent1-color);
}

.header__color--2 {
  -webkit-animation-delay: 0.25s;
  animation-delay: 0.25s;
  background-color: var(--accent2-color);
}

.header__color--3 {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
  background-color: var(--accent3-color);
}

.header__color--4 {
  -webkit-animation-delay: 0.75s;
  animation-delay: 0.75s;
  background-color: var(--accent4-color);
}

@keyframes color {
  0% {
    -webkit-transform: rotateY(0) scale(1);
    transform: rotateY(0) scale(1);
  }
  60% {
    -webkit-transform: rotateY(0) scale(1);
    transform: rotateY(0) scale(1);
  }
  70% {
    -webkit-transform: rotateY(0) scale(0.9);
    transform: rotateY(0) scale(0.9);
  }
  75% {
    -webkit-transform: rotateY(0) scale(1.2);
    transform: rotateY(0) scale(1.2);
  }
  100% {
    -webkit-transform: rotateY(0) scale(1);
    transform: rotateY(0) scale(1);
  }
}

.project {
  justify-content: center;
  border-radius: 16rem;
  border: solid 1em var(--primary-color);
  padding: 30rem;
  margin: 36rem 0;
}

.chip {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  border-radius: 9999px;
  border: solid 1em var(--primary-color);
  padding: 3rem 16rem;
  margin: 0 16rem 16rem 0;
}

.chip__label {
  font-size: 16rem;
}

ul {
  columns: 3;
  -webkit-columns: 3;
  -moz-columns: 3;
}

li {
  height: 60rem;
  line-height: 200%;
}

.mdi {
  font-size: 48rem;
}

.header {
  height: 100vh;
  width: calc(100vw - (100vw - 100%));
  background: var(--primary-color);
  color: var(--secondary-color);
}

.header__name {
  font-size: 60rem;
  letter-spacing: 15rem;
  position: absolute;
  top: 60rem;
  left: 60rem;
}

.header__subtitle {
  font-size: 40rem;
  letter-spacing: 8rem;
  position: absolute;
  top: 190rem;
  left: 60rem;
}

.header__scroll {
  position: absolute;
  bottom: 60rem;
  left: 60rem;
}

.header__description {
  position: absolute;
  bottom: 60rem;
  right: 60rem;
  text-align: right;
}

.bookmarks {
  width: 50vw;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  font-size: 1.5vw;
  position: absolute;
  top: 30rem;
  right: 30rem;
}

a {
  color: inherit;
  text-decoration: none; /* no underline */
}

a:hover {
  color: var(--tertiary-color);
}

.text--color-about {
  color: var(--accent1-color);
}

.text--color-work {
  color: var(--accent2-color);
}

.text--color-projects {
  color: var(--accent3-color);
}

.text--color-contact {
  color: var(--accent4-color);
}

section {
  padding: 80rem 0;
}

.subheading {
  font-size: 50rem;
}

.container {
  width: min(90%, 1000rem);
  margin-inline: auto;
}

p {
  font-size: 33rem;
}

h1 {
  font-size: 40rem;
}

h2 {
  font-size: 38rem;
}

h3 {
  font-size: 35rem;
}

h4 {
  font-size: 25rem;
}

h5 {
  font-size: 20rem;
}

.work h3 {
  text-align: start;
}

.work h4 {
  margin: 0;
}

.work h5 {
  margin: auto;
}

.work p {
  font-size: 18rem;
  text-align: start;
  margin: auto;
}

.work__subtitle {
  margin-top: 64rem;
}

.work__item {
  display: flex;
  justify-content: space-between;
  margin: 30rem;
}

.work__title {
  width: 300rem;
  text-align: start;
}

.work__detail {
  margin-left: 100rem;
  width: 600rem;
  text-align: start;
}

@media (max-width: 800px) {
  p {
    font-size: 20rem;
  }

  .bookmarks {
    font-size: 20rem;
  }
}
</style>
