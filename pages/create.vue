<template>
  <div class="container">
    <!-- Section Bill From -->
    <section class="mb-8">
      <p class="text-sm text-bold text-purple">Bill From</p>
      <p class="text-sm text-light mb-4 mt-4">Street Address</p>
      <input
        v-model="dataState.bill_from.street_address"
        name="bill_from.street_address"
        class="
          w-full
          text-white
          p-4
          rounded
          bg-dark-secondary
          focus:outline-none
        "
        type="text"
      />
      <div class="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-3 mt-4">
        <div class="mb-4">
          <p class="text-sm text-light mb-4">City</p>
          <input
            v-model="dataState.bill_from.city"
            name="bill_from.city"
            class="
              w-full
              text-white
              p-4
              rounded
              bg-dark-secondary
              focus:outline-none
            "
            type="text"
          />
        </div>
        <div class="mb-4">
          <p class="text-sm text-light mb-4">Post Code</p>
          <input
            v-model="dataState.bill_from.post_code"
            name="bill_from.post_code"
            class="
              w-full
              text-white
              p-4
              rounded
              bg-dark-secondary
              focus:outline-none
            "
            type="text"
          />
        </div>
        <div class="mb-4">
          <p class="text-sm text-light mb-4">Country</p>
          <input
            v-model="dataState.bill_from.country"
            name="bill_from.country"
            class="
              w-full
              text-white
              p-4
              rounded
              bg-dark-secondary
              focus:outline-none
            "
            type="text"
          />
        </div>
      </div>
    </section>

    <!-- Section Bill To -->
    <section class="mb-8">
      <p class="text-sm text-bold text-purple">Bill To</p>
      <p class="text-sm text-light mb-4 mt-4">Client's Name</p>
      <input
        v-model="dataState.bill_to.client_name"
        name="bill_to.client_name"
        class="
          w-full
          text-white
          p-4
          rounded
          bg-dark-secondary
          focus:outline-none
        "
        type="text"
      />
      <p class="text-sm text-light mb-4 mt-4">Client's Email</p>
      <input
        v-model="dataState.bill_to.client_email"
        name="bill_to.client_email"
        class="
          w-full
          text-white
          p-4
          rounded
          bg-dark-secondary
          focus:outline-none
        "
        type="text"
      />
      <p class="text-sm text-light mb-4 mt-4">Street Address</p>
      <input
        v-model="dataState.bill_to.street_address"
        name="bill_to.street_address"
        class="
          w-full
          text-white
          p-4
          rounded
          bg-dark-secondary
          focus:outline-none
        "
        type="text"
      />
      <div class="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-3 mt-4">
        <div class="mb-4">
          <p class="text-sm text-light mb-4">City</p>
          <input
            v-model="dataState.bill_to.city"
            name="bill_to.city"
            class="
              w-full
              text-white
              p-4
              rounded
              bg-dark-secondary
              focus:outline-none
            "
            type="text"
          />
        </div>
        <div class="mb-4">
          <p class="text-sm text-light mb-4">Post Code</p>
          <input
            v-model="dataState.bill_to.post_code"
            name="bill_to.post_code"
            class="
              w-full
              text-white
              p-4
              rounded
              bg-dark-secondary
              focus:outline-none
            "
            type="text"
          />
        </div>
        <div class="mb-4">
          <p class="text-sm text-light mb-4">Country</p>
          <input
            v-model="dataState.bill_to.country"
            name="bill_to.country"
            class="
              w-full
              text-white
              p-4
              rounded
              bg-dark-secondary
              focus:outline-none
            "
            type="text"
          />
        </div>
      </div>
    </section>

    <!-- Section Description -->
    <section class="mb-8">
      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-2 mt-4">
        <div class="mb-4">
          <p class="text-sm text-light mb-4">Invoice Date</p>
          <client-only>
            <date-picker
              v-model="dataState.invoice_date"
              placeholder="MM/DD/YYYY"
              format="MM/dd/yyyy"
              class="w-full rounded bg-dark-secondary focus:outline-none"
              input-class="w-full text-white cursor-pointer p-4 bg-transparent focus:outline-none"
              calendar-class="text-dark-secondary"
            />
          </client-only>
        </div>
        <div class="mb-4">
          <p class="text-sm text-light mb-4">Payment Terms</p>
          <select-option
            :options="listPayment"
            :value="dataState.payment_terms"
            :on-select="handleSelect"
            class="
              w-full
              text-white
              rounded
              cursor-pointer
              p-4
              bg-dark-secondary
              focus:outline-none
            "
          />
        </div>
      </div>
      <div class="mt-4">
        <p class="text-sm text-light mb-4">Project Description</p>
        <input
          v-model="dataState.project_description"
          name="project_description"
          class="
            w-full
            text-white
            p-4
            rounded
            bg-dark-secondary
            focus:outline-none
          "
          type="text"
        />
      </div>
    </section>

    <!-- Section List Item -->
    <section class="mb-8">
      <h1 class="text-2xl text-bold mb-4">Item List</h1>
      <div class="grid grid-cols-5 gap-4 mt-4">
        <p class="text-sm text-light mb-4">Item Name</p>
        <p class="text-sm text-light mb-4">Qty</p>
        <p class="text-sm text-light mb-4">Price</p>
        <p class="text-sm text-light mb-4">Total</p>
      </div>
      <div
        v-for="(item, index) in dataState.item_list"
        :key="index"
        class="grid grid-cols-5 gap-4 mt-4"
      >
        <input
          name="name"
          class="
            w-full
            text-white
            p-4
            rounded
            bg-dark-secondary
            focus:outline-none
          "
          type="text"
          @input="onChange($event, index)"
        /><input
          name="qty"
          class="
            w-full
            text-white
            p-4
            rounded
            bg-dark-secondary
            focus:outline-none
          "
          type="text"
          @input="onChange($event, index)"
        /><input
          name="price"
          class="
            w-full
            text-white
            p-4
            rounded
            bg-dark-secondary
            focus:outline-none
          "
          type="text"
          @input="onChange($event, index)"
        />
        <p class="flex items-center justify-center text-sm text-light w-full">
          {{ item.qty * item.price }}
        </p>
        <button
          :class="`
            flex flex-row
            items-center
            justify-center
            px-3
            py-2
            rounded-full
            bg-transparent
            ${containerClassButtonDelete}
          `"
          @click="onDeleteListItem(index)"
        >
          <img class="mr-2" :src="require(`../assets/images/trash.png`)" />
        </button>
      </div>
      <Button
        :container-class="containerClassButton"
        :label="placeholder"
        :label-phone="placeholderPhone"
        :handle-click="onAddListItem"
      />
    </section>

    <div class="flex flex-row justify-center md:justify-end mt-8">
      <Button
        :container-class="`px-8 py-3 mr-4 bg-dark-secondary`"
        :label="`Cancel`"
        :label-phone="`Cancel`"
        :handle-click="goBack"
      />
      <Button
        :container-class="`px-8 py-3 bg-purple`"
        :label="`Submit`"
        :label-phone="`Submit`"
        :handle-click="handleSubmit"
      />
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue'
import SelectOption from '~/components/molecules/SelectOption.vue'

import { getFirstLetters, random4Digit } from '~/plugins/helper.js'

const dataState = {
  bill_from: {
    street_address: '',
    city: '',
    post_code: '',
    country: '',
  },
  bill_to: {
    client_name: '',
    client_email: '',
    street_address: '',
    city: '',
    post_code: '',
    country: '',
  },
  invoice_date: new Date(),
  payment_terms: '',
  project_description: '',
  item_list: [{ name: '', qty: '', price: '', total: 0 }],
}

const listPayment = [
  { label: 'Next Day', value: 1 },
  { label: 'Next 7 Days', value: 7 },
  { label: 'Next 30 Days', value: 30 },
]

export default {
  name: 'CreatePage',
  components: { Button, SelectOption },
  data() {
    return {
      invoicesList: [],
      dataState,
      listPayment,
      withImages: true,
      withLabel: false,
      placeholder: '+ Add New Item',
      placeholderPhone: '+ Add New Item',
      containerClassButton: 'w-full mt-6 px-4 py-4 bg-dark-secondary',
      containerClassButtonDelete: 'bg-transparent',
      filename: 'trash.png',
    }
  },
  mounted() {
    if (localStorage.getItem('invoices_list')) {
      this.invoicesList = JSON.parse(localStorage.getItem('invoices_list'))
    }
  },
  methods: {
    onChange(event, key) {
      const { name, value } = event.target

      this.dataState.item_list[key][name] = value

      if (name !== 'name') {
        this.dataState.item_list[key].total =
          Number(this.dataState.item_list[key].qty) *
          Number(this.dataState.item_list[key].price)
      }
    },
    handleSelect($event) {
      this.dataState.payment_terms = $event.target.value
    },
    goBack() {
      this.$router.back()
    },
    onAddListItem() {
      this.dataState.item_list.push({
        name: '',
        qty: '',
        price: '',
        total: '0',
      })
    },
    onDeleteListItem: function (index) {
      this.dataState.item_list.splice(index, 1)
    },
    handleSubmit() {
      const states = this.dataState

      const data = {
        id: '#' + getFirstLetters(states.bill_to.client_name) + random4Digit(),
        ...states,
      }

      this.invoicesList.unshift(data)

      localStorage.setItem('invoices_list', JSON.stringify(this.invoicesList))
      this.goBack()
    },
  },
}
</script>