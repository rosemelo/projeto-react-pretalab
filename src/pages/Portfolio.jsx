import portfolioImg from "../assets/portfolio.svg"
import {Header} from "../components/Header"
import styles from "../styles/pages/portfolio.module.css"

export function Portfolio() {
    return (
        <>
     <Header text="Meu site pessoal" image={portfolioImg} />
     
    </>
    )
}