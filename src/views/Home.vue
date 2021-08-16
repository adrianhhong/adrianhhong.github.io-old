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

    <section>
      <h1 class="description">
        Software Developer based in Melbourne, Australia
      </h1>
    </section>

    <section class="bookmarks">
      <h2 class="bookmarks__about">about</h2>
      <h2 class="bookmarks__work">work</h2>
      <h2 class="bookmarks__projects">projects</h2>
      <h2 class="bookmarks__contact">contact</h2>
    </section>

    <section class="container">
      <h2 class="subheading">about</h2>
      <p>
        Hi, I'm Adrian Hong, a software developer based in Melbourne, Australia.
        I enjoy front-end development, but do dabble in the back-end side of
        things too. Technologies I have worked with include JavaScript,
        TypeScript, HTML, CSS, Vue.js, Node.js, Express.js, NoSQL.
      </p>
    </section>

    <section class="container">
      <h2 class="subheading">work</h2>
      <h3>Education</h3>
      <ul>
        <li>
          <h4>Monash University</h4>
          <p>
            Bachelor of Commerce and Bachelor of Engineering (Honours) –
            Electrical and Computer Systems Engineering / Accounting
          </p>
          <h5>Mar 2014 – Jul 2019</h5>
        </li>
      </ul>
      <h3>Experience</h3>
      <ul>
        <li>
          <h4>Telstra</h4>
          <p>Software Engineer – Network as a Service</p>
          <h5>Jan 2020 – Present</h5>
        </li>
        <li>
          <h4>Woodside Petroleum</h4>
          <p>
            Internship – Instrument Controls Engineering (Power Generation &
            Utilities)
          </p>
          <h5>Nov 2018 – Feb 2019</h5>
        </li>
        <li>
          <h4>Deloitte</h4>
          <p>Internship – Internal Strategic Capabilities (Data)</p>
          <h5>Jun 2018 – Jul 2018</h5>
        </li>
        <li>
          <h4>Telstra</h4>
          <p>Internship – Wireless Radio Design (Networks)</p>
          <h5>Nov 2017 – May 2018</h5>
        </li>
      </ul>
    </section>

    <section class="container">
      <h2 class="subheading">projects</h2>
      <ul>
        <li>
          <h4>Crab & Coconuts</h4>
          <p>
            An online adaption of the bluffing based board game originally
            called Skull & Roses, but redesigned because crabs are cool.
          </p>
          <h5>Vue.js, Typescript, Socket.IO</h5>
        </li>
      </ul>
    </section>

    <section class="container">
      <h2 class="subheading">connect</h2>
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
        document.getElementById("header__name").style.fontSize = "180rem";
        document.getElementById("header__name").style.marginTop = "205rem";
        document.getElementById("header__name").style.letterSpacing = "40rem";
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
  font-size: 180rem;
  letter-spacing: 40rem;
  margin-top: 205rem;
  margin-bottom: 0rem;
}

.description {
  font-size: 50rem;
  margin: 360rem 0;
}

a {
  color: inherit;
  text-decoration: none; /* no underline */
}

a:hover {
  color: var(--tertiary-color);
}

.bookmarks {
  width: 1400rem;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  font-size: 40rem;
}

.bookmarks__about {
  color: var(--about-color);
}

.bookmarks__work {
  color: var(--work-color);
}

.bookmarks__projects {
  color: var(--projects-color);
}

.bookmarks__contact {
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
  font-size: 30rem;
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

@media (max-width: 1000px) {
  p {
    font-size: 20rem;
  }
  body {
    background-color: red;
  }
}
</style>
