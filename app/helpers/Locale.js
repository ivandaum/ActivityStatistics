import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

const path = '../locales';

const translationGetters = {
  fr: () => require(`${path}/fr-FR.json`),
  en: () => require(`${path}/en-US.json`),
};

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = () => {
  const fallback = {languageTag: 'en'};
  const {languageTag} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;
  translate.cache.clear();
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
};

export const $t = (string) => {
  const n = string.split('.');
  let f = translate(n[0]);

  for (let i = 1; i < n.length; i++) {
    const k = n[i];
    f = f[k];
  }

  return f;
};
