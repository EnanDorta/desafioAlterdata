import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { api } from "../service/api";

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const UsersContext = createContext({})

export function UsersProvider({ children }) {
  /*State with total users*/ 
  const [users, setUsers] = useState([]);
  /* State for update useEffect */
  const [realoadState, setReloadState] = useState([]);
  /* useEffect update total users */
  useEffect(() => {
    api.get('users')
    .then(response => setUsers(response.data))
  }, [realoadState])
  /*Function create a new user and post in API*/ 
  async function createUser(userInput) {
    await api.post('users', {
      ...userInput
    })
    const response = [userInput]
    setReloadState(response)
    toast.success('Usuário criado com sucesso')
  }
  return (
    <UsersContext.Provider value={{ users, createUser, setReloadState }}>
      {children}
    </UsersContext.Provider>
  )
}

export function useUsers() {
  const context = useContext(UsersContext)
  return context
}