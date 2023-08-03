import './Jogo.css'

const Jogo = ({nome, game, nota, tempo, imagem, corDeFundo}) => {
    return (
        <div className='jogo'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}><img src={imagem} alt={nome} /></div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{game}</h5>
                <h5>{nota}</h5>
                <h6>{tempo}</h6>
            </div>
        </div>
    )
}

export default Jogo