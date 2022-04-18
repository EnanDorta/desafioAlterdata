import styled from 'styled-components'

import groupMaskImg from '../../image/groupMask.png'

/* Style for container */
export const Container = styled.div`
  margin-top: 2rem;
  padding: 2rem 2rem;
  background-image: url(${groupMaskImg});
  background-repeat: no-repeat;
  width: 67.5rem;
  height: 15rem;

  h2 {
    font-size: 1.375rem;
    margin-bottom: 1.2rem;
    text-align: left;
    color: var(--text-color);
  }

  p {
    font-size: 1.25rem;
    text-align: left;
    font-weight: 500;
    margin-bottom: 1.25rem;
    color: var(--text-color);
  }

  div {

    button {
      padding: 1rem;
      border-radius: 1rem;
      border: 0;

      margin-right: 1.25rem;

      font-size: 1rem;
      font-weight: bold;
      color: var(--white);
      text-transform: uppercase;
     
    }

    .buttonRed{
      background: var(--red);
    }
    .buttonYellow{
      background: var(--yellow);
    }
  }
`

/* Style for Modal delete users */

export const ContainterModalDeleteUsers = styled.div`
  
`