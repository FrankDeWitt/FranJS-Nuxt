<template>
  <header class="sticky -mt-1 top-0 z-30 bg-zinc-900 transition-all duration-[0.4s] ease border-b border-gray-200/25">
    <div class="mx-auto sm:px-6 lg:px-8 px-4 max-w-screen-lg relative">
      <nav id="main-nav" class="items-center grid-cols-2 gap-3 lg:grid lg:h-20 lg:justify-center" aria-label="Primary Navigation" data-v-cd1edc9e="">
        <NuxtLink to="/"  class="flex justify-center col-span-4 lg:col-span-1 lg:justify-start">
          <Icon name="fa6-solid:laptop-code" class="h-8 w-8 mr-3 text-green-400"/>
          <span class="self-center text-xl font-semibold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Fran JS</span>
        </NuxtLink>
        <div class="flex justify-center mt-3 mb-2 lg:mt-0 lg:mb-0 lg:justify-end">
          <div class="flex flex-row space-x-8 mt-0 text-sm font-medium ">
              <NuxtLink to="/blog" class="text-gray-200 hover:text-white">Blogs</NuxtLink>
              <NuxtLink to="/blog" class="text-gray-200 hover:text-white">GitHub</NuxtLink>
              <NuxtLink to="/blog" class="text-gray-200 hover:text-white">Twitter</NuxtLink>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>