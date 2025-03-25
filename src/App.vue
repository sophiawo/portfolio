<script setup>
  import AppNav from '@/components/AppNav.vue'
  import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <AppNav/>
  <router-view></router-view>
  <AppFooter/>
</template>

<style scoped lang="scss">
@use './css/app.scss';
</style>