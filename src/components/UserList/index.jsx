import { useState } from "react";
import { useUsers } from "../../hooks/useUsers";
import { api } from "../../service/api";
import Modal from "react-modal";

import trashImg from '../../image/trash.svg'
import alertImg from '../../image/alert.svg'
import { Container, ContainerChangeEmail, ContainerResetPassword, ContainterDeleteUser } from "./styles";

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement('#root');

export function UserList( {user, isChecked, setIsChecked, index } ) {
  /* State from context */
  const {setReloadState } = useUsers()
  /* State from modal email, true = open / false = close */
  const [isNewChangeEmailModal, setIsNewChangeEmailModal] = useState(false)
  /* State for function changeEmail */ 
  const [newEmail, setNewEmail] = useState('')
  /* State for function resetPasswordUser */
  const [resetPassword, setResetPassword] = useState("")
  /* State for modal reset password */
  const [isNewResetPasswordModal, setIsNewResetPasswordModal] = useState(false)
  /*State for modal delete user*/
  const [isNewDeleteUserModal, setIsNewDeleteUserModal] = useState(false)

  /*This function takes the selected checkbox, and change for true a index in array of state in context*/
  const handleOnChange = (position) => {
    const newChecked = [...isChecked];
    newChecked.splice(position, 1, !isChecked[position]);
    setIsChecked(newChecked)
  }  

  /* Modal change Email*/
  /* Open modal */
  function handleOpenNewChangeEmailModal() {
    setIsNewChangeEmailModal(true) 
  }
  /* Close modal */
  function handleCloseNewChangeEmailModal() {
    setIsNewChangeEmailModal(false) 
  }
  /*Modal reset password*/
  /* Open modal */
  function handleOpenNewResetPasswordModal() {
    setIsNewResetPasswordModal(true) 
  }
  /* Close modal */
  function handleCloseNewResetPasswordModal() {
    setIsNewResetPasswordModal(false) 
  }
  /* Modal for delete user */
  /*Open modal*/
  function handleOpenDeleteUserModal() {
    setIsNewDeleteUserModal(true)
  }
  /* Close modal */
  function handleCloseDeleteUserModal() {
    setIsNewDeleteUserModal(false)
  }
  /* Change email */
  async function changeEmail(id, newEmail) {
    await api.patch(`users/${id}`, {"email": newEmail})
    handleCloseNewChangeEmailModal()
    setReloadState({})
    toast.success('Email alterado com sucesso!')
  }
  /*Reser password User*/
  function resetPasswordUser(id, resetPassword) {
    // Logic for validation password using RegExp
    const bigLetters = /[A-Z]/
    const smallLetters = /[a-z]/
    const numbers = /[0-9]/
    const characterSpecial = /[@|#|%|*]/;
    if (resetPassword.includes(" ")) return toast.error('A senha não pode conter espaço')
    if (resetPassword.length <= 9) return toast.error('Senha menor que 10 caracteres')
    if (!characterSpecial.test(resetPassword)) {
      return toast.error('A senha deve conter caracteres especiais')
    }
    if (!numbers.test(resetPassword)) {
      return toast.error('A senha deve conter algum número de 0 - 9')
    }
    if (!smallLetters.test(resetPassword)) {
      return toast.error('A senha deve conter letras minúsculas')
    }
    if (!bigLetters.test(resetPassword)) {
      return toast.error('A senha deve conter letras maiúsculas')
    }
    api.patch(`users/${id}`, {"password": resetPassword})
    handleCloseNewResetPasswordModal()
    toast.success('Senha alterada com sucesso!')
  }
  /* Remove a user by id */
  async function handleRemoveUser(id) {
    await api.delete(`users/${id}`)
    setReloadState({})
    toast.success('Usuário deletado com sucesso')
  }
  return (
    <>
      {/* Modal for changeEmail */}
      <Modal
        isOpen={isNewChangeEmailModal}
        onRequestClose={handleCloseNewChangeEmailModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content-email"
      >
        <ContainerChangeEmail>
          <h2>Insira o endereço de e-mail</h2>
            <p>{user.login}</p>
            {/* This input save email in state newEmail */}
          <input 
            type="email" 
            placeholder="E-mail"
            onChange={(event) => setNewEmail(event.target.value)}
          />
            <div>
              {/* This buttons call function changeEmail, and closeModal */}
              <button 
                onClick={() => changeEmail(user.id, newEmail)}
              >
                Ok
              </button>
              {/* This button close Modal */}
              <button 
                onClick={handleCloseNewChangeEmailModal}
              >
                Cancelar
              </button>
            </div>
        </ContainerChangeEmail>
      </Modal>
      {/* Modal for reset Password */}
      <Modal
        isOpen={isNewResetPasswordModal}
        onRequestClose={handleCloseNewResetPasswordModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content-password"
      >
        <ContainerResetPassword>
        <h2>Resetar senha do usuário</h2>
          <span>{user.login}</span>
          <input 
            type="password" 
            placeholder="Senha*"
            onChange={(event) => setResetPassword(event.target.value)} 
          />
          <div className="restrictionPassword">
            <p> <img src={alertImg} alt="Alerta" /> Iniciar com letra ou número </p>
            <p> <img src={alertImg} alt="Alerta" /> Pelo menos 10 caracteres </p>
            <p> <img src={alertImg} alt="Alerta" /> Pelo menos 1 letra maiúscula (A-Z) </p>
            <p> <img src={alertImg} alt="Alerta" /> Pelo menos 1 letra minúscula (A-Z) </p>
            <p> <img src={alertImg} alt="Alerta" /> Pelo menos 1 destes caracteres especiais @##%* </p>
            <p> <img src={alertImg} alt="Alerta" /> Pelo menos 1 número (0-9) </p>
          </div>
          <button
          className="buttonResetPassword"
          onClick={() => resetPasswordUser(user.id, resetPassword)}
          >
            Resetar senha
          </button>
          <button
            className="buttonCancelResetPassword"
            onClick={handleCloseNewResetPasswordModal}
          >
            Cancelar
          </button>
        </ContainerResetPassword>
      </Modal>
      {/* Modal for delete user */}
      <Modal
        isOpen={isNewDeleteUserModal}
        onRequestClose={handleCloseDeleteUserModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content-email"
      >
       <ContainterDeleteUser>
         <h2>Você tem certeza disso?</h2>
         <p>Essa ação irá excluir o usuário {user.login}</p>
         <div>
           <button onClick={() => handleRemoveUser(user.id)}>Ok</button>
           <button onClick={handleCloseDeleteUserModal}>Cancelar</button>
         </div>
       </ContainterDeleteUser> 
      </Modal>
      {/* Tr with info from user */}
      <Container>
        <input 
          type="checkbox"
          checked={isChecked[index]}
          onChange={() => handleOnChange(index)} 
        />
        <td>{user.code}</td>
        <td>{user.login}</td>
        <td>{user.email}</td>

        {/* This button call ModalChangeEmail */}
        <button
          className="changeEmail"
          onClick={handleOpenNewChangeEmailModal}
        >
          Mudar email
        </button>
        {/* This button reset password user */}
        <button 
          className="resetPassword"
          onClick={handleOpenNewResetPasswordModal}
        >
          Resetar
        </button>
        {/* This button remove a user */}
        <button 
          // onClick={(() => handleRemoveUser(user.id))} 
          onClick={() => handleOpenDeleteUserModal()} 
          className="delete"
        >
          <img src={trashImg} alt="Lixeira" />
        </button>
      </Container>
    </>
  )
}