import nullzoneLogo from '../assets/nullzone.png';
import discordLogo from '../assets/discord.webp';
import patreonLogo from '../assets/patreon.webp';
import itchLogo from '../assets/itchIO.webp';
import './Navigation.css';

const Navigation = () => {
  return (
    <header className="header-container">
      <nav>
        <div>
            <div className="nullLogo">
                <img className="nullzone-logo" src={nullzoneLogo} alt="Nullzone Logo" />
            </div>
            <img src={discordLogo} alt="Discord Logo" />
            <img src={patreonLogo} alt="Patreon Logo" />
            <img src={itchLogo} alt="Itch.io Logo" />
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Roadmap</a></li>
          <li><a href="/contact">Gameplay</a></li>
          <li><a href="/contact">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;