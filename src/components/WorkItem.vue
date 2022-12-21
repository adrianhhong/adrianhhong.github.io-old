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
          <div class="chip">
            <span class="mdi mdi-octagram chip--icon" />
            <div class="chip__label header--font">CURRENT</div>
          </div>
        </h6>
        <h6 v-if="label === 'internship'">
          <div class="chip">
            <span class="mdi mdi-school chip--icon" />
            <div class="chip__label header--font">INTERNSHIP</div>
          </div>
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
.chip {
  align-items: center;
  display: inline-flex;
  border-radius: 9999px;
  background: var(--primary-color);
  padding: 4px 20px;
}

.chip__label {
  font-size: 14px;
  font-weight: bold;
  color: var(--secondary-color);
}

.chip--icon {
  color: var(--secondary-color);
  margin-right: 8px;
  display: flex;
  align-items: center;
}

@media (max-width: 800px) {
  .chip {
    align-items: center;
    display: inline-flex;
    justify-content: center;
    border-radius: 9999px;
    padding: 2px 8px;
  }

  .chip__label {
    font-size: 8px;
    font-weight: bold;
    color: var(--secondary-color);
  }

  .chip--icon {
    color: var(--secondary-color);
    margin-right: 4px;
    display: flex;
    align-items: center;
    font-size: 10px;
  }
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
