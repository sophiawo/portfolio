<script>
    export default {
        name : "AppFooter",
    }    
</script>

<template>
    <div id="footer-puffer" class="w-100"></div>
    <footer id="footer" class="w-100">
        <ul class="list d-flex flex-row justify-content-between align-items-center h-100">
            <li id="first-footer" class="d-flex justify-content-center align-items-center">
                <span class="logo" id="logo-footer"><router-link to="/">W</router-link></span>
                <span class="name" id="name-footer"><router-link to="/">SOPHIA M. WONKA</router-link></span>
            </li>
            <li id="sitemap-footer" class="links d-flex flex-column">
                <router-link to="/">{{ $t("common.home") }}</router-link>
                <router-link to="/projects"> {{ $t("common.projects") }}</router-link>
                <router-link to="/about"> {{ $t("common.about") }}</router-link>
                <router-link to="/contact"> {{ $t("common.contact") }}</router-link>
            </li>
            <li id="contact-footer" class="d-flex flex-column">
                <div class="contact-line d-flex flex-row align-items-center">
                    <i class="bi bi-geo-alt-fill contact-icon d-felx"></i>
                    <a target="_blank" href="https://maps.app.goo.gl/paPoRx39EvSCZiFFA">Augsburg, {{ $t("common.germany") }}</a>
                </div>
                <div class="contact-line d-flex flex-row align-items-center">
                    <i class="bi bi-envelope contact-icon d-flex"></i>
                    <a href="mailto:sophia.m.wonka@gmail.com">sophia.m.wonka@gmail.com</a>
                </div>
            </li>
        </ul>
    </footer>
</template>

<style scoped lang="scss">
@use '../css/components/nav_and_footer/navAndFooter.scss';
</style>