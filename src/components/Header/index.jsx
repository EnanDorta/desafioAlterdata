import cloudImg from '../../image/cloud.png';
import { Containter, WrapperImg } from './styles';

export function Header() {
  return (
    <Containter>
      <h3>Área  administrativa</h3>
      <WrapperImg>
        <img src={cloudImg} alt="Nuvem alterdata" />
      </WrapperImg>
    </Containter>
  )
}