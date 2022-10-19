// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
// @ts-check
/* eslint-disable */

/**
 * @typedef { import('typesafe-i18n').TranslateByString } TranslateByString
 * @typedef { import('typesafe-i18n').LocaleTranslations<Locales, Translations> } LocaleTranslations
 * @typedef { import('typesafe-i18n').LocaleTranslationFunctions<Locales, Translations, TranslationFunctions> } LocaleTranslationFunctions
 * @typedef { import('typesafe-i18n/detectors').LocaleDetector } LocaleDetector
 * @typedef { import('./types.actual').Locales } Locales
 * @typedef { import('./types.actual').Namespaces } Namespaces
 * @typedef { import('./types.actual').Formatters } Formatters
 * @typedef { import('./types.actual').Translations } Translations
 * @typedef { import('./types.actual').TranslationFunctions } TranslationFunctions
 */

import { i18n as initI18n, i18nObject as initI18nObject, i18nString as initI18nString } from 'typesafe-i18n'

import { detectLocale as detectLocaleFn } from 'typesafe-i18n/detectors'

/** @type { Locales } */
export const baseLocale = 'de'

/** @type { Locales[] } */
export const locales = [
	'en-us',
	'de_at',
	'it',
	'de'
]

/** @type { Namespaces[] } */
export const namespaces = [
	'test',
	'some-other_namespace'
]

/**
 * @param { string } locale
 * @return { locale is Locales }
 */
export const isLocale = (locale) => locales.includes(/** @type { Locales } */ (locale))

/**
 * @param { string } namespace
 * @return { namespace is Namespaces }
 */
export const isNamespace = (namespace) => namespaces.includes(/** @type { Namespaces } */ (namespace))

export const loadedLocales = /** @type { Record<Locales, Translations> } */ ({})

export const loadedFormatters = /** @type { Record<Locales, Formatters> } */ ({})

/**
 * @param { Locales } locale
 * @return { TranslateByString }
 */
export const i18nString = (locale) => initI18nString(locale, loadedFormatters[locale])

/**
 * @param { Locales } locale
 * @return { TranslationFunctions }
 */
export const i18nObject = (locale) =>
	initI18nObject(
		locale,
		loadedLocales[locale],
		loadedFormatters[locale]
	)

/**
 * @return { LocaleTranslationFunctions }
 */
export const i18n = () =>
	initI18n(loadedLocales, loadedFormatters)

/**
 * @param { LocaleDetector[] } detectors
 * @return { Locales }
 */
export const detectLocale = (...detectors) => detectLocaleFn(baseLocale, locales, ...detectors)
