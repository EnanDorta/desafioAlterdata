import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

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

  span {
    padding: 1.5rem;
    border: 2px solid var(--gray-border);
    border-radius: 10px;
    text-align: center;
    display: block;
    margin-bottom: 1.1rem;


  }

  .restrictionPassword {
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

  button {
    padding: 0.8rem 1rem;
    border: 0;
    border-radius: 10px;
    width: 8.75rem;
    color: var(--white);
    font-size: 1.1rem;
  }

  .buttonResetPassword {
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

  .buttonCancelResetPassword {
    position: absolute;
    right: 0.6rem;
    bottom: -5.5rem;

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