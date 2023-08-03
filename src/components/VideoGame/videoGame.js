import Jogo from '../Jogo/Jogo'
import './videoGame.css'

const VideoGame = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.games.length > 0) && <section className='console' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='card-game'>
                {props.games.map(game => <Jogo key={game.nome} nome={game.nome} game={game.videoGame} nota={game.nota} tempo={game.tempo} imagem={game.imagem} corDeFundo={props.corPrimaria} />)}
            </div>
        </section>
    )
}

export default VideoGame