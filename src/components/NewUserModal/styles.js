import styled from 'styled-components'

export const Container = styled.form`
  h2 {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 2rem;
    font-weight: bold;
  }

  input {
    border: 2px solid var(--gray-border);
    padding: 1rem;
    width: 100%;
    border-radius: 10px;

    & + input {
      margin-top: 1rem;
    }
  }
  input::placeholder {
      color: var(--gray);
  }

  div {
    background: #D9E1E7;
    padding: 1rem 0.5rem;
    margin: 1rem 0;
    border-radius: 10px;
    border: 2px solid var(--gray-border);
    font-weight: bold;

    p {
      margin: 0.5rem;
    }
  }

  .radioInputs {
      text-align: left;
      border: 0;
      background: var(--white);
      width: 100%;
      font-weight: bold;

      display: flex;
      align-items: center;

      input {
        margin: 0;
        width: 15%;
        height: 20px;
      }
    }

  .buttonRegister {
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--green);
    padding: 1rem;
    width: 100%;
    
    border: 0;
    border-radius: 10px;

    color: var(--white);
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  .buttonCancel {
    position: absolute;
    right: 1.25rem;
    bottom: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    
    background: transparent;

    border: 2px solid var(--gray-border);
    border-radius: 10px;

    color: var(--gray);

  }
`