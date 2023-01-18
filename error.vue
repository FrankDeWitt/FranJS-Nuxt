<script setup lang="ts">
const error = useError()
const handleError = () => {
  clearError({
    redirect: '/',
  })
}
</script>

<template>
  <section class="flex h-screen items-center bg-gray-900 p-16 text-gray-100">
    <div class="container mx-auto my-8 flex flex-col items-center justify-center px-5">
      <div class="max-w-md text-center">
        <h2 class="mb-8 text-9xl font-extrabold text-gray-600">
          <span class="sr-only">Error</span>{{ error?.statusCode }}
        </h2>
        <p class="text-2xl font-semibold md:text-3xl">Sorry, {{ error?.message }}</p>
        <p class="mt-4 mb-8 text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
        <button
          class="rounded bg-gradient-to-r from-green-400 to-teal-400 px-8 py-3 font-semibold text-white"
          @click="handleError"
        >
          Back to homepage
        </button>
      </div>
    </div>
  </section>
</template>
