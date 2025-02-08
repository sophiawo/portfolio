<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
    components: {
        ContactForm
    }
}
</script>

<template>
    <div class="contact">
        <h2> {{ $t("common.contactCaps") }}</h2>
        <div id="emailSection">
            <div id="emailSectionContent" class="contact-line">
                <span class="material-symbols-outlined contact-icon">mail</span>
                <a href="mailto:sophia.m.wonka@gmail.com">sophia.m.wonka@gmail.com</a>
            </div>
        </div>
        <ContactForm />
    </div>
</template>

<style scoped lang="scss">
@import '../css/contact.scss'
</style>