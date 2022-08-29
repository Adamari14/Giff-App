const apiKey = '5LoxDPdQ2ixQkQ0NCghrFzLGfY5KeNFq'

export default function getGifs ({keyword = 'morty'} = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

  return  fetch(apiURL)
  .then(res => res.json())//de la respuesta convertirla como ojson
  .then(response => {
    const {data/*es un array */=[]} = response
    if(Array.isArray(data)) {  
      const gifs = data.map(image => {  
        const {images, title, id}=image
        const {url}=images.downsized_medium
        return {title, id, url} 
      })
      return gifs
    }
  })
} 