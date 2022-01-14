<template>
  <button @click="changeMode">
    <img
			v-if="btnLabel === 'light'"
			src="../../assets/images/moon.png"
		/>
    <img
			v-else
			src="../../assets/images/sun.png"
		/>
  </button>
</template>

<script>
export default {
  computed: {
    mode() {
      return this.$colorMode
    },
    btnLabel() {
      return this.$colorMode.preference === 'light' ? 'dark' : 'light'
    },
  },
  methods: {
    changeMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light'
    },
  },
}
</script>

<style scoped>
img {
	height: 24px;
	height: 24px;
  transition: .15s ease;
}
</style>