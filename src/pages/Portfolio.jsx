import portfolioImg from "../assets/portfolio.svg"
import { Header } from "../components/Header"

import styles from "../styles/pages/portfolio.module.css"

export function Portfolio() {
    return (
        <>
            <Header text="Meus projetos" image={portfolioImg} />

            <div className={styles.todo}>

                <div>
                    <a target="_blank"
                        href="https://portfolio-rosemelo-pretalab.netlify.app">Meu primeiro repositório</a>
                </div>

                <div>
                    <a target="_blank"
                        href="https://listadetarefaspretalab.netlify.app/">Minha lista de tarefas</a>
                </div>

                <div>
                    <a target="_blank"
                        href="https://projeto-react-pretalab.vercel.app/">Projeto final React</a>
                </div>

            </div>
        </>
    )
}
