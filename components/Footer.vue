<template>
  <footer class="text-sm flex flex-col text-gray-400 justify-center py-6">
    <div class="text-center text-lg flex justify-center items-center flex-col sm:flex-row sm:text-base">
      <div>
        <span class="hidden sm:inline-block">
          &lt;
        </span> 
        Coded by 
        <NuxtLink to="https://twitter.com/Fran_J9" class="text-green-500 border-b-2 border-b-transparent hover:border-b-green-500 transition duration-500" target="_blank">
          Fran JS
        </NuxtLink>
      </div>
      <div class="flex items-center">
        <span class="hidden sm:inline-block mx-2">/</span> 
        Powered by 
        <NuxtLink to="https://nuxt.com" class="mx-1 inline-block" target="_blank" aria-label="Nuxt.js">
          <Icon name="vscode-icons:file-type-nuxt" size="25"/>
        </NuxtLink>
      </div>
      <div>
        <span class="hidden sm:inline-block mx-2">/</span> © 2023 <span class="hidden sm:inline-block">&gt;</span>
      </div>
    </div>
    <div class="text-center mt-2 items-center justify-center flex space-x-3 sm:flex-row sm:space-x-2">
      <NuxtLink to="https://twitter.com/Fran_J9" class="hover:text-green-500 transition-all" target="_blank" aria-label="Twitter">
        <Icon name="fa6-brands:twitter" size="22"/>
      </NuxtLink>
      <NuxtLink to="https://www.instagram.com/fran.j9" class="hover:text-green-500 transition-all" target="_blank" aria-label="Instagram">
        <Icon name="fa6-brands:instagram" size="22"/>
      </NuxtLink>
      <NuxtLink to="https://www.linkedin.com/in/fran-jsc" class="hover:text-green-500 transition-all" target="_blank" aria-label="LinkedIn">
        <Icon name="fa6-brands:linkedin" size="22"/>
      </NuxtLink>
      <NuxtLink to="https://github.com/FrankDeWitt" class="hover:text-green-500 transition-all" target="_blank" aria-label="GitHub">
        <Icon name="fa6-brands:github" size="22"/>
      </NuxtLink>
    </div>
  </footer>
</template>