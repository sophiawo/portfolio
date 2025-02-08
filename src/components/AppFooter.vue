<script>
    export default {
        name : "AppFooter",
    }    
</script>

<template>
    <div id="footer-puffer"></div>
    <footer id="footer">
        <ul class="list">
            <li id="first-footer">
                <span class="logo" id="logo-footer"><router-link to="/">W</router-link></span>
                <span class="name" id="name-footer"><router-link to="/">SOPHIA M. WONKA</router-link></span>
            </li>
            <li id="sitemap-footer" class="links">
                <router-link to="/">{{ $t("common.home") }}</router-link>
                <router-link to="/projects"> {{ $t("common.projects") }}</router-link>
                <router-link to="/about"> {{ $t("common.about") }}</router-link>
                <router-link to="/contact"> {{ $t("common.contact") }}</router-link>
            </li>
            <li id="contact-footer">
                <div class="contact-line">
                    <span class="material-symbols-outlined contact-icon">location_on</span>
                    <a href="https://maps.app.goo.gl/paPoRx39EvSCZiFFA">Augsburg, {{ $t("common.germany") }}</a>
                </div>
                <div class="contact-line">
                    <span class="material-symbols-outlined contact-icon">mail</span>
                    <a href="mailto:sophia.m.wonka@gmail.com">sophia.m.wonka@gmail.com</a>
                </div>
            </li>
        </ul>
    </footer>
</template>

<style scoped lang="scss">
@import '/src/css/components/appFooter.scss';
</style>