<template>
<div class="bg-gray-50/40">
  <div class="w-full flex justify-center items-center">
    <ar-image class="h-96 w-auto" name="sailing-ship"></ar-image>
  </div>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center text-lg font-semibold leading-8 text-gray-600">Frontend technology and tools I use</h2>
      <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <div class="border shadow-md cursor-pointer hover:bg-gray-50 border-gray-100 bg-white col-span-2 lg:col-span-1 h-32 min-w-32 rounded-lg grid grid-rows-3 grid-cols-1 place-items-center place-content-center text-center gap-3" v-for="(tool, key) in tools" :key="key">
          <ar-image class="px-5 max-h-12 w-full object-contain row-span-2" :name="tool.imageName"></ar-image>
          <span class="w-full bg-gray-50 font-light text-sm rounded-b-lg  h-full flex justify-center items-center">{{ tool.title }}</span>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script lang="ts" setup>
const tools = [
  {
    imageName: "vue",
    title: "Vue"
  },
  {
    imageName: "javascript",
    title: "Javascript"
  },
  {
    imageName: "vue-router",
    title: "Vue Router"
  },
  {
    imageName: "vuex",
    title: "Vuex"
  },
  {
    imageName: "pinia",
    title: "Pinia"
  },
  {
    imageName: "html-5",
    title: "HTML 5"
  },
  {
    imageName: "css-3",
    title: "CSS 3"
  },
  {
    imageName: "jquery",
    title: "JQuery"
  },
  {
    imageName: "tailwind-css",
    title: "Tailwind CSS"
  },
  {
    imageName: "bootstrap",
    title: "Bootstrap"
  }
]
</script>

<style scoped>

</style>