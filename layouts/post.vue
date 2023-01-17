<template>
  <div class="flex flex-col min-h-screen">
    <div class="w-full lg:max-w-3xl px-4 py-10 m-auto my-6 bg-zinc-800 sm:px-8 sm:shadow ring-1 ring-gray-800 sm:rounded-lg">
      <main class="max-w-none base">
        <slot />
      </main>
    </div>
  </div>
</template>