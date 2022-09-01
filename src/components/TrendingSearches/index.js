import React, {Suspense} from 'react'
import useNearScreen from 'hooks/useNearScreen'

const TrendingSearches = React.lazy(
    () => import('./TrendingSearches') //import dinamico, solo carga cuando se necesite
)

export default function LazyTrending () {
    const {isNearScreen, fromRef} = useNearScreen({distance: '200px'})

    return <div ref={fromRef}>
        <Suspense fallback={<Spinner />}>
            {isNearScreen ? <TrendingSearches /> : <Spinner/>}
        </ Suspense>
    </div>
} 