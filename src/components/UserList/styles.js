import styled from 'styled-components'

export const Container = styled.tr`
 /* Styles from container */
  background: #F8F8F8;
  height: 5rem;
  margin: 1rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  input[type="checkbox"] {
      width: 18px;
      height: 18px;
    }

  /* Styles from text and buttons */  
  td {
    color: var(--text-color);
    font-weight: bold;
    font-size: 1.1rem;
  }

  button {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 0;

    color: var(--white);
    font-weight: bold;
  }
  /* Add and remove colors from buttons*/
  .changeEmail {
    background: var(--blue-baby);
  }

  .resetPassword {
    background: var(--yellow);
  }

  .delete {
    background: transparent;
  }
`
/* Style from modal changeEmail */
export const ContainerChangeEmail = styled.div`

  padding: 0.2rem 1rem;

  h2 {
    text-align: center;
    color: var(--text-color);
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 1rem;
    color: var(--text-color);
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 1rem;
    border: 2px solid var(--gray-border);
    border-radius: 10px;
    margin-bottom: 1.3rem;
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  button {
    padding: 0.8rem 1rem;
    border: 0;
    border-radius: 10px;
    width: 8.75rem;
    color: var(--white);
    font-size: 1.1rem;
    text-transform: uppercase;
  }

  button:nth-child(1) {
    background-color: var(--green);
  }

  button:nth-child(2) {
    background-color: var(--gray);
  }

`
/* Style for reset password modal */
export const ContainerResetPassword = styled.div`
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
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
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
/* Style for Modal delete user */
export const ContainterDeleteUser = styled.div`

padding: 0.8rem 1rem;

  h2 {
    text-align: center;
    color: var(--text-color);
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 2rem;
    color: var(--text-color);
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 1rem;
    border: 2px solid var(--gray-border);
    border-radius: 10px;
    margin-bottom: 1.3rem;
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  button {
    padding: 0.9rem 1.2rem;
    border: 0;
    border-radius: 10px;
    width: 8.75rem;
    color: var(--white);
    font-size: 1.1rem;
    text-transform: uppercase;
  }

  button:nth-child(1) {
    background-color: var(--green);
  }

  button:nth-child(2) {
    background-color: var(--gray);
  }

`