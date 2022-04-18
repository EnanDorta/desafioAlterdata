import styled from 'styled-components'
import backgroundImg from '../../image/backgroundHeader.png';

export const Containter = styled.header`

  /* Styles from text: ÁREA ADMINISTRATIVA */
  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;  

    background: var(--blue-header);

    text-align: center;
    font-size: 1rem;
    color: var(--white);
    font-weight: bold;
    text-transform: uppercase;
  }
`

/* Styles from img Background and align items */
export const WrapperImg = styled.div`
  height: 16.75rem;
  width: 100%;
  opacity: 0.9;
  margin-bottom: 1.5rem;
  
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`
