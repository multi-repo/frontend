import { HOME_PATH, WHITE_PATH, AUTH_PATH } from './routePaths'
import { HOME_ELEMENT, WHITE_ELEMENT, AUTH_LAYOUT } from './routeElements'

export const routes = [
  {
    path: HOME_PATH,
    element: <HOME_ELEMENT />,
  },
  {
    path: WHITE_PATH,
    element: <WHITE_ELEMENT />,
  },
  {
    path: AUTH_PATH,
    element: <AUTH_LAYOUT />,
  },
]
