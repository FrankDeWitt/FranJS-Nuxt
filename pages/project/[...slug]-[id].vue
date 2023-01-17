<script setup lang="ts">

  const projects = useProject();
  const route = useRoute();
  
  const project = computed(() => { 
    return projects.find(
      (project) => project.id === parseInt(route.params.id)
    );
  });

  if(!project.value) { 
    throw createError({
      statusCode: 404,
      message: `project with ID of ${route.params.id} does not exist`,
    })
  }

  useHead({
      title: `FranJS - ${route.params.name}`
  })

  definePageMeta({
    layout: "custom"
  })
</script>

<template>
  <div v-if="project">
    {{ project }}
  </div>
</template>