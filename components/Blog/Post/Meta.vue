<script setup lant="ts">
const props = defineProps({
  author: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'info',
  },
})
const formattedDate = computed(() => {
  return new Date(props.date).toDateString()
})
</script>

<template>
  <div>
    <span
      class="rounded-l-full border border-white bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text py-[0.1rem] px-2 text-transparent"
      :class="`is-${color}`"
      >{{ author }}</span
    >
    <span class="rounded-r-full border border-white bg-white py-[0.1rem] px-2 text-black">{{ formattedDate }}</span>
  </div>
</template>
