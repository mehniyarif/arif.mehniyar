<template>
    <img v-if="src" class="ar-image" :src="src" v-bind="$attrs"/>
    <img
        class="ar-image"
        v-else-if="name in imageNamesRef"
        :src="imageNames[name].imageSrc"
        v-bind="$attrs"
    />
</template>

<script setup lang="ts">
import imageNames from "@/components/ar-image/image-names";
import {defineProps} from 'vue';

const props = defineProps({
  name: String,
  src: String,
});

const imageNamesRef = imageNames;

</script>

<style scoped></style>
