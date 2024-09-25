import { navLinks } from "./types/navLinks";
export default function Header() {
  return (
    <header>
      <div className="navbar">
        <h1>Welcome to TODO list</h1>
        <nav>
          <ul className="navbarLinks">
            {navLinks.map((link, index) => {
              return <li key={index}>{link}</li>;
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
