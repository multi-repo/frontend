import { Suspense } from 'react'

const LazyElement = ({ component: Component }) => (
  <Suspense>
    <Component />
  </Suspense>
)

export default LazyElement
