<script setup>
  import AppNav from '@/components/AppNav.vue'
  import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <AppNav/>
  <router-view></router-view>
  <AppFooter/>
</template>

<style>

* {
  margin: 0vw;
  padding: 0vw;
}

</style>