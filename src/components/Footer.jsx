import styles from "../styles/components/footer.module.css"
export function Footer() {
    return(
        <footer className={styles.footerContainer}>
            <p className={styles.footerText}> ♡ Este é um projeto realizado durante o módulo de ReactJS da Pretalab ♡</p>
        </footer>
    )
}