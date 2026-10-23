import { useState } from 'react';
import nullzoneLogo from '../assets/nullzone.png';
import discordLogo from '../assets/discord.webp';
import patreonLogo from '../assets/patreon.webp';
import itchLogo from '../assets/itchIO.webp';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header-container">
      <nav>
        <div className="nav-left">
          <a className="iconLink" href="https://www.nullzone-studios.com" target="_blank" rel="noreferrer">
            <div className="nullLogo">
              <img className="nullzone-logo" src={nullzoneLogo} alt="Nullzone Logo" />
            </div>
          </a>
          <a className="iconLink" href="https://discord.com" target="_blank" rel="noreferrer">
            <img src={discordLogo} alt="Discord Logo" />
          </a>
          <a className="iconLink" href="https://www.patreon.com/profile/creators?u=171615617" target="_blank" rel="noreferrer">
            <img src={patreonLogo} alt="Patreon Logo" />
          </a>
          <a className="iconLink" href="https://nullzone-studios.itch.io/" target="_blank" rel="noreferrer">
            <img src={itchLogo} alt="Itch.io Logo" />
          </a>
        </div>

        <button className="burger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Navigation">
          <span className={isOpen ? "line open" : "line"}></span>
          <span className={isOpen ? "line open" : "line"}></span>
          <span className={isOpen ? "line open" : "line"}></span>
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#heroSection" onClick={closeMenu}>Home</a></li>
          <li><a href="#gameplay" onClick={closeMenu}>Gameplay</a></li>
          <li><a href="#roadmap" onClick={closeMenu}>Roadmap</a></li>
          <li><a href="#aboutUs" onClick={closeMenu}>About Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;