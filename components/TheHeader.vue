<template>
  <header class="ease sticky top-0 z-30 -mt-1 border-b border-gray-200/25 bg-zinc-900 transition-all duration-[0.4s]">
    <div class="relative mx-auto grid h-20 max-w-screen-lg grid-cols-2 items-center justify-center gap-3 px-5">
      <NuxtLink to="/" class="col-span-1 mt-0 flex justify-start">
        <TheLogo />
      </NuxtLink>
      <div class="mt-3 mb-2 flex justify-end lg:mt-0 lg:mb-0">
        <div class="mt-0 flex flex-row space-x-8 text-2xl font-medium lg:text-base">
          <MainNavigation />
        </div>
      </div>
    </div>
  </header>
</template>
