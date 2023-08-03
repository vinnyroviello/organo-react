import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import VideoGame from './components/VideoGame/videoGame';
import Rodape from './components/Rodape/rodape';

function App() {

  const vgames = [
    {
      nome: 'Playstation 5',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Nintendo Switch',
      corPrimaria: '#e06b69',
      corSecundaria: '#FDE7E8 ',
    },
    {
      nome: 'XBOX Series S/X',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
  ]
  
  const [games, setGames] = useState([])

  const novoGameAdicionado = (game) => {
    console.log(game)
    setGames([...games, game])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario vgames={vgames.map(vgame => vgame.nome)} gameCadastrado={game => novoGameAdicionado(game)}/>
      {vgames.map(vgame => <VideoGame key={vgame.nome} nome={vgame.nome} corPrimaria={vgame.corPrimaria} corSecundaria={vgame.corSecundaria} games={games.filter(game => game.videoGame === vgame.nome)}/>)}
      <Rodape />
    </div>
  );
}

export default App;