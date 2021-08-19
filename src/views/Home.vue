<template>
  <div>
    <header class="header">
      <h1 class="header__name">Adrian Hong</h1>

      <!-- <section class="bookmarks">
        <h2 class="text--color-about">about</h2>
        <h2 class="text--color-work">work</h2>
        <h2 class="text--color-projects">projects</h2>
        <h2 class="text--color-contact">contact</h2>
      </section> -->

      <div class="header__scroll">
        <i>
          <span class="mdi mdi-chevron-double-down"></span>
        </i>
      </div>

      <div class="header__description">
        <h3>Software Engineer <br />Melbourne, Australia <br />2021</h3>
      </div>
    </header>

    <section class="container">
      <h2 class="subheading text--color-about">about</h2>
      <p>
        Heyo! I'm Adrian Hong, a software engineer based in Melbourne,
        Australia. I enjoy curating memorable products that are not only
        functional, but maintainable. I currently work at Telstra building the
        back-end API Gateway for Telstra's networks. I also develop the
        front-end admin and self-service portal to manage the platform.
        Technologies I have worked with include JavaScript ES6, TypeScript,
        HTML5, CSS, Vue.js, Node.js, Express.js, Git, NoSQL.
      </p>
    </section>

    <section class="container work">
      <h2 class="subheading text--color-work">experiences</h2>
      <h3>Work</h3>
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
      <h2 class="subheading text--color-contact">connect</h2>
      <p>Give me a buzz yea?</p>
      <a
        href="mailto: adrianhhong@gmail.com"
        target="_blank"
        rel="noreferrer noopener"
        class="header__icon--mail"
      >
        <span class="mdi mdi-email"></span>
      </a>
      <a
        href="https://www.linkedin.com/in/adrianhhong/"
        target="_blank"
        rel="noreferrer noopener"
        class="header__icon--linkedin"
      >
        <span class="mdi mdi-linkedin"></span>
      </a>
      <a
        href="https://github.com/adrianhhong"
        target="_blank"
        rel="noreferrer noopener"
        class="header__icon--github"
      >
        <span class="mdi mdi-github"></span>
      </a>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
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
  letter-spacing: 1vw;
  position: absolute;
  top: 60rem;
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

a {
  color: inherit;
  text-decoration: none; /* no underline */
}

a:hover {
  color: var(--tertiary-color);
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
  width: min(90%, 1000rem);
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
  min-width: 70rem;
  min-height: 70rem;
  margin-right: 20rem;
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
