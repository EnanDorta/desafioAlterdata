import { useModalPassword } from '../../hooks/useModalPassword';
import Modal from 'react-modal'

import alertImg  from '../../image/alert.svg'

import { Container } from "./styles";

export function NewPasswordModal() {
  /*Context*/
  const { 
    setNewPassword, 
    isNewChangePasswordModalOpen, 
    handleCloseNewChangePasswordModal,
    resetPasswordUsers  
  } = useModalPassword()
  return (
      /*Modal for change password*/
      <Modal 
        isOpen={isNewChangePasswordModalOpen}
        onRequestClose={handleCloseNewChangePasswordModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content-password"
      >
        <Container>
          <h2>Resetar senha dos usuários</h2>
          <span>Esses usuários terão sua senha resetada</span>
          <input 
            type="password" 
            placeholder="Senha*"
            onChange={(event) => setNewPassword(event.target.value)} 
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
          onClick={resetPasswordUsers}
          >
            Resetar senha
          </button>
          <button
            className="buttonCancelResetPassword"
          >
            Cancelar
          </button>
        </Container>
    </Modal>
  )
}