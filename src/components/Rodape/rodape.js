import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://linkedin.com/in/vinnyroviello/" target="_blank" rel="noreferrer">
                        <img src="/imagens/linkedin.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/vinnyroviello" target="_blank" rel="noreferrer">
                        <img src="/imagens/github.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/vinnyroviello/" target="_blank" rel="noreferrer">
                        <img src="/imagens/instagram.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Vinícius Roviello.
            </p>
        </section>
    </footer>)
}

export default Rodape