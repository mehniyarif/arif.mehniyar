<template>
<div>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">Frontend technology and tools I use</h2>
      <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <div class="shadow col-span-2 lg:col-span-1 h-32 min-w-32 rounded-lg border grid grid-rows-3 grid-cols-1 place-items-center place-content-center text-center gap-3">
          <ar-image class="px-5 max-h-12 w-full object-contain row-span-2" name="vue"></ar-image>
          <span class="w-full bg-gray-50 rounded-b-lg border-t h-full flex justify-center items-center">Vue</span>
        </div>
        <div class="shadow col-span-2 lg:col-span-1 h-32 min-w-32 rounded-lg border grid grid-rows-3 grid-cols-1 place-items-center place-content-center text-center gap-3">
          <ar-image class="px-5 max-h-12 w-full object-contain row-span-2" name="vue-router"></ar-image>
          <span class="w-full bg-gray-50 rounded-b-lg border-t h-full flex justify-center items-center">Vue Router</span>
        </div>
        <div class="shadow col-span-2 lg:col-span-1 h-32 min-w-32 rounded-lg border grid grid-rows-3 grid-cols-1 place-items-center place-content-center text-center gap-3">
          <ar-image class="px-5 max-h-12 w-full object-contain  row-span-2" name="pinia"></ar-image>
          <span class="w-full bg-gray-50 rounded-b-lg border-t h-full flex justify-center items-center">Pinia</span>
        </div>
        <div class="shadow col-span-2 lg:col-span-1 h-32 min-w-32 rounded-lg border grid grid-rows-3 grid-cols-1 place-items-center place-content-center text-center gap-3">
          <ar-image class="px-5 max-h-12 w-full object-contain row-span-2"  name="tailwind-css"></ar-image>
          <span class="w-full bg-gray-50 rounded-b-lg border-t h-full flex justify-center items-center">Tailwind CSS</span>
        </div>
        <div class="shadow col-span-2 lg:col-span-1 h-32 min-w-32 rounded-lg border grid grid-rows-3 grid-cols-1 place-items-center place-content-center text-center gap-3">
          <ar-image class="px-5 max-h-12 w-full object-contain row-span-2"  name="bootstrap"></ar-image>
          <span class="w-full bg-gray-50 rounded-b-lg border-t h-full flex justify-center items-center">Bootstrap</span>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "TechnologyView"
}
</script>

<style scoped>

</style>