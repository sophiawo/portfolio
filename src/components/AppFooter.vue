<script>
    export default {
        name : "AppFooter",
    }    
</script>

<template>
    <div id="footer">
        <ul class="list">
            <li id="firstFooter">
                <span class="logo"><router-link to="/">W</router-link></span>
                <span class="name"><router-link to="/">SOPHIA M. WONKA</router-link></span>
            </li>
            <li id="sitemapFooter">
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
    </div>
</template>

<style scoped lang="scss">
@import '/src/css/components/appFooter.scss';
</style>