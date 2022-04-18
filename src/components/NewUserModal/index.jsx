import Modal from 'react-modal'
import { useState } from 'react';

import { Container } from "./styles";

import alertImg from '../../image/alert.svg'
import { useUsers } from '../../hooks/useUsers';

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export function NewUserModal({ isOpen, onRequestClose }) {
  const { createUser } = useUsers()

  const [login, setLogin] = useState('');
  const [code, setCode] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleCreateNewUser(event) {
    event.preventDefault();
    
    // Logic for validation password using RegExp
    const bigLetters = /[A-Z]/
    const smallLetters = /[a-z]/
    const numbers = /[0-9]/
    const characterSpecial = /[@|#|%|*]/;
    if (code === 0) return toast.error("Preencha o campo código");

    if (login === '') return toast.error("Preencha o campo login");

    if (!login.includes(`${code}.`)) return toast.error("O login precisa conter o seu código, exemplo 123456.teste")

    if (password.includes(" ")) return toast.error('A senha não pode conter espaço')

    if (password.includes(`${login}`)) return toast.error('A senha não pode ter o seu login')

    if (password.includes(`${code}`)) return toast.error('A senha não pode ter o seu código')

    if (password.length <= 9) return toast.error('Senha menor que 10 caracteres')

    if (!characterSpecial.test(password)) {
      return toast.error('A senha deve conter caracteres especiais')
    }
    if (!numbers.test(password)) {
      return toast.error('A senha deve conter algum número de 0 - 9')
    }
    if (!smallLetters.test(password)) {
      return toast.error('A senha deve conter letras minúsculas')
    }

    if (!bigLetters.test(password)) {
      return toast.error('A senha deve conter letras maiúsculas')
    }

    await createUser({
      code,
      login,
      password,
      email
    })

    onRequestClose()
    setLogin('')
    setCode(0)
    setEmail('')
    setPassword('')
  }

  return (
      /* Modal for create a user */
      <Modal
        //Is open = true, modal open. False modal is close.
        isOpen={isOpen}
        //Close modal and set false
        onRequestClose={onRequestClose}
        //Styles from modal
        overlayClassName="react-modal-overlay"
        className="react-modal-content" 
      > 
        {/* Form for create a new User */}
        <Container onSubmit={handleCreateNewUser}>
          <h2>Cadastrar usuário</h2>
          <input 
            placeholder="Código (Exemplo: 123456)"
            type="number" 
            value={code} 
            onChange={(event) => (setCode(event.target.value))} 
          />
          <input 
            placeholder="Login* (Exemplo: 123456.teste)"
            type="text"
            value={login}
            onChange={(event) => (setLogin(event.target.value))} 
          />
          <input
            type="email" 
            placeholder="E-mail*"
            value={email}
            onChange={(event) => (setEmail(event.target.value))}
          />
          <input 
            type="password" 
            placeholder="Senha*"
            value={password}
            autoComplete="current-passowrd"
            onChange={(event) => (setPassword(event.target.value))}
          />
          <div>
            <p> <img src={alertImg} alt="Alerta" /> Iniciar com letra ou número </p>
            <p> <img src={alertImg} alt="Alerta" /> Pelo menos 10 caracteres </p>
            <p> <img src={alertImg} alt="Alerta" /> Pelo menos 1 letra maiúscula (A-Z) </p>
            <p> <img src={alertImg} alt="Alerta" /> Pelo menos 1 letra minúscula (A-Z) </p>
            <p> <img src={alertImg} alt="Alerta" /> Pelo menos 1 destes caracteres especiais @##%* </p>
            <p> <img src={alertImg} alt="Alerta" /> Pelo menos 1 número (0-9) </p>
          </div>
          <div className="radioInputs">
            Senha Fixa: 
            <input type="radio" name="yes" id="yes" /> Sim
            <input type="radio" name="no" id="no" /> Não
          </div>
          <button type="submit" className="buttonRegister">
            Cadastrar Usuário
          </button>
          <button type="button" className="buttonCancel" onClick={onRequestClose} >
            Cancelar
          </button>
        </Container>
      </Modal>
  )
}