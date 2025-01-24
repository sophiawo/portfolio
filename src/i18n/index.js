import { createI18n } from 'vue-i18n';

//import all messages in english and german
import messages from "@/i18n/messages.js";

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
});

export default i18n;