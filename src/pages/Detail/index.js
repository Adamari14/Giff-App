import React from 'react'
import Gif from 'components/Gif'
import useSingleGifs from 'hooks/useSingleGif'
import useSEO from 'hooks/useSEO'

export default function Detail ({ params }) {
  const {gif, isLoading, isError} = useSingleGifs({id: params.id})

  const title = gif ? gif.title: ''
  useSEO({description: `Detail of ${title}`, title})

  if (isLoading) return <Spinner />
  if (isError) return <Redirect to='/404' />
  if(!gif) return null

  return <>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
}