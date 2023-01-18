<script setup lang="ts">
const { data: blogPostList } = useAsyncData('blogPostList', () => {
  return queryContent('/blog').find()
})
</script>

<template>
  <div class="flex flex-col gap-6">
    <ul class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
      <div v-for="blogPost in blogPostList" :key="blogPost._path" class="card article h-44">
        <NuxtLink :to="blogPost._path">
          <div class="group flex justify-center group-hover:cursor-pointer">
            <div class="flex flex-col rounded-lg bg-zinc-800/50 shadow-lg group-hover:bg-zinc-800 lg:flex-row">
              <div class="w-1/2">
                <NuxtImg
                  :src="blogPost.pic"
                  alt=""
                  class="h-44 w-52 rounded-t-lg object-cover lg:rounded-none lg:rounded-l-lg"
                />
              </div>
              <div class="p-2">
                <div class="flex flex-col gap-y-2">
                  <div class="group-hover:text-green-400">
                    <div class="text-xl font-semibold">
                      {{ blogPost.title }}
                    </div>
                  </div>
                  <div class="flex gap-2">
                    <BlogPostMeta :author="blogPost.author" :date="blogPost.dates.published" />
                  </div>
                </div>
                <p class="mt-3 text-white">{{ blogPost.description }}</p>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </ul>
  </div>
</template>
