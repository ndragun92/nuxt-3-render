<template>
  <div>
    <h1>Prerender</h1>
    <pre>
      const { data } = await useFetch('https://catfact.ninja/fact')

      const date = () => {
        return new Date()
      }
    </pre>
    <code>{{ date() }}</code>
    <pre>
      {{ data }}
    </pre>
  </div>
</template>

<script lang="ts">
export default {
  name: "PagePrerender",
};
</script>

<script lang="ts" setup>
console.info('DEBUG: PRERENDER', import.meta.env.SSR);
const { data } = await useFetch('https://catfact.ninja/fact')

const date = () => {
  return new Date()
}
</script>