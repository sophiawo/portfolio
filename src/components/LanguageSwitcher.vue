<template>
    <div id="language-switcher">
        <button @click="changeLanguage('en')"
        :class ="{ active: $i18n.locale === 'en'}"
        >ENG</button>
        <span class="divider">|</span>
        <button @click="changeLanguage('de')"
        :class ="{ active: $i18n.locale === 'de'}"
        >DEU</button>
    </div>
</template>

<script>
export default {
    methods: {
        changeLanguage(lang) {
            this.$i18n.locale = lang;
        }
    }
};
</script>

<style scoped lang="scss">
@import '/src/css/components/languageSwitcher.scss';
</style>