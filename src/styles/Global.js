import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue-header: #00DBFF;
    --gray: #809FB8;
    --text-color: #06152B;
    --red: #EA3A3D;
    --green: #1AD598;
    --yellow: #F0AD4E;
    --blue: #0093C9; 
    --blue-baby: #5BC0DE;
    --gray-border: #D9E1E7CC;
    --white: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; /* 15px */
    }
    @media (max-width: 720px) {
      font-size: 87.5%; /* 14px */
    }
  }
  
  button {
    cursor: pointer;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }


  /*Style for principal Modal / Cadastrar usuário */
  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;  
    max-width: 520px;
    height: 52rem;
    background: var(--white);
    padding: 3rem;
    position: relative;
    border-radius: 10px;
  }

  /* Style for modal / Mudar email */
  .react-modal-content-email {
    width: 100%;
    max-width: 450px;
    height: 16.5rem;
    padding: 2rem;
    border-radius: 10px;
    border: 2px solid var(--gray-border);
    background: var(--white);
  }

  /* Style for modal / Resetar senha */

  .react-modal-content-password {
    width: 100%;
    max-width: 500px;
    height: 40.5rem;
    padding: 2rem;
    border-radius: 10px;
    border: 2px solid var(--gray-border);
    background: var(--white);
  }
`