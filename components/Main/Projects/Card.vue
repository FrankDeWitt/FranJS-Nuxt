<script setup lang="ts">
  const props = defineProps({
    project: Object,
  })
  const tagColors = {
    'Nuxt': 'bg-green-400 text-green-900',
    'Typescript': 'bg-blue-600 text-white',
    'Javascript': 'bg-yellow-400 text-black',
    'Tailwind': 'bg-sky-400 text-white',
    'Vue': 'bg-green-700 text-white',
    'Blog': 'bg-purple-800 text-white',
  }

</script>
<template>
  <div>
    <li class="rounded-md relative group">
      <div class="overflow-hidden sm:rounded-xl ring-1 ring-gray-200 dark:ring-0 hover:ring-0 shadow-none dark:bg-gray-900/50 bg-white hover:dark:bg-gray-900 h-full w-ful flex flex-col items-center gap-x-8  rounded-xl md:flex-row">
        <div class="shrink-0">
          <div 
              class="hover:text-cyan-400"
              @click="navigateTo(`/project/${props?.project.slug}-${props?.project.id}`)"  
            >
              <NuxtImg :src="project.logo" alt="" class="w-[300px] h-full object-cover" />
          </div>
        </div>
        <div class="p-2">
          <div class="flex flex-col gap-y-2">
            <div 
              class="hover:text-cyan-400"
              @click="navigateTo(`/project/${props?.project.slug}-${props?.project.id}`)"  
            >
              <div class="text-xl font-semibold">Project {{ project.id }} - {{ project.title }}</div>
            </div>
            <div class="flex gap-2">
              <div 
                v-for="tag in project.tags" :key="tag"
                :class="[
                  'rounded-md px-2 py-1 text-xs font-semibold',
                  tagColors[tag]
                ]"
              >
                {{ tag }}
              </div>
            </div>
          </div>
          <p class="mt-3 text-gray-400"> {{ project.body }}</p>
        </div>
      </div>
    </li>
  </div>
</template>