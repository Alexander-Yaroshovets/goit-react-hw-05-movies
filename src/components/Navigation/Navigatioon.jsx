import { Header, Link } from './Navigation.styled';

const NavBar = () => {
  return (
    <Header>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </Header>
  );
};

export default NavBar;
