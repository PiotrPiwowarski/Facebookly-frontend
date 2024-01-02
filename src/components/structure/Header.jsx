import {Link} from "react-router-dom";

export default function Header() {

  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">Facebookly</Link>
        </nav>
      </header>
    </div>
  );
}