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
    <div class="contact-form-container" role="form" aria-babelledby="form-title">
        <form id="contact-form" aria-describedby="form-descpription">
            <p>Fill out this contact form to contact me directly!</p>
            <div id="contact-first-line">

                <!--name input field-->
                <div class="input-section" id="name-section">
                    <label for="name">Name*</label>
                    <div class="input-container">
                        <input type="text" 
                            id="name" 
                            name="name" 
                            required 
                            aria-required="true" 
                            pattern="[A-Za-z]+" 
                            title="Only letters, spaces, and hyphens are allowed. At least 2 characters." 
                            aria-label="name" 
                            placeholder="John Doe">
                        <span class="material-symbols-outlined contact-invalid-icon">close</span>
                    </div>
                    <span class="error-message">Please enter a valid name!</span>
                </div>

                <!--email input field-->
                <div class="input-section" id="email-section">
                    <label for="email">E-Mail*</label>
                    <div class="input-container">
                        <input type="email" 
                            id="email" 
                            name="email" 
                            required 
                            aria-required="true" 
                            title="Must include a @ symbol."
                            aria-label="email" 
                            placeholder="john.doe@example.com">
                        <span class="material-symbols-outlined contact-invalid-icon">close</span>
                    </div>
                    <span class="error-message">Please enter a valid email!</span>
                </div>
            </div>

            <!--message text field-->
            <div class="input-section" id="text-section">
                <label for="message">Your message*</label>
                <textarea @input="autoGrow" 
                    id="message" 
                    name="message" 
                    required 
                    aria-required="true" 
                    aria-label="message" 
                    placeholder="your website is really interessting..."></textarea>
            </div>
            <div id="contact-last-line">
                <MyButton id="contact-send-button" class="segment-button-black" type="submit" aria-label="send" :buttonTextKey="'contact.sendButton'" />
                <p id="required-text">Fields with * are required!</p>
            </div>
        </form>
    </div>
</template>

<style scoped lang="scss">
@import '../css/components/contactForm.scss'
</style>