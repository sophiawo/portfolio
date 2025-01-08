<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';

export default {
  components: {
    LanguageSwitcher,
  },
};
</script>

<template>
  <div id="nav">
    <ul class="list">
      <li id="first">
          <span class="logo" id="logo_nav"><router-link to="/">W</router-link></span>
          <span class="name" id="name_nav"><router-link to="/">SOPHIA M. WONKA</router-link></span>
      </li>
      <li id="second">
        <div class="links">
          <router-link to="/">{{ $t("home") }}</router-link>
          <router-link to="/projects"> {{ $t("projects") }}</router-link>
          <router-link to="/about"> {{ $t("about") }}</router-link>
          <router-link to="/contact"> {{ $t("contact") }}</router-link>
        </div>
      </li>
      <li id="third">
        <LanguageSwitcher/>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import '/src/css/components/appNav.scss';
</style>