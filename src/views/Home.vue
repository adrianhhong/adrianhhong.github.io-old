<template>
  <div>
    <header class="header">
      <div class="header__titles header--left">
        <div style="line-height: 100%" class="header__name header--font">
          Adrian<br />
          Hong
        </div>
        <br />
        <div class="header__subtitle">Software Developer</div>
      </div>
      <div class="header__scroll header--left">
        <span class="mdi mdi__contact mdi-chevron-double-down"></span>
      </div>
      <div class="header__description header--right">
        <a
          href="mailto: adrianhhong@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span class="mdi mdi__contact mdi-email"></span>
        </a>
        <a
          href="https://www.linkedin.com/in/adrianhhong/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span class="mdi mdi__contact mdi-linkedin"></span>
        </a>
        <a
          href="https://github.com/adrianhhong"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span class="mdi mdi__contact mdi-github"></span>
        </a>
      </div>
    </header>

    <section class="container">
      <h2 class="title--about header--font">about</h2>
      <p>
        Heyo! I'm <b class="header--font">Adrian Hong</b> a software developer
        based in Melbourne, Australia. I enjoy curating memorable products that
        are not only functional, but maintainable. I currently work at Telstra
        doing full-stack on the API Gateway for internal networks.
        <br />
        <br />
        Technologies I have worked with:
      </p>
      <h4 class="tech">
        <div class="tech__box">
          <span class="mdi mdi__technologies mdi-language-javascript"></span>
          JavaScript
        </div>
        <div class="tech__box">
          <span class="mdi mdi__technologies mdi-language-typescript"></span>
          TypeScript
        </div>
        <div class="tech__box">
          <span class="mdi mdi__technologies mdi-vuejs"></span>
          Vue.js
        </div>
        <div class="tech__box">
          <span class="mdi mdi__technologies mdi-language-html5"></span>
          HTML5
        </div>
        <div class="tech__box">
          <span class="mdi mdi__technologies mdi-nodejs"></span>
          Node.js
        </div>
        <div class="tech__box">
          <img src="@/assets/expressjs.svg" alt="ExpressJS" />
          Express.js
        </div>
        <div class="tech__box">
          <span class="mdi mdi__technologies mdi-language-css3"></span>
          CSS
        </div>
        <div class="tech__box">
          <img src="@/assets/mongodb.svg" alt="MongoDB" />
          MongoDB
        </div>
        <div class="tech__box">
          <span class="mdi mdi__technologies mdi-git"></span>
          Git
        </div>
      </h4>
    </section>

    <section class="container work">
      <h2 class="title--experience header--font">experience</h2>
      <h3 class="work__subtitle">work</h3>
      <hr />
      <div class="work__item">
        <div class="work__title">
          <h4>Telstra</h4>
          <h5>2020 – Present</h5>
        </div>
        <div class="work__detail">
          <h4>Software Developer</h4>
        </div>
      </div>
      <hr />
      <div class="work__item">
        <div class="work__title">
          <h4>Woodside Petroleum</h4>
          <h5>2018 – 2019</h5>
        </div>
        <div class="work__detail">
          <h4>Instrument Controls Engineer</h4>
          <h5>Internship</h5>
        </div>
      </div>
      <hr />
      <div class="work__item">
        <div class="work__title">
          <h4>Deloitte</h4>
          <h5>2018 – 2018</h5>
        </div>
        <div class="work__detail">
          <h4>Data Engineer</h4>
          <h5>Internship</h5>
        </div>
      </div>
      <hr />
      <div class="work__item">
        <div class="work__title">
          <h4>Telstra</h4>
          <h5>2017 – 2018</h5>
        </div>
        <div class="work__detail">
          <h4>Network Engineer</h4>
          <h5>Internship</h5>
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
          <h5>Electrical & Computer Systems Engineering • Accounting</h5>
        </div>
      </div>
    </section>

    <section class="container">
      <h2 class="title--projects header--font">projects</h2>
      <div class="project project--wrap">
        <div class="project__item">
          <a
            href="https://github.com/adrianhhong/crabandcoconuts"
            target="_blank"
            rel="noreferrer noopener"
          >
            <video class="video" autoplay muted loop>
              <source src="./videos/crabandcoconuts.mp4" type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </a>
        </div>
        <div class="project__item">
          <h3>
            <a
              href="https://github.com/adrianhhong/crabandcoconuts"
              target="_blank"
              rel="noreferrer noopener"
            >
              Crab & Coconuts
            </a>
          </h3>
          <div class="chip"><div class="chip__label">Vue.js</div></div>
          <div class="chip"><div class="chip__label">Typescript</div></div>
          <div class="chip"><div class="chip__label">Javascript</div></div>
          <div class="chip"><div class="chip__label">HTML</div></div>
          <div class="chip"><div class="chip__label">CSS</div></div>
          <div class="chip"><div class="chip__label">Socket.IO</div></div>
          <h4>
            An online adaption of the bluffing based board game called Skull &
            Roses, but redesigned because 🦀 crabs are cool 🦀.
          </h4>
          <a
            href="http://crabandcoconuts.herokuapp.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span class="mdi mdi__projects mdi-web"></span>
          </a>
          <a
            href="https://github.com/adrianhhong/crabandcoconuts"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span class="mdi mdi__projects mdi-github"></span>
          </a>
        </div>
      </div>
      <div class="project project--wrap">
        <div class="project__item">
          <a
            href="https://github.com/adrianhhong/just-one"
            target="_blank"
            rel="noreferrer noopener"
          >
            <video class="video" autoplay muted loop>
              <source src="./videos/justone.mp4" type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </a>
        </div>
        <div class="project__item">
          <h3>
            <a
              href="https://github.com/adrianhhong/just-one"
              target="_blank"
              rel="noreferrer noopener"
            >
              Just One
            </a>
          </h3>
          <div class="chip"><div class="chip__label">Javascript</div></div>
          <div class="chip"><div class="chip__label">HTML</div></div>
          <div class="chip"><div class="chip__label">CSS</div></div>
          <div class="chip"><div class="chip__label">Socket.IO</div></div>
          <h4>
            An online adaption of the board game Just One (a co-operative,
            word-guessing party game).
          </h4>
          <a
            href="https://justonegame.herokuapp.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span class="mdi mdi__projects mdi-web"></span>
          </a>
          <a
            href="https://github.com/adrianhhong/just-one"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span class="mdi mdi__projects mdi-github"></span>
          </a>
        </div>
      </div>
    </section>

    <section class="container">
      <h2 class="title--connect header--font">connect</h2>
      <h3>Give me a buzz yea?</h3>
      <a
        href="mailto: adrianhhong@gmail.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span class="mdi mdi__contact mdi-email"></span>
      </a>
      <a
        href="https://www.linkedin.com/in/adrianhhong/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span class="mdi mdi__contact mdi-linkedin"></span>
      </a>
      <a
        href="https://github.com/adrianhhong"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span class="mdi mdi__contact mdi-github"></span>
      </a>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "Home",
  mounted: function () {
    var tl = gsap.timeline();
    tl.from(".header__name", { y: 300, opacity: 0.5, duration: 1.2 });
    tl.from(".header__subtitle", {
      y: 100,
      opacity: 0,
      duration: 0.3,
      delay: 0.2,
    });
    tl.play();
  },
};
</script>

<style scoped>
/* Main */
p {
  font-size: 33rem;
}

h2 {
  font-size: 50rem;
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

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: var(--tertiary-color);
}

.container {
  width: min(90%, 1500rem);
  margin-inline: auto;
  padding: 10rem 0;
}

.header--font {
  font-family: var(--header);
}

/* Header */
.header {
  height: 100vh;
  width: calc(100vw - (100vw - 100%));
  background: var(--primary-color);
  color: var(--secondary-color);
}

.header__titles {
  position: absolute;
  top: 100rem;
}

.header__name {
  font-size: clamp(70rem, 22vw, 585rem);
  font-weight: bold;
  letter-spacing: 8rem;
}

.header__subtitle {
  font-size: clamp(20rem, 2vw, 100rem);
  letter-spacing: 2rem;
}

.header__scroll {
  position: absolute;
  bottom: 60rem;
}

.header--left {
  left: 60rem;
}

.header--right {
  right: 60rem;
}

.header__description {
  font-size: clamp(25rem, 2vw, 35rem);
  position: absolute;
  bottom: 60rem;
  text-align: right;
}

/* About */
.title--about {
  color: var(--accent1-color);
}

.mdi__technologies {
  font-size: 36rem;
}

.tech {
  display: flex;
  flex-flow: row wrap;
}

.tech__box {
  flex-grow: 1;
  width: 33%;
}

/* Experience */
.title--experience {
  color: var(--accent2-color);
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
  text-align: start;
  margin: auto;
}

.work__subtitle {
  margin-top: 40rem;
}

.work__item {
  display: flex;
  justify-content: space-between;
  margin: 15rem;
}

.work__title {
  width: 300rem;
  text-align: start;
}

.work__detail {
  margin-left: 50rem;
  width: 600rem;
  text-align: start;
}

/* Projects */
.title--projects {
  color: var(--accent3-color);
}

.project {
  justify-content: center;
  border-radius: 16rem;
  border: solid 1em var(--primary-color);
  margin: 36rem 0;
  display: flex;
  gap: 45rem;
}

.project--wrap {
  padding: 30rem;
}

.chip {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  border-radius: 9999px;
  border: solid 2em var(--primary-color);
  padding: 4rem 20rem;
  margin: 0 16rem 16rem 0;
}

.chip__label {
  font-size: 20rem;
  font-weight: bold;
}

.mdi__projects {
  font-size: 56rem;
}

.video {
  width: clamp(1px, 75vw, 800px);
}

/* Connect */
.title--connect {
  color: var(--accent4-color);
}

.mdi__contact {
  font-size: 72rem;
}

@media (max-width: 800px) {
  p {
    font-size: 20rem;
  }

  h2 {
    font-size: 40rem;
  }

  h3 {
    font-size: 25rem;
  }

  h4 {
    font-size: 18rem;
  }

  h5 {
    font-size: 15rem;
  }

  .header--left {
    left: 25rem;
  }

  .header--right {
    right: 25rem;
  }

  .chip {
    align-items: center;
    display: inline-flex;
    justify-content: center;
    border-radius: 9999px;
    border: solid 2em var(--primary-color);
    padding: 4rem 12rem;
    margin: 0 12rem 12rem 0;
  }

  .chip__label {
    font-size: 15rem;
    font-weight: bold;
  }

  .tech__box {
    flex-grow: 1;
    width: 50%;
  }

  .mdi__projects {
    font-size: 36rem;
  }

  .mdi__contact {
    font-size: 36rem;
  }
}

@media (max-width: 1500px) {
  .project--wrap {
    flex-wrap: wrap;
    justify-content: center;
    padding: 30rem;
  }
}
</style>
