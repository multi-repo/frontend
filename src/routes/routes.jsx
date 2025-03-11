import { ROUTE_PATHS } from './routePaths'
import { ROUTE_ELEMENTS } from './routeElements'

export const routes = [
  { path: ROUTE_PATHS.HOME, element: <ROUTE_ELEMENTS.HOME /> },
  { path: ROUTE_PATHS.WHITE, element: <ROUTE_ELEMENTS.WHITE /> },
  { path: ROUTE_PATHS.AUTH, element: <ROUTE_ELEMENTS.AUTH /> },
  { path: ROUTE_PATHS.AUTH_MAIN, element: <ROUTE_ELEMENTS.AUTH_MAIN /> },
]
