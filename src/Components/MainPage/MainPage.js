import React from 'react'
import useForms from '../../hooks/useForms'
import { MainContainer, Form, Input } from './styles'


function MainPage() {
  // const [nome, setNome] = useState("")
  // const [idade, setIdade] = useState("")
  // const [email, setEmail] = useState("")

  // const onChangeNome = (event) => {
  //   setNome(event.target.value)
  // }

  // const onChangeIdade = (event) => {
  //   setIdade(event.target.value)
  // }

  // const onChangeEmail = (event) => {
  //   setEmail(event.target.value)
  // }

  const [formulario, onChangeInput, limpaCampo] = useForms({nome: "", idade: "", email: "", profissao: ""})

  const handleClick = (event) => {
    event.preventDefault()
    limpaCampo()
    console.log(`nome: ${formulario.nome}, idade: ${formulario.idade}, e-mail: ${formulario.email}, profissão: ${formulario.profissao}`)
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input 
          id="nome"
          name='nome'
          value={formulario.nome}
          onChange={onChangeInput}
          required
        />

        <label htmlFor="idade">Idade:</label>
        <Input 
          id="idade"
          name='idade'
          value={formulario.idade}
          onChange={onChangeInput}
          required
        />

        <label htmlFor="email">E-mail:</label>
        <Input 
          id="email"
          name='email'
          value={formulario.email}
          onChange={onChangeInput}
          type="email"
          required
        />
        
        <label htmlFor="profissao">Profissão:</label>
        <Input 
          id="profissao"
          name='profissao'
          value={formulario.profissao}
          onChange={onChangeInput}
          required
        />

      <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
