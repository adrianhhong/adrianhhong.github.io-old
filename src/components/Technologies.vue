<template>
  <div class="mdi__box header--font">
    <span :class="`mdi__technologies ${icon}`"></span>
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    icon: String,
  },
};
</script>

<style scoped>
.mdi__box {
  display: flex;
  align-items: center;
}
.mdi__technologies {
  font-size: 36px;
  margin-right: 12px;
}

@media (max-width: 800px) {
  .mdi__technologies {
    font-size: 24px;
    margin-right: 8px;
  }
}
</style>
