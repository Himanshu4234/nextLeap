import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
        <a href="/">
            <img src={logo} alt="NextLeap IT Solutions Logo" />
        </a>
        </div>
        <ul className="nav-links">
        <li><a href="/">Home</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/services">Services</a></li>
        </ul>
        <div className="nav-buttons">
          <a href="/contact">Contact Us</a>
        </div>
      </nav>
    </header>
  );
}
