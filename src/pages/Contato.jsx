import { useState } from "react"
import { Header } from "../components/Header"
import contatoImg from "../assets/contato.svg"
import { database } from "../services/firebase"
import { ref, push, set } from "firebase/database"

import styles from "../styles/pages/contato.module.css"

export function Contato() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleInputName(event) {
    setNome(event.target.value)
  }

  function handleInputEmail(event) {
    setEmail(event.target.value)
  }

  function handleInputMensage(event) {
    setMensagem(event.target.value)
  }

  function createMessage(event) {
    event.preventDefault()


    //criando uma tabela de mensagens dentro do firebase
    const mensagensListRef = ref(database, 'mensagens')

    //dentro da tabela de msg crie uma nova msg
    const novaMensagemRef = push(mensagensListRef)

    // dizer o que vai em cada mensagem
    set(novaMensagemRef, {
      nome: nome,
      email: email,
      texto: mensagem
    })


    setNome('')
    setEmail('')
    setMensagem('')
  }

  return (
    <>
      <Header text="Vamos trocar uma ideia?" image={contatoImg} />

      <div className={styles.formContainer}>
        <form onSubmit={createMessage} className={styles.form}>
          <input onChange={handleInputName} placeholder="Digite seu nome" className={styles.formInput} value={nome} />
          <input onChange={handleInputEmail} placeholder="Digite seu e-mail" className={styles.formInput} value={email} />
          <textarea onChange={handleInputMensage} placeholder="Digite sua mensagem" className={styles.formTextArea} value={mensagem} />
          <button className={styles.formButton} type="submit">Enviar mensagem</button>
        </form>
      </div>
    </>
  )
}
