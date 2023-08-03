import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import Botao from '../Botao/Botao'
import { useState } from 'react'


const Formulario = (props) => {
    const avaliacao = [
        '⭐⭐⭐⭐⭐',
        '⭐⭐⭐⭐',
        '⭐⭐⭐',
        '⭐⭐',
        '⭐',
    ]

    const [nome, setNome] = useState('')
    const [videoGame, setVideoGame] = useState('')
    const [nota, setNota] = useState('')
    const [tempo, setTempo] = useState('')
    const [imagem, setImagem] = useState('')
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.gameCadastrado({nome, videoGame, nota, tempo, imagem})
        setNome('')
        setVideoGame('')
        setNota('')
        setTempo('')
        setImagem('')
    }
    
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados dos seus jogos</h2>
                <CampoTexto obrigatorio={true} label="Nome do Jogo" placeholder="Digite o nome do jogo" valor={nome} aoAlterado={valor => setNome(valor)}/>
                <ListaSuspensa obrigatorio={true} label="Console" placeholder="Escolha o Console" itens={props.vgames} valor={videoGame} aoAlterado={valor => setVideoGame(valor)}/>
                <ListaSuspensa obrigatorio={true} label="Avaliação" placeholder="Escolha o quanto gostou do jogo" itens={avaliacao} valor={nota} aoAlterado={valor => setNota(valor)}/>
                <CampoTexto obrigatorio={true} label="Tempo de Jogo" placeholder="Digite quantas horas jogou (ex: 45 Horas)" valor={tempo} aoAlterado={valor => setTempo(valor)}/>
                <CampoTexto obrigatorio={false} label="Insira uma imagem" placeholder="Insira o link da imagem do jogo (ex: https://www.google.com/search?q=gatos)" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario