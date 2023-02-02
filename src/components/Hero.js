import "../App.css";

const Hero = ({ text, backdrop }) => {
  return (
    <header className="p-5 mb-2 bg-dark text-white hero-container">
      <h1 className="hero-text">{text}</h1>
      {backdrop&&
            <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>
      }
    </header>
  );
};

export default Hero;
