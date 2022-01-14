<template>
  <div class="container">
    <div class="flex flex-row items-center justify-between mb-8">
      <div class="flex flex-col">
        <h1 class="text-2xl font-bold mb-1 md:text-4xl">Invoices</h1>
        <p class="text-sm font-light hidden md:block">
          There are 7 total invoices
        </p>
        <p class="text-sm font-light md:hidden">7 Invoices</p>
      </div>
      <div class="flex flex-row">
        <select-option
          :placeholder="filterPlaceholder"
          :options="status"
          :value="state.filterValue"
          :option-class="optionClass"
          :on-select="handleSelect"
          class="rounded cursor-pointer bg-transparent focus:outline-none"
        />
        <Button
          :with-images="withImages"
          :container-class="containerClassButton"
          :handle-click="goToCreatePage"
        />
      </div>
    </div>
    <ListInvoiceHome :filter="state.filterValue" />
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue'
import SelectOption from '~/components/molecules/SelectOption.vue'
import ListInvoiceHome from '~/components/templates/HomeTemplate/ListInvoiceHome.vue'

const state = {
  filterValue: '',
}

export default {
  name: 'HomePage',
  components: {
    Button,
    SelectOption,
    ListInvoiceHome,
  },
  data() {
    return {
      state,
      filterPlaceholder: 'Filter',
      withImages: true,
      containerClassButton: 'ml-4 bg-purple',
      optionClass: 'text-dark-secondary p-4',
      status: [
        {
          label: 'All',
          value: '',
        },
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Pending',
          value: 'pending',
        },
        {
          label: 'Paid',
          value: 'paid',
        },
      ],
      goToCreatePage: () => {
        window.location.href = '/create'
      },
    }
  },
  methods: {
    handleSelect($event) {
      state.filterValue = $event.target.value
    },
  },
}
</script>

<style>
.btn {
  @apply py-2 px-3 rounded-md shadow-md uppercase;
}
.outline-btn {
  @apply border btn bg-white;
}

.container {
  @apply min-h-screen  mx-auto;
}
</style>
