<template>
  <div class="project project--wrap">
    <div class="project__item">
      <a :href="githubLink" target="_blank" rel="noreferrer noopener">
        <video class="video" autoplay muted loop>
          <source :src="videoSrc" type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </a>
    </div>
    <div class="project__item">
      <h3>
        <a :href="githubLink" target="_blank" rel="noreferrer noopener">
          <b class="header--font">{{ title }}</b>
        </a>
      </h3>
      <div v-for="chip in technologies" :key="chip" class="chip">
        <div class="chip__label">{{ chip }}</div>
      </div>
      <h4>
        {{ description }}
      </h4>
      <a :href="websiteLink" target="_blank" rel="noreferrer noopener">
        <span class="mdi mdi__projects mdi-web"></span>
      </a>
      <a :href="githubLink" target="_blank" rel="noreferrer noopener">
        <span class="mdi mdi__projects mdi-github"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    githubLink: String,
    websiteLink: String,
    videoSrc: String,
    technologies: Array,
    description: String,
  },
};
</script>

<style scoped>
.project {
  justify-content: center;
  border-radius: 16px;
  border: solid 1px var(--primary-color);
  margin: 36px 0;
  display: flex;
  gap: 45px;
}

.project--wrap {
  padding: 30px;
}

.chip {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  border-radius: 9999px;
  border: solid 2px var(--primary-color);
  padding: 4px 20px;
  margin: 0 16px 16px 0;
}

.chip__label {
  font-size: 20px;
  font-weight: bold;
}

.mdi__projects {
  font-size: 56px;
}

.video {
  width: clamp(1px, 75vw, 800px);
}

@media (max-width: 800px) {
  .chip {
    align-items: center;
    display: inline-flex;
    justify-content: center;
    border-radius: 9999px;
    border: solid 1px var(--primary-color);
    padding: 2px 12px;
    margin: 0 12px 12px 0;
  }

  .chip__label {
    font-size: 13px;
    font-weight: bold;
  }

  .mdi__projects {
    font-size: 36px;
  }
}
</style>
