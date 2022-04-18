import { createContext, useContext } from "react";
import { useState } from "react";

const CheckedContext = createContext({})

export function CheckedProvider({ children }) {
  /*Number total from checkbox true or false*/
  const [isChecked, setIsChecked] = useState([])
  return (
    <CheckedContext.Provider value={{ isChecked, setIsChecked }}>
      {children}
    </CheckedContext.Provider>
  )
}
export function useChecked() {
  const context = useContext(CheckedContext)
  return context
}
