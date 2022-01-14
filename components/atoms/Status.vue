<template>
  <div
    :class="`flex items-center justify-center rounded px-4 h-8 bg-shamrock-800 btn-status
        ${
          status.toLowerCase() === 'pending'
            ? 'bg-pending'
            : status.toLowerCase() === 'paid'
            ? 'bg-paid'
            : 'bg-draft'
        }`"
  >
    <p
      :class="`font-bold text-sm 
        ${
          status.toLowerCase() === 'pending'
            ? 'text-pending'
            : status.toLowerCase() === 'paid'
            ? 'text-paid'
            : 'text-draft'
        }`"
    >
      • {{ status }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      required: true,
      default: 'Draft',
    },
  },
}
</script>

<style scoped>
.bg-pending {
  background-color: rgba(235, 148, 29, 0.15);
}
.bg-paid {
  background-color: rgba(59, 203, 165, 0.15);
}
.bg-draft {
  background-color: rgba(175, 177, 186, 0.15);
}

.text-pending {
  color: rgb(235, 148, 29);
}
.text-paid {
  color: rgb(59, 203, 165);
}
.text-draft {
  color: rgb(175, 177, 186);
}

.btn-status {
  min-width: 104px;
  text-align: center;
}
</style>