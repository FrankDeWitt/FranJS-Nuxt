<script setup lant="ts">
  const props = defineProps({
    author: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'info'
    }
  })
  const formattedDate = computed(() => {
    return new Date(props.date).toDateString()
  })
</script>

<template>
  <div>
    <span class="rounded-l-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 border border-gray-400 py-[0.1rem] px-2" :class="`is-${color}`">{{ author }}</span>
    <span class="rounded-r-full bg-gray-400 py-[0.1rem] px-2 border border-gray-400 text-black">{{ formattedDate }}</span>
  </div>
</template>