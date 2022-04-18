import styled from 'styled-components'

export const Container = styled.div`

  /* Container */
  max-width: 1080px;
  margin: 2rem 0;
  border: 1px solid var(--gray-border);
  border-radius: 0.6rem;

  /* Divs for align itens: Usuários cadastrados and Input*/
  .inputUser {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 3rem;

    .search {
      border: 2px solid var(--gray-border);
      padding: 0.4rem 0.9rem;
      border-radius: 0.625rem;

      button {
        border: 0;
        background: var(--white);
      }
    }
    input {
      border: 0;
      ::placeholder {
        font-weight: bold;
      }
    }
  }


  /* Styles from table and thead*/
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  thead tr {
    color: var(--white);
    background: var(--blue);
    height: 3.25rem;
    width: 97%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-around;

    th:nth-child(4) {
      /* Margin in th Email */
      margin: 0 5rem 0 10rem;
    }

    img {
      margin-left: 0.25rem;
    }

    input[type="checkbox"] {
      width: 18px;
      height: 18px;
    }
  }
`