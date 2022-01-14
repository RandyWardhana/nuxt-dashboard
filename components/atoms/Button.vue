<template>
  <button
    :class="`
      flex flex-row
      items-center
      justify-center
      px-3
      py-2
      rounded-full
      bg-transparent
      ${containerClass}
    `"
    @click="handleClick"
  >
    <img
      v-show="withImages"
      class="mr-2"
      :src="require(`../../assets/images/${filename}`)"
    />
    <p v-show="withLabel" class="text-white text-sm hidden md:block">
      {{ label }}
    </p>
    <p v-show="withLabel" class="text-white text-sm md:hidden">
      {{ labelPhone }}
    </p>
  </button>
</template>

<script>
export default {
  props: {
    containerClass: {
      type: String,
      default: '',
    },
    withImages: {
      type: Boolean,
      default: false,
    },
    withLabel: {
      type: Boolean,
      default: true,
    },
    filename: {
      type: String,
      default: 'add.png',
    },
    label: {
      type: String,
      default: 'New Invoice',
    },
    labelPhone: {
      type: String,
      default: 'New',
    },
    handleClick: {
      type: Function,
      default: () => {}
    }
  },
}
</script>