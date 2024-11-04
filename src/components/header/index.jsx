import { Link } from 'react-router-dom';
import * as C from './styles';

const Header = () => {
  return (
    <C.Header>
      <C.Title>Lucas Ferreira Silva</C.Title>
      <C.Nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/projects'}>Projetos</Link>
        <Link to={'/about'}>Sobre</Link>
      </C.Nav>
    </C.Header>
  );
};

export default Header;
