<script setup>
useHead({
  title: 'Fran JS | Vue Developer 💚',
  bodyAttrs: {
    class: 'antialiased font-sans bg-zinc-900 text-gray-200 [--scroll-mt:10rem] lg:[--scroll-mt:7rem]',
  },
})
</script>

<template>
  <div id="app">
    <TheHeader class="fixed" />
    <main class="app-main min-h-screen">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
    <TheFooter />
  </div>
</template>
