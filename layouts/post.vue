<template>
  <div class="m-auto flex w-full flex-col lg:max-w-3xl">
    <Breadcrumbs />
    <div class="w-full bg-zinc-800 px-4 py-10 ring-1 ring-gray-800 sm:rounded-lg sm:px-8 sm:shadow">
      <main class="base max-w-none">
        <slot />
      </main>
    </div>
  </div>
</template>
