<template>
  <div>
    <header class="header">
      <a
        href="mailto: adrianhhong@gmail.com"
        target="_blank"
        rel="noreferrer noopener"
        class="header__icon header__icon--adrian"
      >
        <span class="mdi mdi-cube-unfolded"></span>
      </a>
      <h1 class="header__name" id="header__name">Adrian Hong</h1>
      <a
        href="mailto: adrianhhong@gmail.com"
        target="_blank"
        rel="noreferrer noopener"
        class="header__icon header__icon--mail"
      >
        <span class="mdi mdi-email"></span>
      </a>
      <a
        href="https://www.linkedin.com/in/adrianhhong/"
        target="_blank"
        rel="noreferrer noopener"
        class="header__icon header__icon--linkedin"
      >
        <span class="mdi mdi-linkedin"></span>
      </a>
      <a
        href="https://github.com/adrianhhong"
        target="_blank"
        rel="noreferrer noopener"
        class="header__icon header__icon--github"
      >
        <span class="mdi mdi-github"></span>
      </a>
    </header>

    <div style="margin-top: 900rem"></div>

    <section class="bookmarks">
      <h2 class="text--color-about">about</h2>
      <h2 class="text--color-work">work</h2>
      <h2 class="text--color-projects">projects</h2>
      <h2 class="text--color-contact">contact</h2>
    </section>

    <section class="container">
      <h2 class="subheading text--color-about">about</h2>
      <p>
        delivery ahhhhhh moments since the 90s Heyo! I'm Adrian Hong, a software
        engineer based in Melbourne, Australia. I am currently working at
        Telstra, and constantly on the look out to further my skillset. Through
        my various experiences I have had the opportunity to curate memorable
        products that are not only functional, but maintainable. Technologies I
        have worked with include JavaScript ES6, TypeScript, HTML5, CSS, Vue.js,
        Node.js, Express.js, Git, NoSQL.
      </p>
    </section>

    <section class="container work">
      <h2 class="subheading text--color-work">work</h2>
      <h3>Experience</h3>
      <div class="work__item">
        <img
          class="work__logo"
          src="@/assets/telstra.svg"
          alt="Telstra"
          height="100"
          width="100"
        />
        <div class="work__title">
          <h4>Telstra</h4>
          <h5>2020 – Present</h5>
        </div>
        <div class="work__detail">
          <h4>Software Engineer</h4>
          <p>
            Working in the NaaS+ (Network as a Service) team, I work on building
            the back-end API Gateway for Telstra's networks. I also develop the
            front-end admin and self-service portal to manage the NaaS+
            platform.
          </p>
        </div>
      </div>
      <div class="work__item">
        <img
          class="work__logo"
          src="@/assets/woodside.svg"
          alt="Woodside"
          height="100"
          width="100"
        />
        <div class="work__title">
          <h4>Woodside Petroleum</h4>
          <h5>2018 – 2019</h5>
        </div>
        <div class="work__detail">
          <h4>Intern – Instrument Controls Engineer</h4>
          <p>
            Working in the Power Generation & Utilities team, I implemented
            software upgrades on the safety instrumented system for the Karratha
            Gas Plant in W.A.
          </p>
        </div>
      </div>
      <div class="work__item">
        <img
          class="work__logo"
          src="@/assets/deloitte.svg"
          alt="Deloitte"
          height="100"
          width="100"
        />
        <div class="work__title">
          <h4>Deloitte</h4>
          <h5>2018 – 2018</h5>
        </div>
        <div class="work__detail">
          <h4>Intern – Data Engineer</h4>
          <p>
            I created a logistic regression model in Python that predicts the
            likelihood of a business opportunity being attained by Deloitte.
            Overall accuracy of 79% (an improvement of 14% from user
            predictions).
          </p>
        </div>
      </div>
      <div class="work__item">
        <img
          class="work__logo"
          src="@/assets/telstra.svg"
          alt="Telstra"
          height="100"
          width="100"
        />
        <div class="work__title">
          <h4>Telstra</h4>
          <h5>2017 – 2018</h5>
        </div>
        <div class="work__detail">
          <h4>Intern – Network Engineer</h4>
          <p>
            I formulated detailed design packages and produced power audit
            appraisals for governement base station battery power upgrades.
          </p>
        </div>
      </div>
      <h3>Education</h3>
      <div class="work__item">
        <img
          class="work__logo"
          src="@/assets/monash.svg"
          alt="Monash"
          height="100"
          width="100"
        />
        <div class="work__title">
          <h4>Monash University</h4>
          <h5>2014 – 2019</h5>
        </div>
        <div class="work__detail">
          <h4>BCom & BEng (Honours)</h4>
          <p>Electrical & Computer Systems Engineering / Accounting</p>
        </div>
      </div>
    </section>

    <section class="container">
      <h2 class="subheading text--color-projects">projects</h2>

      <li>
        <h4>Crab & Coconuts</h4>
        <p>
          An online adaption of the bluffing based board game originally called
          Skull & Roses, but redesigned because crabs are cool.
        </p>
        <h5>Vue.js, Typescript, Node.js, Express.js Socket.IO</h5>
      </li>
    </section>

    <section class="container">
      <h2 class="subheading text--color-connect">connect</h2>
      <p>Give us a buzz yea?</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",

  created() {
    // Listen to scroll
    window.addEventListener("scroll", this.handleScroll);
    // Scroll to top on page reload
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (document.documentElement.scrollTop > 500) {
        document.getElementById("header__name").style.fontSize = "40rem";
        document.getElementById("header__name").style.marginTop = "5rem";
        document.getElementById("header__name").style.letterSpacing = "6rem";
      } else {
        document.getElementById("header__name").style.fontSize = "9.5vw";
        document.getElementById("header__name").style.marginTop = "205rem";
        document.getElementById("header__name").style.letterSpacing = "1vw";
      }
    },
  },
};
</script>

<style scoped>
.mdi {
  font-size: 48rem;
}

.header {
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  background: var(--secondary-color);
  color: var(--primary-color);
}

.header__icon {
  position: absolute;
}

.header__icon--adrian {
  left: 12rem;
  top: 0;
}

.header__icon--mail {
  right: 144rem;
  top: 0;
}

.header__icon--linkedin {
  right: 84rem;
  top: 0;
}

.header__icon--github {
  right: 24rem;
  top: 0;
}

.header__name {
  transition: 1.5s;
  font-size: 9.5vw;
  letter-spacing: 1vw;
  margin-top: 205rem;
  margin-bottom: 0rem;
}

a {
  color: inherit;
  text-decoration: none; /* no underline */
}

a:hover {
  color: var(--tertiary-color);
}

.bookmarks {
  width: 90vw;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  font-size: 1.5vw;
}

.text--color-about {
  color: var(--about-color);
}

.text--color-work {
  color: var(--work-color);
}

.text--color-projects {
  color: var(--projects-color);
}

.text--color-contact {
  color: var(--contact-color);
}

section {
  padding: 80rem 0;
}

.subheading {
  font-size: 50rem;
}

.container {
  width: min(90%, 900rem);
  margin-inline: auto;
}

p {
  font-size: 33rem;
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
  font-size: 25rem;
  margin: 0;
}

.work h5 {
  margin: auto;
  font-size: 21rem;
}

.work p {
  font-size: 18rem;
  text-align: start;
  margin: auto;
}

.work__item {
  display: flex;
  justify-content: space-between;
  margin: 30rem;
}

.work__logo {
  width: 100rem;
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

@media (max-width: 1200px) {
  p {
    font-size: 20rem;
  }

  .bookmarks {
    font-size: 20rem;
  }
}
</style>
