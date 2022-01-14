<template>
  <div>
    <div v-for="(item, index) in filteredInvoices" :key="index">
      <nuxt-link
        to=""
        class="
          flex flex-row
          items-center
          justify-around
          p-6
          my-4
          rounded-lg
          shadow-lg
          bg-dark-secondary
          hidden
          md:flex
        "
      >
        <p class="font-bold text-white text-sm">{{ item.id }}</p>
        <p class="font-light text-white text-sm">Due {{ item.due }}</p>
        <p class="font-light text-white text-sm">{{ item.client_name }}</p>
        <p class="font-bold text-white text-lg">₤ {{ item.amount }}</p>
        <Status :status="item.status" />
        <img src="../../assets/images/next.png" />
      </nuxt-link>
    </div>
    <div v-for="(item, index) in filteredInvoices" :key="index">
      <nuxt-link
        to=""
        class="
          flex flex-col
          items-center
          p-6
          my-4
          rounded-lg
          shadow-lg
          bg-dark-secondary
          md:hidden
        "
      >
        <div class="flex flex-row justify-between w-full">
          <p class="font-bold text-white text-sm">{{ item.id }}</p>
          <p class="font-light text-white text-sm">{{ item.client_name }}</p>
        </div>
        <div class="flex flex-row items-center justify-between mt-4 w-full">
          <div>
            <p class="font-light text-white text-sm">Due {{ item.due }}</p>
            <p class="font-bold text-white text-lg">₤ {{ item.amount }}</p>
          </div>
          <Status :status="item.status" />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Status from '../atoms/Status.vue'

export default {
  components: {
    Status,
  },
  props: {
    filter: {
      type: String,
      default: 'paid',
    },
    data: {
      type: Array,
      required: true,
    },
  },
  computed: {
    filteredInvoices() {
      const filter = this.filter.trim().toUpperCase()

      return filter
        ? this.data.filter((item) => {
            return item.status.toUpperCase() === filter
          })
        : this.data
    },
  },
}
</script>