<template>
  <footer class="flex flex-col justify-center py-6 text-sm text-gray-400">
    <div class="flex flex-col items-center justify-center text-center text-lg sm:flex-row sm:text-base">
      <div>
        <span class="hidden sm:inline-block"> &lt; </span>
        Coded by
        <NuxtLink
          to="https://twitter.com/Fran_J9"
          class="border-b-2 border-b-transparent text-green-500 transition duration-500 hover:border-b-green-500"
          target="_blank"
        >
          Fran JS
        </NuxtLink>
      </div>
      <div class="flex items-center">
        <span class="mx-2 hidden sm:inline-block">/</span>
        Powered by
        <NuxtLink to="https://nuxt.com" class="mx-1 inline-block" target="_blank" aria-label="Nuxt.js">
          <Icon name="vscode-icons:file-type-nuxt" size="25" />
        </NuxtLink>
      </div>
      <div>
        <span class="mx-2 hidden sm:inline-block">/</span> © 2023
        <span class="hidden sm:inline-block">&gt;</span>
      </div>
    </div>
    <div class="mt-2 flex items-center justify-center space-x-3 text-center sm:flex-row sm:space-x-2">
      <NuxtLink
        to="https://twitter.com/Fran_J9"
        class="transition-all hover:text-green-500"
        target="_blank"
        aria-label="Twitter"
      >
        <Icon name="fa6-brands:twitter" size="22" />
      </NuxtLink>
      <NuxtLink
        to="https://www.instagram.com/fran.j9"
        class="transition-all hover:text-green-500"
        target="_blank"
        aria-label="Instagram"
      >
        <Icon name="fa6-brands:instagram" size="22" />
      </NuxtLink>
      <NuxtLink
        to="https://www.linkedin.com/in/fran-jsc"
        class="transition-all hover:text-green-500"
        target="_blank"
        aria-label="LinkedIn"
      >
        <Icon name="fa6-brands:linkedin" size="22" />
      </NuxtLink>
      <NuxtLink
        to="https://github.com/FrankDeWitt"
        class="transition-all hover:text-green-500"
        target="_blank"
        aria-label="GitHub"
      >
        <Icon name="fa6-brands:github" size="22" />
      </NuxtLink>
    </div>
  </footer>
</template>
