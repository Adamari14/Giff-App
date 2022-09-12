import React from 'react'
import Gif from 'components/Gif'
import useSingleGifs from 'hooks/useSingleGif'

export default function Detail ({ params }) {
  const {gif} = useSingleGifs({id: params.id})

  if(!gif) return null

  return <>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
}