<script setup lant="ts">
  const { to } = defineProps({
      to: { type: String, required: true },
  })
</script>

<template>
  <li>
    <AppLink :to="to">
      <slot />
    </AppLink>
  </li>
</template>