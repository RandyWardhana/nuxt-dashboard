<template>
  <div class="sticky top-0 flex flex-row justify-between h-16 w-screen bg-dark-secondary shadow-md">
    <div class="h-full w-16 bg-purple rounded-r-xl" />
    <div class="flex flex-row">
      <div class="flex items-center">
        <SelectTheme />
      </div>
      <div class="mx-4 h-full w-px divider" />
      <div class="pr-4 flex items-center">
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
  name: 'HeaderLayout',
  components: { SelectTheme },
}
</script>

<style scoped>
.divider {
  background-color: #50526e;
}

.rounded-r-xl {
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
}
</style>
