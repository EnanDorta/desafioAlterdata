import { useState, useEffect } from "react";
import { useUsers } from "../../hooks/useUsers";
import userImg from '../../image/user.svg'
import { Container } from "./styles"; 

export function Summary({ onOpenNewUserModal }) {
  /*Context*/
  const { users } = useUsers()
  /*State for know total users*/
  const [totalUsers, setTotalUsers] = useState()
  /* UseEffect for update total users */
  useEffect(() => {
    setTotalUsers(users.length)
  }, [users.length])
  return (
    <Container>
     <div>
       <p>Quantidade de <br />  usuários cadastrados: <span>{totalUsers}</span></p>
      </div>
     <div>
       <p>Limite de <br /> usuários permitidos: <span>10</span></p>
     </div>
     <button  
      onClick={onOpenNewUserModal} 
      disabled={totalUsers >= 10}
     > 
      <img src={userImg} alt="Imagem usuário" />
       <p>Cadastrar usuário</p>
     </button> 
    </Container>
  )
}