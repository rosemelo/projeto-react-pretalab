import sobreImg from "../assets/sobre.svg"
import { Header } from "../components/Header"
import styles from "../styles/pages/sobre.module.css"


export function Sobre() {
  return (
    <>
      <Header text="Um pouco sobre mim" image={sobreImg} />

      <div className={styles.topo}>
        <div>
          <h2>Rose Melo</h2>
          <p>
            Desenvolvedora iniciante<br />
            Em transição de carreira<br />
            Dando um passo de cada vez<br />
            Aprendendo um pouco mais todos os dias
          </p>
        </div>
      </div>

    </>
  )
}
