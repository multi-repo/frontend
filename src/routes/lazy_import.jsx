import React from 'react'

export const lazyImport = (path) => React.lazy(() => import(`${path}`))
