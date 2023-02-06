<template>
  <HeaderComp />
  <router-view></router-view>
</template>

<script>
import HeaderComp from "./components/sections/HeaderComp.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
  },
};
</script>

<style>
</style>
