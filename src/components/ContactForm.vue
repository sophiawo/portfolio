<script>
import MyButton from './MyButton.vue';

export default {
    components: {
        MyButton,
    },
    name: "ContactForm",
}
</script>

<template>
    <div class="contact-form-container d-flex flex-column text-center" 
        role="form" 
        aria-babelledby="form-title">
        <form id="contact-form" 
            class="d-flex flex-column"
            aria-describedby="form-descpription required-text"
            aria-labelledby="form-title"
            action="https://formsubmit.co/sophia.m.wonka@gmail.com"
            method="POST">
            <h3 id="form-title">{{ $t("contact.formTitle") }}</h3>
            <p id="form-description"> {{ $t("contact.formDescription") }} </p>
            
            <div class="d-flex flex-row justify-content-between">

                <!--name input field-->
                <div class="input-section d-flex flex-column" id="name-section">
                    <label class="text-start" for="name"> {{ $t("contact.nameLabel") }} </label>
                    <div class="input-container position-relative d-inline-block">
                        <input type="text" 
                            id="name" 
                            name="name" 
                            required 
                            autocomplete="name"
                            pattern="[A-Za-z\s]+" 
                            :title= "$t('contact.nameTitle')"
                            aria-label="name" 
                            aria-describedby="error-message-name"
                            :placeholder="$t('contact.namePlaceholder')">
                        <span class="material-symbols-outlined contact-invalid-icon"
                            aria-hidden="true"
                            tabindex="-1"
                            >close</span>
                    </div>
                    <span id="error-message-name" 
                        class="error-message"
                        aria-live="polite"
                        > {{ $t("contact.nameError") }}</span>
                </div>

                <!--email input field-->
                <div class="input-section d-flex flex-column" id="email-section">
                    <label class="text-start" for="email"> {{ $t("contact.emailLabel") }}</label>
                    <div class="input-container position-relative d-inline-block">
                        <input type="email" 
                            id="email" 
                            name="email" 
                            required 
                            autocomplete="email"
                            :title="$t('contact.emailTitle')"
                            aria-label="email" 
                            aria-describedby="error-message-email"
                            :placeholder="$t('contact.emailPlaceholder')">
                        <span class="material-symbols-outlined contact-invalid-icon"
                            aria-hidden="true"
                            tabindex="-1"
                            >close</span>
                    </div>
                    <span id="error-message-email" 
                        class="error-message"
                        aria-live="polite"
                        > {{ $t("contact.emailError") }}</span>
                </div>
            </div>

            <!--message text field-->
            <div class="input-section d-flex flex-column" id="text-section">
                <label class="text-start" for="message"> {{ $t("contact.messageLabel") }} </label>
                <textarea @input="autoGrow" 
                    id="message" 
                    name="message" 
                    required 
                    :title="$t('contact.messageTitle')"
                    aria-label="message" 
                    :placeholder="$t('contact.messagePlaceholder')"></textarea>
            </div>

            <div id="contact-last-line" class="d-flex flex-row justify-content-between align-items-center">
                <MyButton id="contact-send-button" 
                    class="segment-button-black" 
                    type="submit" 
                    aria-label="send" 
                    :buttonTextKey="'contact.sendButton'"/>
                <p class="align-self-center"> {{ $t("contact.requiredText") }}</p>
            </div>
        </form>
    </div>
</template>

<style scoped lang="scss">
@use '../css/components/contactForm.scss';
</style>