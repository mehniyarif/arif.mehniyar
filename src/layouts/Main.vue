<template>
  <main>
    <navbar-view></navbar-view>
    <router-view></router-view>
  </main>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";

export default {
  name: "main-layout",
  components: {NavbarView}
}
</script>

<style scoped>

</style>