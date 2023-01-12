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
          <div class="flex justify-center group-hover:cursor-pointer group">
            <div class="flex flex-col lg:flex-row rounded-lg bg-zinc-800/50 shadow-lg group-hover:bg-zinc-800">
              <NuxtImg :src="blogPost.pic" alt="" class="w-full h-96 lg:h-auto object-cover lg:w-[200px] rounded-t-lg lg:rounded-none lg:rounded-l-lg" />
              <div class="p-2">
              <div class="flex flex-col gap-y-2">
                <div class="group-hover:text-green-400">
                  <div class="text-xl font-semibold">{{ blogPost.title }}</div>
                </div>
                <div class="flex gap-2">
                  <BlogPostMeta
                    :author="blogPost.author"
                    :date="blogPost.dates.published"
                  />
                </div>
              </div>
              <p class="mt-3 text-gray-400"> {{ blogPost.description }}</p>
            </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </ul>
  </div>
</template>