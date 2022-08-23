import React, {useState} from 'react';
import './App.css';

const GIFS = ['https://media0.giphy.com/media/E49KOgnZDmLXq/200w.webp?cid=ecf05e47pr692hnlzob1yad06gxq9meocxd3p61urgahh3sc&rid=200w.webp&ct=g', 'https://media0.giphy.com/media/nVsLCrW5iHf6E/giphy.gif?cid=ecf05e47yu8eeq3bx7ao6mthmg3tcuhiasparhuxhbmflayr&rid=giphy.gif&ct=g']

const DIFFERENTS_GIFS = ['https://media1.giphy.com/media/aUhEBE0T8XNHa/giphy.gif?cid=ecf05e47106xp1r0sgyphghy3ms1n3r416rvic5t69kqb7en&rid=giphy.gif&ct=g' ]

function App() {
  const [gifs, setGifs] = useState(GIFS)
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
