import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue';
import router from './router';
import yaml from 'js-yaml';
import { createI18n } from 'vue-i18n';

async function loadYaml(filePath) {
    const response = await fetch(filePath);
    const text = await response.text();
    return yaml.load(text);
}

async function init() {
    const de = await loadYaml('/src/i18n/de.yaml');
    const en = await loadYaml('/src/i18n/en.yaml');

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages : {
        en: en,
        de: de,
    }
});

createApp(App).
    use(router).
    use(i18n).
    mount('#app')

}

init();