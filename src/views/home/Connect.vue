<template>
  <section class="container">
    <h2 class="title--font header--font">Connect</h2>
    <h3>Reach out, and say hello!</h3>
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
          onclick="window.scrollTo({top: 0, behavior: 'smooth'});"
          class="mdi mdi__contact mdi-arrow-up"
          style="cursor: pointer"
        >
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
/* Connect */
.mdi__contact {
  font-size: 72px;
}
</style>
