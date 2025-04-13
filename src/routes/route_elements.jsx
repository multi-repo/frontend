import { lazyImport } from './lazy_import'

export const ROUTE_ELEMENTS = {
  HOME: lazyImport('../layouts/HomeLayout.jsx'),
  WHITE: lazyImport('../Components/WhiteForm/WhiteForm.jsx'),
  AUTH: lazyImport('../Components/AuthForm/AuthMain.jsx'),
  AUTH_MAIN: lazyImport('../Components/AuthForm/AuthMain.jsx'),
}
