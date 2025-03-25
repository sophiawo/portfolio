<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';

export default {
  components: {
    LanguageSwitcher,
  },
};
</script>

<template>
  <div id="nav" class="d-flex justify-content-between w-100 z-2">
    <ul class="list w-100 d-flex flex-row justify-content-between align-items-center h-100">
      <li id="first" class="d-flex justify-content-between align-items-center">
          <span class="logo" id="logo_nav"><router-link to="/">W</router-link></span>
          <span class="name" id="name_nav"><router-link to="/">SOPHIA M. WONKA</router-link></span>
      </li>
      <li id="second">
        <div id="links-nav" class="links d-flex justify-content">
          <router-link to="/">{{ $t("common.home") }}</router-link>
          <router-link to="/projects"> {{ $t("common.projects") }}</router-link>
          <router-link to="/about"> {{ $t("common.about") }}</router-link>
          <router-link to="/contact"> {{ $t("common.contact") }}</router-link>
        </div>
      </li>
      <li id="third">
        <LanguageSwitcher/>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use '../css/components/nav_and_footer/navAndFooter.scss';
</style>