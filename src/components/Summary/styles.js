import styled from 'styled-components';

export const Container = styled.div`
  /*Align texts and button*/
  max-width: 1080px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;


  div {
    /* Styles from Divs texts */
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid var(--gray-border);
    border-radius: 1rem;
    padding: 0.8rem 1rem;
    width: 21rem;
    /* Styles text */
    p {
      text-align: left;
      color: var(--text-color);
      font-size: 1.1rem;
      font-weight: bold;
      line-height: 1rem;
      /* Add green in numbers and edit format */
      span {
       color: var(--green);
       font-size: 2.25rem;
       margin-left: 5rem;
      }
    }
  }
  /* Styles from button: CADASTRAR USUÁRIO */
  button {
    display: flex;
    justify-content: space-around;
    align-items: center;

    background: var(--green);

    width: 18rem;
    padding: 1rem 1rem;
    border-radius: 1rem;
    border: 0;

    transition: filter 0.2s;

    p {
      font-size: 1rem;
      font-weight: bold;
      color: var(--white);
      text-transform: uppercase;    
    }

    &:hover {
      filter: opacity(0.8);
    }
  }

  button:disabled {
    filter: opacity(0.5);
  }
`