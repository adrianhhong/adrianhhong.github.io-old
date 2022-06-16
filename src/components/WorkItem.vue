<template>
  <div>
    <hr />
    <div class="work__item">
      <div class="work__left">
        <span :class="`${icon} company__icon`" />
        <div class="work__title">
          <h4>
            <a :href="link" target="_blank" rel="noreferrer noopener"
              ><b class="header--font">{{ title }}</b></a
            >
          </h4>
          <h5>
            <b>
              {{ timePeriod }}
            </b>
          </h5>
        </div>
      </div>
      <div class="work__detail">
        <h4>{{ role }}</h4>
        <h6 v-if="label === 'current'">
          <span class="mdi mdi-octagram grey--font" />
          <span class="header--font grey--font">CURRENT</span>
        </h6>
        <h6 v-if="label === 'internship'">
          <span class="mdi mdi-school grey--font" />
          <span class="header--font grey--font">INTERNSHIP</span>
        </h6>
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
    icon: String,
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

.work h6 {
  margin: auto;
  font-size: 16px;
}

.work p {
  text-align: start;
  margin: auto;
}

.work__subtitle {
  margin-top: 40px;
}

.grey--font {
  color: #818181;
  margin-right: 12px;
}

.work__item {
  display: flex;
  justify-content: space-between;
  margin: 15px;
}

.work__left {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  min-width: 150px;
}

.company__icon {
  font-size: 36px;
  margin-right: 20px;
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

@media (max-width: 800px) {
  .company__icon {
    font-size: 24px;
    margin-right: 8px;
  }
}
</style>
