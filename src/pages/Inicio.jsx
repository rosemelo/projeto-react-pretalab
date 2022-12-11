import {Alien, BracketsCurly, AddressBook }from "phosphor-react"
import {Header} from "../components/Header"
import homeImg from "../assets/home.svg"

import styles from "../styles/pages/inicio.module.css"

export function Inicio() {
    return (
        <>
     <Header text="Pode chegar!" image={homeImg} />
     <div className={styles.homeContainer}>

      <div className={styles.cardContainer}>
        <Alien size={150} color="#686AAC" weight="thin" />
        <h2 className={styles.cardTitle}>Vida</h2>
        <p className={styles.cardText}>Um pouco sobre mim, minha formação, gostos e curiosidades.</p>
      </div>

      <div className={styles.cardContainer}>
        <BracketsCurly size={150} color="#686AAC" weight="thin"/>
        <h2 className={styles.cardTitle}>Código</h2>
        <p className={styles.cardText}>Mostro meu portfólio. E o que aprendi até o momento, enquanto estudo programação.</p>
      </div>

      <div className={styles.cardContainer}>
        <AddressBook size={150} color="#686AAC" weight="thin"/>
        <h2 className={styles.cardTitle}>Contato</h2>
        <p className={styles.cardText}>Entre em contato comigo. Seja para entrevistas de emprego como deva ou para trocarmos ideias sobre os estudos.</p>
      </div>

     </div>
    </>
    )
}