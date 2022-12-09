<template>
  <div>
    <h1>SWR with useAsyncData() using same cache key</h1>
    <pre>
      const { data } = await useAsyncData('swr', () => $fetch('https://catfact.ninja/fact'))

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
  name: "PageSWR",
};
</script>

<script lang="ts" setup>
console.info('DEBUG: SWR TEST', import.meta.env.SSR);
const { data } = await useAsyncData('swr', () => $fetch('https://catfact.ninja/fact'))

const date = () => {
  return new Date()
}
</script>