<script setup>
  useHead({
    bodyAttrs: {
      class: 'antialiased font-sans text-black bg-white dark:bg-black dark:text-gray-200 [--scroll-mt:10rem] lg:[--scroll-mt:7rem]'
    }
  })
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>