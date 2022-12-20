<template>
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
    />
    <WorkItem
      title="LiteCard"
      timePeriod="2021 – 2022"
      link="https://litecard.com.au/"
      role="Software Developer"
      icon="icon-litecard"
    />
    <WorkItem
      title="Telstra"
      timePeriod="2020 – 2022"
      link="https://www.telstra.com.au/"
      role="Software Developer"
      icon="icon-telstra"
    />
    <WorkItem
      title="Woodside"
      timePeriod="2018 – 2019"
      link="https://www.woodside.com.au/"
      role="Instrumentation and Control Engineer"
      label="internship"
      icon="icon-woodside"
    />
    <WorkItem
      title="Deloitte"
      timePeriod="2018 – 2018"
      link="https://www2.deloitte.com/au/"
      role="Data Engineer"
      label="internship"
      icon="icon-deloitte"
    />
    <WorkItem
      title="Telstra"
      timePeriod="2017 – 2018"
      link="https://www.telstra.com.au/"
      role="Network Engineer"
      label="internship"
      icon="icon-telstra"
    />
    <h3 class="work__subtitle">Education</h3>
    <WorkItem
      title="Monash University"
      timePeriod="2014 – 2019"
      link="https://www.monash.edu/"
      role="BEngineering & BCommerce (Honours)"
      label="education"
      icon="icon-monash"
      majors="Electrical & Computer Systems Engineering • Accounting"
    />
  </section>
</template>

<script>
import WorkItem from "../../components/WorkItem.vue";

export default {
  components: { WorkItem },
};
</script>

<style scoped></style>
