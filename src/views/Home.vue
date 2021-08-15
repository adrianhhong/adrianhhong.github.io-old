<template>
  <div>
    <div id="header">
      <div id="header-icon">
        <span class="mdi mdi-cube-unfolded"></span>
      </div>
      <h1 id="name">Adrian Hong</h1>
      <div id="header-icon" style="right: 24px; top: 0">
        <span class="mdi mdi-github"></span>
      </div>
      <div id="header-icon" style="right: 96px; top: 0">
        <span class="mdi mdi-linkedin"></span>
      </div>
      <div id="header-icon" style="right: 168px; top: 0">
        <span class="mdi mdi-email"></span>
      </div>
    </div>
    <div>
      <h1 id="description">Software Developer based in Melbourne, Australia</h1>
    </div>
    <div>
      <h2>Skills</h2>
    </div>
    <div>
      <h2>Work</h2>
    </div>
    <div>
      <h2>Projects</h2>
    </div>
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
      if (document.documentElement.scrollTop > 200) {
        document.getElementById("name").style.fontSize = "40px";
        document.getElementById("name").style.marginTop = "5px";
      } else {
        document.getElementById("name").style.fontSize = "130px";
        document.getElementById("name").style.marginTop = "205px";
      }
    },
  },
};
</script>

<style scoped>
.mdi {
  font-size: 48px;
}

#header-icon {
  position: absolute;
  margin-top: 5px;
}

#name {
  transition: 1.5s;
  font-size: 130px;
  margin-top: 205px;
}

#description {
  font-size: 30px;
  margin-bottom: 1000px;
  margin-top: 600px;
}

#header {
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  background: #8ca7ae;
}
</style>
