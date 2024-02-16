"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const text_mask_addons_1 = require("@formio/text-mask-addons");
const vanilla_text_mask_1 = require("@formio/vanilla-text-mask");
const lodash_1 = __importDefault(require("lodash"));
const utils_1 = require("../../utils/utils");
const Number_1 = __importDefault(require("../number/Number"));
class CurrencyComponent extends Number_1.default {
    static schema(...extend) {
        return Number_1.default.schema({
            type: 'currency',
            label: 'Currency',
            key: 'currency'
        }, ...extend);
    }
    static get builderInfo() {
        return {
            title: 'Currency',
            group: 'advanced',
            icon: 'usd',
            documentation: '/userguide/form-building/advanced-components#currency',
            weight: 70,
            schema: CurrencyComponent.schema()
        };
    }
    constructor(component, options, data) {
        // Currency should default to have a delimiter unless otherwise specified.
        if (component && !component.hasOwnProperty('delimiter')) {
            component.delimiter = true;
        }
        super(component, options, data);
    }
    /**
     * Creates the number mask for currency numbers.
     *
     * @return {*}
     */
    createNumberMask() {
        const decimalLimit = lodash_1.default.get(this.component, 'decimalLimit', 2);
        const affixes = (0, utils_1.getCurrencyAffixes)({
            currency: this.component.currency,
            decimalLimit: decimalLimit,
            decimalSeparator: this.decimalSeparator,
            lang: this.options.language
        });
        this.currencyPrefix = this.options.prefix || affixes.prefix;
        this.currencySuffix = this.options.suffix || affixes.suffix;
        return (0, text_mask_addons_1.createNumberMask)({
            prefix: this.currencyPrefix,
            suffix: this.currencySuffix,
            thousandsSeparatorSymbol: lodash_1.default.get(this.component, 'thousandsSeparator', this.delimiter),
            decimalSymbol: lodash_1.default.get(this.component, 'decimalSymbol', this.decimalSeparator),
            decimalLimit: decimalLimit,
            allowNegative: lodash_1.default.get(this.component, 'allowNegative', true),
            allowDecimal: this.isDecimalAllowed(),
        });
    }
    isDecimalAllowed() {
        return lodash_1.default.get(this.component, 'allowDecimal', true);
    }
    setInputMask(input) {
        const affixes = (0, utils_1.getCurrencyAffixes)({
            currency: this.component.currency,
            decimalSeparator: this.decimalSeparator,
            lang: this.options.language,
        });
        let numberPattern = `${affixes.prefix}[0-9`;
        numberPattern += this.decimalSeparator || '';
        numberPattern += this.delimiter || '';
        numberPattern += ']*';
        input.setAttribute('pattern', numberPattern);
        input.mask = (0, vanilla_text_mask_1.maskInput)({
            inputElement: input,
            mask: this.numberMask || '',
            pipe: (conformedValue) => {
                if (conformedValue === '$0._') {
                    // Delay to allow mask to update first.
                    setTimeout(() => {
                        const caretPosition = input.value.length - 1;
                        input.setSelectionRange(caretPosition, caretPosition);
                    });
                }
                return conformedValue;
            },
            shadowRoot: this.root ? this.root.shadowRoot : null
        });
    }
    get defaultSchema() {
        return CurrencyComponent.schema();
    }
    parseNumber(value) {
        return super.parseNumber(this.stripPrefixSuffix(value));
    }
    parseValue(value) {
        return super.parseValue(this.stripPrefixSuffix(value));
    }
    addZerosAndFormatValue(value) {
        if (!value && value !== 0)
            return;
        const decimalLimit = lodash_1.default.get(this.component, 'decimalLimit', 2);
        let integerPart;
        let decimalPart = '';
        let decimalPartNumbers = [];
        const negativeValueSymbol = '-';
        const hasPrefix = this.currencyPrefix ? value.includes(this.currencyPrefix) : false;
        const hasSuffix = this.currencySuffix ? value.includes(this.currencySuffix) : false;
        const isNegative = value.includes(negativeValueSymbol) || false;
        value = this.stripPrefixSuffix(isNegative ? value.replace(negativeValueSymbol, '') : value);
        if (value.includes(this.decimalSeparator)) {
            [integerPart, decimalPart] = value.split(this.decimalSeparator);
            decimalPartNumbers = [...decimalPart.split('')];
        }
        else {
            integerPart = value;
        }
        if (decimalPart.length < decimalLimit) {
            while (decimalPartNumbers.length < decimalLimit) {
                decimalPartNumbers.push('0');
            }
        }
        const formattedValue = `${isNegative ? negativeValueSymbol : ''}${hasPrefix ? this.currencyPrefix : ''}${integerPart}${this.decimalSeparator}${decimalPartNumbers.join('')}${hasSuffix ? this.currencySuffix : ''}`;
        return super.formatValue(formattedValue);
    }
    getValueAsString(value, options) {
        const stringValue = super.getValueAsString(value, options);
        // eslint-disable-next-line eqeqeq
        if (value || value == '0') {
            if (Array.isArray(value)) {
                return value.map((val) => this.addZerosAndFormatValue(super.getValueAsString(val, options))).join(', ');
            }
            return this.addZerosAndFormatValue(stringValue);
        }
        return stringValue;
    }
    formatValue(value) {
        if (value || value === '0') {
            return this.addZerosAndFormatValue(value);
        }
        return super.formatValue(value);
    }
    stripPrefixSuffix(value) {
        if (typeof value === 'string') {
            try {
                const hasPrefix = this.currencyPrefix ? value.includes(this.currencyPrefix) : false;
                const hasSuffix = this.currencySuffix ? value.includes(this.currencySuffix) : false;
                const hasDelimiter = value.includes(this.delimiter);
                const hasDecimalSeparator = value.includes(this.decimalSeparator);
                if (this.currencyPrefix) {
                    value = value.replace(this.currencyPrefix, '');
                }
                if (this.currencySuffix) {
                    value = value.replace(this.currencySuffix, '');
                }
                //when we enter $ in the field using dashboard, it contains '_' that is NaN
                if ((hasPrefix || hasSuffix) && !hasDelimiter && !hasDecimalSeparator && (Number.isNaN(+value) || !value)) {
                    value = '0';
                }
            }
            catch (err) {
                // If value doesn't have a replace method, continue on as before.
            }
        }
        return value;
    }
    addFocusBlurEvents(element) {
        super.addFocusBlurEvents(element);
        this.addEventListener(element, 'focus', () => {
            if (element.defaultValue === element.value) {
                element.setSelectionRange(0, element.defaultValue.length);
            }
        });
        this.addEventListener(element, 'blur', () => {
            element.value = this.getValueAsString(this.addZerosAndFormatValue(this.parseValue(element.value)));
        });
    }
}
exports.default = CurrencyComponent;