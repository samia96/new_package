"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18n = void 0;
const utils_1 = require("@formio/core/utils");
const i18n_1 = __importDefault(require("../i18n"));
const i18Defaults = {};
for (const lang in i18n_1.default.resources) {
    if (i18n_1.default.resources.hasOwnProperty(lang)) {
        i18Defaults[lang] = i18n_1.default.resources[lang].translation;
    }
}
/**
 * This file is used to mimic the i18n library interface.
 */
class I18n {
    constructor(languages = {}) {
        this.languages = i18Defaults;
        this.language = 'en';
        this.currentLanguage = i18Defaults.en;
        this.setLanguages(languages);
        this.changeLanguage(this.language);
    }
    setLanguages(languages) {
        if (languages.resources) {
            for (const lang in languages.resources) {
                if (languages.resources.hasOwnProperty(lang)) {
                    languages[lang] = languages.resources[lang].translation;
                }
            }
            delete languages.resources;
        }
        if (languages.lng) {
            languages.language = languages.lng;
            delete languages.lng;
        }
        // Do not use these configurations.
        delete languages.nsSeparator;
        delete languages.keySeparator;
        delete languages.pluralSeparator;
        delete languages.contextSeparator;
        // Now establish the languages default.
        if (languages.language) {
            this.language = languages.language;
        }
        for (const lang in languages) {
            if (lang !== 'language' && languages.hasOwnProperty(lang)) {
                if (!this.languages[lang]) {
                    this.languages[lang] = {};
                }
                this.languages[lang] = Object.assign(Object.assign({}, this.languages[lang]), languages[lang]);
            }
        }
    }
    static init(languages = {}) {
        return new I18n(languages);
    }
    dir(lang = '') {
        lang = lang || this.language;
        const rtls = ['ar', 'he', 'fa', 'ps', 'ur'];
        return rtls.includes(lang) ? 'rtl' : 'ltr';
    }
    static createInstance() {
        return new I18n();
    }
    changeLanguage(language, ready = null) {
        if (!this.languages[language]) {
            language = 'en';
        }
        this.language = language;
        this.currentLanguage = this.languages[language] ? this.languages[language] : {};
        if (ready) {
            ready();
        }
    }
    addResourceBundle(language, type, strings) {
        this.languages[language] = strings;
    }
    t(text, ...args) {
        if (this.currentLanguage[text]) {
            return utils_1.Evaluator.interpolateString(this.currentLanguage[text], ...args);
        }
        return utils_1.Evaluator.interpolateString(text, ...args);
    }
}
exports.I18n = I18n;
