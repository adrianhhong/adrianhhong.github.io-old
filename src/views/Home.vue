<template>
  <div>
    <header class="header">
      <div class="header--min-height">
        <div class="header--center">
          <div class="header__name name--font">
            <div style="padding-left: 5vw; padding-right: 5vw">
              FULL STACK
              <span class="header__name--small">(front and back)</span>
            </div>
            <div style="padding-left: 7vw; padding-right: 7vw">
              SOFTWARE DEVELOPER
            </div>
            <div style="padding-left: 5vw; padding-right: 5vw">
              <span class="header__name--small">(based in)</span>
              SYDNEY, AUSTRALIA
            </div>
          </div>
          <div class="header__adrian name--font">Adrian Hong</div>
          <div class="header__coot">
            <svg
              :width="vw > vh ? `15vw` : `15vh`"
              length="auto"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="coot"
            >
              <path
                d="M9.24624 42C-2.25379 61.5 18.7462 88.7229 41.7462 90C64.7462 91.2771 80.7462 73.5 71.2462 49L53.7462 46C52.2462 52.6667 39.5 55.5 9.24624 42Z"
                fill="#0d0e0e"
                stroke="#0d0e0e"
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
                fill="#0d0e0e"
                stroke="#0d0e0e"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle cx="74.7462" cy="35" r="3" fill="white" />
            </svg>
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
      </div>
    </header>

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

    <section class="container work">
      <h2 class="title--font header--font">Experience</h2>
      <h3 class="work__subtitle">Work</h3>
      <WorkItem
        title="MongoDB"
        timePeriod="2022 – Present"
        link="https://www.mongodb.com/"
        role="Software Developer"
        label="current"
        icon="icon-mongodb"
      ></WorkItem>
      <WorkItem
        title="LiteCard"
        timePeriod="2021 – 2022"
        link="https://litecard.com.au/"
        role="Software Developer"
        icon="icon-litecard"
      ></WorkItem>
      <WorkItem
        title="Telstra"
        timePeriod="2020 – 2022"
        link="https://www.telstra.com.au/"
        role="Software Developer"
        icon="icon-telstra"
      ></WorkItem>
      <WorkItem
        title="Woodside"
        timePeriod="2018 – 2019"
        link="https://www.woodside.com.au/"
        role="Instrumentation and Control Engineer"
        label="internship"
        icon="icon-woodside"
      ></WorkItem>
      <WorkItem
        title="Deloitte"
        timePeriod="2018 – 2018"
        link="https://www2.deloitte.com/au/"
        role="Data Engineer"
        label="internship"
        icon="icon-deloitte"
      ></WorkItem>
      <WorkItem
        title="Telstra"
        timePeriod="2017 – 2018"
        link="https://www.telstra.com.au/"
        role="Network Engineer"
        label="internship"
        icon="icon-telstra"
      ></WorkItem>
      <h3 class="work__subtitle">Education</h3>
      <WorkItem
        title="Monash University"
        timePeriod="2014 – 2019"
        link="https://www.monash.edu/"
        role="BEngineering & BCommerce (Honours)"
        label="education"
        icon="icon-monash"
        majors="Electrical & Computer Systems Engineering • Accounting"
      ></WorkItem>
    </section>

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

    <section class="container">
      <h2 class="title--font header--font">Connect</h2>
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
import Project from "../components/Project.vue";
import WorkItem from "../components/WorkItem.vue";
import Technologies from "../components/Technologies.vue";

export default {
  name: "Home",
  components: { Project, WorkItem, Technologies },
  mounted: function () {
    var tl = gsap.timeline();
    tl.from(".header__name", { y: 100, opacity: 0, duration: 0.5 });
    tl.from(".header__adrian", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      delay: 0.1,
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
  font-weight: 400;
}

/* Header */
.header {
  min-height: 100vh;
  width: calc(100vw - (100vw - 100%));
  color: var(--secondary-color);
  -webkit-animation: gradient 10s ease infinite;
  animation: gradient 10s ease infinite;
  background: radial-gradient(
    var(--accent1-color),
    var(--accent2-color),
    var(--accent3-color),
    var(--accent4-color)
  );
  background-size: 200% 200%;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 70% 30%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 20% 70%;
  }
  100% {
    background-position: 0% 50%;
  }
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

.header--min-height {
  min-height: 100%;
}

.header--center {
  text-align: center;
  padding: 3vw;
}

.header__name {
  font-size: clamp(20px, 4vw, 90px);
  letter-spacing: -0.2vw;
  line-height: 100%;
  margin-top: 5vh;
}

.header__name--small {
  font-size: clamp(10px, 2vw, 70px);
}

.header__adrian {
  margin-top: 9vh;
  font-size: clamp(40px, 14vw, 130px);
  font-weight: 700;
  margin-bottom: 10vh;
  line-height: 100%;
  letter-spacing: -0.2vw;
}

.header__subtitle {
  font-size: clamp(15px, 2vw, 40px);
  letter-spacing: 2px;
  margin-bottom: 5vh;
}

.header__coot {
  margin-bottom: 5vh;
}

#header__scroll {
  position: absolute;
  right: 5%;
  bottom: 2vh;
  z-index: 1;
}

.coot {
  animation-name: bounce;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
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

.title--font {
  -webkit-animation: color-animate 5s ease infinite;
  animation: color-animate 5s ease infinite;
}

/* About */
.tech {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-weight: 400;
}

/* Connect */
.mdi__contact {
  font-size: 72px;
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

  .chip {
    align-items: center;
    display: inline-flex;
    justify-content: center;
    border-radius: 9999px;
    border: solid 1px var(--primary-color);
    padding: 2px 12px;
    margin: 0 12px 12px 0;
  }

  .chip__label {
    font-size: 13px;
    font-weight: bold;
  }

  .tech {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .mdi__projects {
    font-size: 36px;
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
