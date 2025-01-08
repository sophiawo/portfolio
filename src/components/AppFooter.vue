<script>
    export default {
        name : "AppFooter",
    }    
</script>

<template>
    <footer id="footer">
        <ul class="list">
            <li id="firstFooter">
                <span class="logo" id="logo_footer"><router-link to="/">W</router-link></span>
                <span class="name" id="name_footer"><router-link to="/">SOPHIA M. WONKA</router-link></span>
            </li>
            <li id="sitemapFooter" class="links">
                <router-link to="/">{{ $t("home") }}</router-link>
                <router-link to="/projects"> {{ $t("projects") }}</router-link>
                <router-link to="/about"> {{ $t("about") }}</router-link>
                <router-link to="/contact"> {{ $t("contact") }}</router-link>
            </li>
            <li id="contactFooter">
                <p>Augsburg, Germany</p>
                <p>sophia_m_wonka@gmail.com</p>
            </li>
        </ul>
    </footer>
</template>

<style scoped lang="scss">
@import '/src/css/components/appFooter.scss';
</style>