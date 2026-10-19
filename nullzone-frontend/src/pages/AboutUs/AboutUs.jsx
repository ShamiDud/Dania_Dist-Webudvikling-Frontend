import './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section className="aboutus-section">
      <div className="aboutus-content">
        <h1>Welcome to Nullzone</h1>
        <p>Embark on an epic journey in the world of Nullzone. Explore, battle, and conquer!</p>
        <a href="/gameplay" className="cta-button">Play Now</a>
      </div>
    </section>
  );
}

export default AboutUs;