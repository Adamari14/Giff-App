import React, {useEffect ,useState} from 'react';
import './App.css';

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=5LoxDPdQ2ixQkQ0NCghrFzLGfY5KeNFq&q=panda&limit=10&offset=0&rating=g&lang=en'

function App() {
  const [gifs, setGifs] = useState([])
  
  useEffect(function(){
    fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data} = response
        const gifs = data.map(image => image.images.downsized_medium.url)
        setGifs(gifs)
      })
  }, [])

  return (
    <div className="App">
      <section className="App-content">
      {
        gifs.map(singleGifs => <img src = {setGifs}/>)

      }
      </section>
    </div>
  );
}

export default App;
