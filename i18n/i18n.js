import R from 'ramda'
import { compose, withProps } from 'recompose'
import { withRoute } from '../lib/routing'
import Parser from 'html-react-parser'
import deepMap from 'deep-map'

const defaultLocale = 'pt-br'
const locales = ['pt-br', 'en', 'es']

const getLocale = url => {
  const urlParts = url.split('/')
  return locales.find(locale => urlParts.indexOf(locale) > -1) || defaultLocale
}

export const withLocale = compose(
  withRoute,
  withProps(({ route }) => ({ locale: getLocale(route.pathname) }))
)

/**
 * Creates a translator instance based on a givem map of keys.
 */
const translator = map => key => R.path(typeof key === 'string' ? key.split('.') : [], map)

const parseStringToReact = object => deepMap(object, value => Parser(value))

export const withI18n = compose(
  withLocale,
  withProps(({ locale }) => ({ i18n: translator(parseStringToReact(require(`./${locale}.json`))) }))
)
