<script setup lang="ts">
const route = useRoute()
const postTitle = computed(() => route.params.postSlug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))
</script>

<template>
  <div class="space-x-2 py-4">
    <NuxtLink to="/blog" class="text-gray-200 hover:text-green-500"> Return to posts</NuxtLink>
    <span class="hidden sm:inline-block">&gt;</span>
    <span class="text-green-500 underline">{{ postTitle }}</span>
  </div>
</template>
