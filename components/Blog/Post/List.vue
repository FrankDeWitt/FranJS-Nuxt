<script setup lang="ts">
  const { data: blogPostList } = useAsyncData('blogPostList', () => {
    return queryContent('/blog').find()
  })
</script>

<template>
  <div class="flex flex-col gap-6">
    <ul class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
      <div
        v-for="blogPost in blogPostList"
        :key="blogPost._path"
        class="card article"
      >
        <NuxtLink :to="blogPost._path">
          <div class="overflow-hidden sm:rounded-xl ring-1 ring-gray-200 dark:ring-0 hover:ring-0 shadow-none dark:bg-gray-900/50 bg-white hover:dark:bg-gray-900 h-full w-ful flex flex-col items-center gap-x-8  rounded-xl md:flex-row">
            <div class="shrink-0">
              <NuxtImg :src="blogPost.pic" alt="" class="w-[300px] h-full object-cover" />
            </div>
            <div class="p-2">
              <div class="flex flex-col gap-y-2">
                <div class="hover:text-cyan-400">
                  <div class="text-xl font-semibold">{{ blogPost.title }}</div>
                </div>
                <div class="flex gap-2">
                  <BlogPostMeta
                    :author="blogPost.author"
                    :date="blogPost.dates.published"
                  />
                </div>
              </div>
              <p class="mt-3 text-gray-400">{{ blogPost.description }}</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </ul>
  </div>
</template>