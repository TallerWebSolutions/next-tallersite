import { PropTypes } from 'react'
import { getContext, withContext } from 'recompose'

/**
 * HoC component to expose url as route context.
 */
export const page = withContext({ route: PropTypes.object }, ({ url }) => ({ route: url }))

/**
 * HoC component to inject current route.
 */
export const withRoute = getContext({ route: PropTypes.object })
