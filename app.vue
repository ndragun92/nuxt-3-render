<template>
  <div>
    <nav>
      <nuxt-link to="/">Homepage</nuxt-link>
      <nuxt-link to="/swr">SWR useAsyncData()</nuxt-link>
      <nuxt-link to="/swr2">SWR useFetch()</nuxt-link>
      <nuxt-link to="/swr-test">SWR useAsyncData() with same key as SWR example</nuxt-link>
      <nuxt-link to="/static">Static</nuxt-link>
      <nuxt-link to="/prerender">Prerender</nuxt-link>
      <nuxt-link to="/client">Client</nuxt-link>
      <nuxt-link to="/redirect">Redirect</nuxt-link>
    </nav>
    <div class="container">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
html, body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0
}
nav {
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
}
nav a {
  color: white;
  text-decoration: none;
}
nav a.router-link-active {
  color: lightseagreen;
}

code {
  background: lightpink;
  padding: 5px 10px;
  border-radius: 5px;
}

pre {
  border-radius: 5px;
  padding: 20px;
  display: block;
  width: 100%;
  white-space: pre-line;
  background: black;
  color: white;
}

.container {
  max-width: 1024px;
  margin: auto;
}
</style>
