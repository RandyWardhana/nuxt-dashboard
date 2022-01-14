<template>
  <div
    class="
      flex flex-col
      justify-between
      h-screen
      w-24
      rounded-r-xl
      bg-dark-secondary
    "
  >
    <div class="h-24 w-full bg-purple rounded-r-xl" />
    <div>
      <div class="px-4 flex justify-center">
        <SelectTheme />
      </div>
      <div class="h-px w-full my-8 divider" />
      <div class="px-4 flex justify-center pb-8">
        <img
          class="rounded-full h-10 w-10"
          src="https://images.unsplash.com/photo-1640881277223-d7b53934a97f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SelectTheme from './SelectTheme.vue'

export default {
  name: 'SidebarLayout',
  components: { SelectTheme },
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply bg-yellow-500 text-black;
}

.divider {
  background-color: #50526e;
}

.rounded-r-xl {
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
}
</style>
