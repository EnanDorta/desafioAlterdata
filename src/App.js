import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { UsersProvider} from "./hooks/useUsers";
import { CheckedProvider } from "./hooks/useChecked";
import { UseModalPasswordProvider } from "./hooks/useModalPassword";
import { ToastContainer } from "react-toastify";

import { GlobalStyle } from "./styles/Global";

export function App() {
  return (
    <UsersProvider>
      <CheckedProvider>
        <UseModalPasswordProvider>
          <ToastContainer />
          <Header />
          <Main />
          <GlobalStyle />
        </UseModalPasswordProvider>
      </CheckedProvider>
    </UsersProvider>
  )
}