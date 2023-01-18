<script setup lant="ts">
const props = defineProps({
  to: { type: String, required: true },
})
</script>

<template>
  <li>
    <AppLink :to="props.to">
      <slot />
    </AppLink>
  </li>
</template>
