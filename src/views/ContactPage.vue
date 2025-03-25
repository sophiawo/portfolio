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
        <ContactForm />
    </div>
</template>

<style scoped lang="scss">
@use '../css/contact.scss';
</style>