import { useState, useContext, createContext } from "react";
import { useUsers } from "../hooks/useUsers";
import { useChecked } from "../hooks/useChecked";
import { api } from "../service/api";

const UseModalPasswordContext = createContext({})

export function UseModalPasswordProvider({ children }) {
  // New password
  const [newPassword, setNewPassword] = useState("")
  // State from modal / True = Modal open / False = Modal closed /
  const [isNewChangePasswordModalOpen, setIsNewChangePasswordModalOpen] = useState(false);
  // Context
  const { users, setReloadState } = useUsers()
  const { isChecked } = useChecked()

  /* Modal for change password */
  /* Open modal */
  function handleOpenNewChangePasswordModal() {
    setIsNewChangePasswordModalOpen(true)
  }
  /* Close modal */
  function handleCloseNewChangePasswordModal() {
    setIsNewChangePasswordModalOpen(false)
  }
  /*This call a modal and reset password for numbers of users*/
  function handleUpdatePasswordUsersChecked() {
    isChecked.forEach((item) => {
      if (item) {
        handleOpenNewChangePasswordModal()
      } else {
        return
      }
      setReloadState({})
    })
  }
  // Change password from users with checkbox selected
  async function resetPasswordUsers() {
    // Logic for validation password using RegExp
   const bigLetters = /[A-Z]/
   const smallLetters = /[a-z]/
   const numbers = /[0-9]/
   const characterSpecial = /[@|#|%|*]/;

   if (newPassword.includes(" ")) return alert('A senha não pode conter espaço')

   if (newPassword.length <= 9) return alert('Senha menor que 10 caracteres')

   if (!characterSpecial.test(newPassword)) {
     return alert('A senha deve conter caracteres especiais')
   }

   if (!numbers.test(newPassword)) {
     return alert('A senha deve conter algum número de 0 - 9')
   }

   if (!smallLetters.test(newPassword)) {
     return alert('A senha deve conter letras minúsculas')
   }

   if (!bigLetters.test(newPassword)) {
     return alert('A senha deve conter letras maiúsculas')
   }
   /* This reset password from users selected */
   console.log(isChecked)
   isChecked.forEach((item, index) => {
     if (item === true) {
       api.patch(`users/${users[index].id}`, {"password": newPassword})   
     }
     setNewPassword("")
     handleCloseNewChangePasswordModal()
     setReloadState({})
   })
 }
 return (
  <UseModalPasswordContext.Provider value={{ 
    setNewPassword, 
    isNewChangePasswordModalOpen, 
    handleCloseNewChangePasswordModal,
    handleUpdatePasswordUsersChecked,
    resetPasswordUsers   
  }}>
    {children}
  </UseModalPasswordContext.Provider>
 )
}
export function useModalPassword() {
  const context = useContext(UseModalPasswordContext)
  return context
}