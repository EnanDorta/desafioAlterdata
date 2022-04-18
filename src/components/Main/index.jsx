import { useState } from "react";
import Modal from 'react-modal'

import { Dashboard } from "../Dashboard";
import { GroupButtonsUser } from "../GroupButtonsUser";
import { NewPasswordModal } from "../NewPasswordModal";
import { NewUserModal } from "../NewUserModal";
import { Summary } from "../Summary";
import { Container } from "./styles";

Modal.setAppElement('#root');

export function Main() {
  /* State from modal, true = open / false = close */
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false);
  /* Modal for create User */
  /* Open modal */
  function handleOpenNewUserModal() {
    setIsNewUserModalOpen(true);
  }
  /* Close modal */
  function handleCloseNewUserModal() {
    //change modal state for false and close
    setIsNewUserModalOpen(false);
  }
  return (
    <Container>
      <Summary onOpenNewUserModal={handleOpenNewUserModal} />
      <GroupButtonsUser />
      <NewUserModal isOpen={isNewUserModalOpen} onRequestClose={handleCloseNewUserModal} />
      <NewPasswordModal />
      <Dashboard />
    </Container>    
  )
}