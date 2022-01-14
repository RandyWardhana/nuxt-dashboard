<template>
  <main class="flex flex-col h-screen">
    <div class="flex flex-1 overflow-hidden">
      <div class="hidden md:flex">
        <Sidebar />
      </div>
      <div class="flex flex-1 flex-col">
        <div class="md:hidden">
          <Header />
        </div>
        <div class="overflow-y-auto w-full h-full p-8 md:p-20">
          <Nuxt />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from '../molecules/Header.vue'
import Sidebar from '../molecules/Sidebar.vue'

export default {
  name: 'LayoutContainer',
  components: {
    Header,
    Sidebar,
  },
}
</script>