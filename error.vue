<script setup lang="ts">
  const error = useError()
  const handleError = () => {
    clearError({
			redirect: '/',
		})
  }
</script>

<template>
	<section class="flex items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
		<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
			<div class="max-w-md text-center">
				<h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
					<span class="sr-only">Error</span>{{ error?.statusCode }}
				</h2>
				<p class="text-2xl font-semibold md:text-3xl">Sorry, {{ error?.message }}</p>
				<p class="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
				<button 
          class="px-8 py-3 font-semibold rounded dark:bg-gradient-to-r from-green-400 to-teal-400 dark:text-white"
          @click="handleError"
        >
          Back to homepage
        </button>
			</div>
		</div>
	</section>
</template>