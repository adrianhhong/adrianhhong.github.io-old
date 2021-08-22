<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap");
#app {
  font-family: "Gowun Batang", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--primary-color);
}

body {
  background: var(--secondary-color);
}
</style>
