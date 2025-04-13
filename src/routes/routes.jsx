import route_map from './route_zmap'
import LazyElement from './lazy_loading'

export const routes = route_map.map(({ path, component }) => ({
  path,
  element: <LazyElement component={component} />,
}))
