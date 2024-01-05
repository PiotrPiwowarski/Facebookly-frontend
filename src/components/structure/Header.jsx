import {Link} from "react-router-dom";

const Header = () => {

  return (
    <div className="facebookly">
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">Facebookly</Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;