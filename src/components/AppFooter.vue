<script>
    export default {
        name : "AppFooter",
    }    
</script>

<template>
    <footer id="footer">
        <ul class="list">
            <li id="first-footer">
                <span class="logo" id="logo-footer"><router-link to="/">W</router-link></span>
                <span class="name" id="name-footer"><router-link to="/">SOPHIA M. WONKA</router-link></span>
            </li>
            <li id="sitemap-footer" class="links">
                <router-link to="/">{{ $t("home") }}</router-link>
                <router-link to="/projects"> {{ $t("projects") }}</router-link>
                <router-link to="/about"> {{ $t("about") }}</router-link>
                <router-link to="/contact"> {{ $t("contact") }}</router-link>
            </li>
            <li id="contac-footer">
                <p>Augsburg, Germany</p>
                <p>sophia_m_wonka@gmail.com</p>
            </li>
        </ul>
    </footer>
</template>

<style scoped lang="scss">
@import '/src/css/components/appFooter.scss';
</style>