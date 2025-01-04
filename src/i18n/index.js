import { createI18n } from 'vue-i18n';
import en from "@/i18n/en.json";
import de from "@/i18n/de.json";

const messages = {
    en,
    de,
};

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
});

export default i18n;