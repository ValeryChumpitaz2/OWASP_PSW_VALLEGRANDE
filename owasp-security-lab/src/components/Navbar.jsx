import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🛡 OWASP Security Lab</h2>

      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/xss">XSS</Link>
        <Link to="/sql-injection">SQLi</Link>
        <Link to="/broken-auth">Auth</Link>
        <Link to="/security-misconfiguration">
          Misconfig
        </Link>
        <Link to="/outdated-components">
          Components
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;