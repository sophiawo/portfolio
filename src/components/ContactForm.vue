<script>
import MyButton from './MyButton.vue';

export default {
    components: {
        MyButton,
    },

    name: "ContactForm"
}
</script>

<template>
    <div class="contact-form-container" role="form" aria-babelledby="form-title">
        <form id="contact-form" aria-describedby="form-descpription">
            <p>Fill out this contact form to contact me directly!</p>
            <div id="contact-first-line">
                <div class="input-section" id="name-section">
                    <label for="name">Name*</label>
                    <input type="text" id="name" name="name" required aria-required="true" aria-label="name" placeholder="John">
                </div>
                <div class="input-section" id="email-section">
                    <label for="email">E-Mail*</label>
                    <input type="email" id="email" name="email" required aria-required="true" aria-label="email" placeholder="john.doe@example.com">
                </div>
            </div>
            <div class="input-section" id="text-section">
                <label for="message">Your message*</label>
                <textarea id="message" name="message" rows="5" required aria-required="true" aria-label="message" placeholder="your website is really interessting..."></textarea>
            </div>
            <MyButton id="contact-send-button" class="segment-button-black" type="submit" aria-label="send" :buttonTextKey="'contact.sendButton'" />
        </form>
    </div>
</template>

<style scoped lang="scss">
@import '../css/components/contactForm.scss'
</style>