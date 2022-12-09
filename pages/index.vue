<template>
  <div>
    Nuxt 3 Render Mode Test
  </div>
</template>

<script lang="ts">
export default {
  name: "PageHomepage",
};
</script>

<style scoped>
div {
  pointer-events: none;
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(100vh*50px);
  width: 100vw;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
