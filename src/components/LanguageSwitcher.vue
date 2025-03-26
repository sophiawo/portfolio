<script>
export default {
    methods: {
        changeLanguage(lang) {
            this.$i18n.locale = lang;
        }
    }
};
</script>

<template>
    <div class="d-flex">
        <button @click="changeLanguage('en')"
        :class ="{ active: $i18n.locale === 'en'}"
        >ENG</button>
        <span class="divider">|</span>
        <button @click="changeLanguage('de')"
        :class ="{ active: $i18n.locale === 'de'}"
        >DEU</button>
    </div>
</template>

<style scoped lang="scss">
@use '../css/components/languageSwitcher.scss';
</style>