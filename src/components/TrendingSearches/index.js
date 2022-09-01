import React from 'react'
import useNearScreen from 'hooks/useNearScreen'

const TredingSearches = React.lazy(
    () => import('./TrendingSearches') //import dinamico, solo carga cuando se necesite
)

export default function LazyTrending () {
    const {isNearScreen, fromRef} = useNearScreen({distance: '200px'})

    return <div ref={fromRef}>
        {isNearScreen ? <TrendingSearches/> : null}
    </div>
} 