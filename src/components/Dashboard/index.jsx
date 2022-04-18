import { UserList } from "../UserList";
import { useEffect, useState} from "react";
import { useChecked } from "../../hooks/useChecked";
import { useUsers } from "../../hooks/useUsers";

import { Container } from "./styles";

import arrowsImg from "../../image/arrows.svg"
import searchImg from '../../image/search.svg'

export function Dashboard() {
  // Context
  const { users } = useUsers()
  const { isChecked, setIsChecked } = useChecked()
  //State for checkbox
  const [select, setSelected] = useState(false)
  // This useEffect create a array with total checkbox from Users
  useEffect(() => {
    setIsChecked(new Array(users.length).fill(false))
  }, [users, setIsChecked])
  /* This function select all checkbox for true or false */
  function handleOnChange() {
    setSelected(item => !item)
      const updatedCheckedState = isChecked.map((item) => !item
    );
    setIsChecked(updatedCheckedState) 
  }

  return (
    <Container>
      <div className="inputUser">
        <h2>Usuários Cadastrados</h2>
        <div className="search">
          <input type="text" placeholder="Busca" />
          <button><img src={searchImg} alt="Buscar" /></button> 
        </div> 
      </div>
      <table>
        <thead>
          <tr>
            <input 
              type="checkbox"
              checked={select}
              onChange={() => handleOnChange()}
            />
            <th>Código <img src={arrowsImg} alt="Setas" /> </th>
            <th>Login <img src={arrowsImg} alt="Setas" /> </th>
            <th>Email <img src={arrowsImg} alt="Setas" /> </th>
            <th>Resetar senha</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {
            /* Map in users, and pass for props for a component User list */
            users.map((user, index) => {
              return (
                <UserList key={user.id} user={user} index={index} setIsChecked={setIsChecked} isChecked={isChecked} />
              )
            })
          }
        </tbody>
      </table>
    </Container>
  )
}