<template>
  <div>
    <hr />
    <div class="work__item">
      <div class="work__title">
        <h4>
          <h4>
            <a :href="link" target="_blank" rel="noreferrer noopener"
              ><b class="header--font">{{ title }}</b></a
            >
          </h4>
        </h4>
        <h5>{{ timePeriod }}</h5>
      </div>
      <div class="work__detail">
        <h4>{{ role }}</h4>
        <h5 v-if="label === 'current'">
          <span class="mdi mdi-briefcase" /> Current
        </h5>
        <h5 v-if="label === 'internship'">
          <span class="mdi mdi-school" /> Internship
        </h5>
        <h5 v-if="label === 'education'">
          {{ majors }}
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    timePeriod: String,
    link: String,
    role: String,
    label: String,
    majors: String,
  },
};
</script>

<style scoped>
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
  margin-top: 40px;
}

.work__item {
  display: flex;
  justify-content: space-between;
  margin: 15px;
}

.work__title {
  width: 300px;
  min-width: 100px;
  text-align: start;
}

.work__detail {
  margin-left: 50px;
  width: 600px;
  text-align: start;
}
</style>
