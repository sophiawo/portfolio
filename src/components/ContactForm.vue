<script>
export default {
    name: "ContactForm"
}
</script>

<template>
    <div class="contact-form-container" role="form" aria-babelledby="form-title">
        <h3>Contact formular</h3>
        <form id="contact-form" aria-describedby="form-descpription">
            <p>Fill out this contact form to contact me directly!</p>

            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required aria-required="true" aria-label="name" placeholder="your name">

            <label for="surname">Surname:</label>
            <input type="text" id="surename" name="surname" required aria-required="true" aria-label="surname" placeholder="your surname">

            <label for="email">E-Mail:</label>
            <input type="email" id="email" name="email" required aria-required="true" aria-label="email" placeholder="your email address">

            <label for="message">Your message:</label>
            <textarea id="message" name="message" required aria-required="true" aria-label="message" placeholder="your message to me"></textarea>

            <button type="submit" aria-label="Send">Send your message</button>
        </form>
        <p id="success-message" class="hidden" role="alert">Thank you for your message!</p>
    </div>
</template>