import { useState } from 'react'
import { useUsers } from "../../hooks/useUsers";
import { useChecked } from "../../hooks/useChecked";
import { useModalPassword } from "../../hooks/useModalPassword";
import { api } from "../../service/api";
import Modal from "react-modal";

import { Container } from "./styles";
import { ContainterDeleteUser } from '../UserList/styles'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement('#root');

export function GroupButtonsUser() {
  /*Context*/
  const { users, setReloadState } = useUsers()
  const { isChecked } = useChecked()
  const { handleUpdatePasswordUsersChecked} = useModalPassword()
  /* State for modal Delete users selected */
  const [isNewModalDeleteUsersChecked, setIsNewModalDeleteUsersChecked] = useState(false)
  /* Modal Delete users checked */
  /*Open modal*/
  function handleOpenNewModalDeleteUsersChecked() {
    setIsNewModalDeleteUsersChecked(true)
  }
  /*Close modal*/
  function handleCloseNewModalDeleteUsersChecked() {
    setIsNewModalDeleteUsersChecked(false)
  }
  /* Remove all users with checked */
  function handleDeleteUsersChecked() {
    isChecked.forEach((item, index) => {
      if (item) {
        api.delete(`users/${users[index].id}`)
        toast.success('Usuários deletados com sucesso!')
      }
      handleCloseNewModalDeleteUsersChecked()
      setReloadState({})
    })
  }
  return (
    <>
      {/* Modal for delete users */}
      <Modal
        isOpen={isNewModalDeleteUsersChecked}
        onRequestClose={handleCloseNewModalDeleteUsersChecked}
        overlayClassName="react-modal-overlay"
        className="react-modal-content-email"
      >
        <ContainterDeleteUser>
          <h2>Você tem certeza disso?</h2>
          <p>Essa ação irá excluir os usuários selecionados</p>
          <div>
            <button onClick={() => handleDeleteUsersChecked()}>Ok</button>
            <button onClick={handleCloseNewModalDeleteUsersChecked}>Cancelar</button>
          </div>
        </ContainterDeleteUser>
      </Modal>
      {/* Buttons and text */}
      <Container>
        <h2>Ações em mais de um usuário</h2>
        <p>Caso deseje alterar mais de um usuário, selecione-os através da <br /> caixa de marcação e em seguida utilize algumas das funções abaixo: </p>
        <div>
          <button 
          className="buttonYellow"
          onClick={handleUpdatePasswordUsersChecked}
          >
            Resetar senha dos usuários selecionados
          </button>
          {/* Button for remove all users Checked */}
          <button 
            onClick={handleOpenNewModalDeleteUsersChecked} 
            className="buttonRed"
            >
              Deletar usuários selecionados
            </button>
        </div>
      </Container> 
    </>
  )
}