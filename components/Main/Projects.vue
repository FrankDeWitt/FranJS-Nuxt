<script setup lang="ts">
    const { projects } = useProjects()

</script>
<template>
  <div class="mx-auto max-w-screen-lg px-3 py-6">
    <div class="mb-6 text-2xl font-bold">Recent <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Projects</span>
    </div>
    <div class="flex flex-col gap-6">
      <ul class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
        <MainProjectsCard 
        v-for="project in projects" :key="project.id" 
        :project="project" 
        />
      </ul>
    </div>
  </div>
</template>