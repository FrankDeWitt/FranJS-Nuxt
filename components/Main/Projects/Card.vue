<script setup lang="ts">
  const _props = defineProps({
    project: Object,
  })
  const tagColors: {[key:string]: string} = {
    'Nuxt': 'bg-green-400 text-green-900',
    'Typescript': 'bg-blue-600 text-white',
    'Javascript': 'bg-yellow-400 text-black',
    'Tailwind': 'bg-sky-400 text-white',
    'Vue': 'bg-green-700 text-white',
    'Blog': 'bg-purple-800 text-white',
  }

</script>
<template>
  <li class="group">
    <div 
      class="flex justify-center group-hover:cursor-pointer"
      @click="navigateTo(`/project/${project?.slug}-${project?.id}`)"  
    >
      <div class="flex flex-col lg:flex-row rounded-lg bg-zinc-800/50 shadow-lg group-hover:bg-zinc-800">
        <NuxtImg :src="project?.logo" alt="" class="w-full h-96 lg:h-auto object-cover lg:w-[300px] rounded-t-lg lg:rounded-none lg:rounded-l-lg" />
        <div class="p-2">
        <div class="flex flex-col gap-y-2">
          <div class="group-hover:text-green-400">
            <div class="text-xl font-semibold">Project {{ project?.id }} - {{ project?.title }}</div>
          </div>
          <div class="flex gap-2">
            <div 
              v-for="tag in project?.tags" :key="tag"
              :class="[
                'rounded-md px-2 py-1 text-xs font-semibold',
                tagColors[tag]
              ]"
            >
              {{ tag }}
            </div>
          </div>
        </div>
        <p class="mt-3 text-gray-400"> {{ project?.body }}</p>
      </div>
      </div>
    </div>
  </li>
</template>