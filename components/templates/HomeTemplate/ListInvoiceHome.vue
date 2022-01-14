<template>
  <Card :data="listInvoice" :filter="filter" />
</template>

<script>
import Card from '../../molecules/Card.vue'

export default {
  components: {
    Card,
  },
  props: {
    filter: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      listInvoice: [
        {
          id: "#RT3080",
          due: "19 Aug 2021",
          client_name: "Jensen Huang",
          amount: "1,800.90",
          status: "Paid"
        },
        {
          id: "#XM9141",
          due: "20 Sep 2021",
          client_name: "Alex Grim",
          amount: "556.00",
          status: "Pending"
        },
        {
          id: "#RG0314",
          due: "01 Oct 2021",
          client_name: "John Morrison",
          amount: "14,002.33",
          status: "Draft"
        },
        {
          id: "#RT3080",
          due: "19 Aug 2021",
          client_name: "Jensen Huang",
          amount: "1,800.90",
          status: "Paid"
        },
        {
          id: "#XM9141",
          due: "20 Sep 2021",
          client_name: "Alex Grim",
          amount: "556.00",
          status: "Pending"
        },
        {
          id: "#RG0314",
          due: "01 Oct 2021",
          client_name: "John Morrison",
          amount: "14,002.33",
          status: "Draft"
        },
        {
          id: "#RT3080",
          due: "19 Aug 2021",
          client_name: "Jensen Huang",
          amount: "1,800.90",
          status: "Paid"
        },
        {
          id: "#XM9141",
          due: "20 Sep 2021",
          client_name: "Alex Grim",
          amount: "556.00",
          status: "Pending"
        },
        {
          id: "#RG0314",
          due: "01 Oct 2021",
          client_name: "John Morrison",
          amount: "14,002.33",
          status: "Draft"
        },
      ],
    }
  },
}
</script>