<template>
  <div>
    <Layout />
  </div>
</template>

<script>
import Layout from '../components/templates/Layout.vue'

export default {
  components: { Layout }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

html {
  transition: .15s ease;
  font-family: "Poppins";
}
.dark-mode {
  @apply text-white bg-dark-primary;
}

.light-mode {
  @apply bg-light-primary text-dark-primary;
}

.container {
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
}
</style>
