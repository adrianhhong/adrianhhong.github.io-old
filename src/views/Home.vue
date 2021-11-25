<template>
  <div>
    <header class="header">
      <div class="header--min-height">
        <div class="header--right">
          <div class="header__name header--font">
            adrian<br />
            hong
          </div>
          <div class="header__subtitle header--font">
            software developer <br />melbourne, australia <br />
            2021
          </div>
          <div class="header__contact">
            <a
              href="mailto: adrianhhong@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span id="contact1" class="mdi mdi__contact mdi-email"></span>
            </a>
            <a
              href="https://www.linkedin.com/in/adrianhhong/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span id="contact2" class="mdi mdi__contact mdi-linkedin"></span>
            </a>
            <a
              href="https://github.com/adrianhhong"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span id="contact3" class="mdi mdi__contact mdi-github"></span>
            </a>
          </div>
        </div>
        <div id="header__scroll">
          <a
            onClick="document.getElementById('main__section').scrollIntoView({ block: 'start',  behavior: 'smooth'});"
            class="mdi mdi__contact mdi-arrow-down"
            style="cursor: pointer"
          >
          </a>
        </div>
        <div class="header__coot">
          <div>
            <svg
              width="50%"
              height="auto"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click="cootClassActive = !cootClassActive"
              :class="{ coot: cootClassActive }"
              style="cursor: pointer"
            >
              <path
                d="M9.24624 42C-2.25379 61.5 18.7462 88.7229 41.7462 90C64.7462 91.2771 80.7462 73.5 71.2462 49L53.7462 46C52.2462 52.6667 39.5 55.5 9.24624 42Z"
                fill="#191a1a"
                stroke="#191a1a"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M83.8129 34.3283C86.7963 36.2956 91.587 36.2812 93.8599 38.2621C93.2724 44.1653 84.2345 44.3813 79.7462 43.5278L83.8129 34.3283Z"
                fill="#fff"
              />
              <circle
                cx="64.7462"
                cy="31"
                r="19.5"
                fill="#191a1a"
                stroke="#191a1a"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle cx="74.7462" cy="35" r="3" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </header>

    <section id="main__section" class="container">
      <h2 class="title--about header--font">about</h2>
      <p>
        Heyo! I'm <b class="header--font">Adrian Hong</b> a software developer
        based in Melbourne, Australia. I enjoy curating memorable products that
        are not only functional, but are aesthetically pleasing too. I currently
        work at Telstra as a full-stack engineer, developing the API Gateway for
        internal networks.
        <br />
        <br />
        Technologies I have worked with include:
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
          <h4>LiteCard Solutions</h4>
          <h5>2021 – Present</h5>
        </div>
        <div class="work__detail">
          <h4>Software Developer</h4>
          <h5><span class="mdi mdi-briefcase" /> Current</h5>
        </div>
      </div>
      <hr />
      <div class="work__item">
        <div class="work__title">
          <h4>Telstra</h4>
          <h5>2020 – Present</h5>
        </div>
        <div class="work__detail">
          <h4>Software Developer</h4>
          <h5><span class="mdi mdi-briefcase" /> Current</h5>
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
          <h5><span class="mdi mdi-school" /> Internship</h5>
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
          <h5><span class="mdi mdi-school" /> Internship</h5>
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
          <h5><span class="mdi mdi-school" /> Internship</h5>
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
            href="https://github.com/adrianhhong/fake-ecommerce"
            target="_blank"
            rel="noreferrer noopener"
          >
            <video class="video" autoplay muted loop>
              <source src="./videos/fake-ecommerce.mp4" type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </a>
        </div>
        <div class="project__item">
          <h3>
            <a
              href="https://github.com/adrianhhong/fake-ecommerce"
              target="_blank"
              rel="noreferrer noopener"
            >
              Fake E-commerce Site
            </a>
          </h3>
          <div class="chip"><div class="chip__label">React.js</div></div>
          <div class="chip"><div class="chip__label">Typescript</div></div>
          <div class="chip"><div class="chip__label">Material UI</div></div>
          <h4>A fake e-commerce site using the Fake Store API.</h4>
          <a
            href="https://adrianhhong.github.io/fake-ecommerce/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span class="mdi mdi__projects mdi-web"></span>
          </a>
          <a
            href="https://github.com/adrianhhong/fake-ecommerce"
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
      <h3>Send me a Hiii<sup>1</sup> or Heyyy<sup>2</sup>!</h3>
      <h5>
        <sup>1</sup>
        <a
          href="https://youtu.be/X74OxXravDo"
          target="_blank"
          rel="noreferrer noopener"
        >
          With a bunch of I's </a
        ><br />
        <sup>2</sup>
        <a
          href="https://youtu.be/X74OxXravDo"
          target="_blank"
          rel="noreferrer noopener"
        >
          With a bunch of Y's
        </a>
      </h5>
      <div style="display: flex; justify-content: space-between">
        <div>
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
        <div>
          <a
            onclick='window.scrollTo({top: 0, behavior: "smooth"});'
            class="mdi mdi__contact mdi-arrow-up"
            style="cursor: pointer"
          >
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "Home",
  data: function () {
    return {
      cootClassActive: true,
    };
  },
  mounted: function () {
    var tl = gsap.timeline();
    tl.from(".header__name", { y: 100, opacity: 0, duration: 0.5 });
    tl.from(".header__subtitle", {
      y: 100,
      opacity: 0,
      duration: 0.3,
      delay: 0.1,
    });
    tl.from("#contact1", {
      y: 100,
      opacity: 0,
      duration: 0.1,
    });
    tl.from("#contact2", {
      y: 100,
      opacity: 0,
      duration: 0.1,
    });
    tl.from("#contact3", {
      y: 100,
      opacity: 0,
      duration: 0.1,
    });
    tl.from("#header__scroll", {
      y: -100,
      opacity: 0,
      duration: 0.3,
    });
    tl.from(".header__coot", {
      x: -100,
      opacity: 0,
      duration: 1,
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

sup {
  font-size: 20rem;
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
  min-height: 100vh;
  width: calc(100vw - (100vw - 100%));
  /* background: var(--primary-color); */
  color: var(--secondary-color);
  -webkit-animation: background-animate 15s linear infinite;
  animation: background-animate 15s linear infinite;
}

@keyframes background-animate {
  0% {
    background-color: var(--accent1-color);
  }
  20% {
    background-color: var(--accent2-color);
  }
  40% {
    background-color: var(--accent3-color);
  }
  60% {
    background-color: var(--accent4-color);
  }
  80% {
    background-color: var(--accent5-color);
  }
  100% {
    background-color: var(--accent1-color);
  }
}

@keyframes color-animate {
  0% {
    color: var(--accent1-color);
  }
  20% {
    color: var(--accent2-color);
  }
  40% {
    color: var(--accent3-color);
  }
  60% {
    color: var(--accent4-color);
  }
  80% {
    color: var(--accent5-color);
  }
  100% {
    color: var(--accent1-color);
  }
}

.header--min-height {
  min-height: 100%;
}

.header--right {
  text-align: right;
  padding: 3vw;
}

.header__name {
  font-size: clamp(40rem, 16vw, 200rem);
  font-weight: bold;
  letter-spacing: 8rem;
  line-height: 100%;
  margin-bottom: 10vh;
}

.header__subtitle {
  font-size: clamp(15rem, 2vw, 40rem);
  letter-spacing: 2rem;
  margin-bottom: 5vh;
}

.header__coot {
  position: absolute;
  bottom: 3vw;
  left: 3vw;
}

#header__scroll {
  position: absolute;
  left: 50%;
  bottom: 2vh;
}

.coot {
  animation-name: bounce;
  animation-duration: 600ms;
  animation-iteration-count: infinite;
}

@keyframes bounce {
  0% {
    transform: translateY(0px);
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  50% {
    transform: translateY(50px);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: translateY(0px);
  }
}

/* About */
.title--about {
  /* color: var(--accent1-color); */
  -webkit-animation: color-animate 15s linear infinite;
  animation: color-animate 15s linear infinite;
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
  /* color: var(--accent2-color); */
  -webkit-animation: color-animate 15s linear infinite;
  animation: color-animate 15s linear infinite;
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
  /* color: var(--accent3-color); */
  -webkit-animation: color-animate 15s linear infinite;
  animation: color-animate 15s linear infinite;
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
  /* color: var(--accent4-color); */
  -webkit-animation: color-animate 15s linear infinite;
  animation: color-animate 15s linear infinite;
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

  sup {
    font-size: 15rem;
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
