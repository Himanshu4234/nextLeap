import hero from "../assets/hero.jpg";
export default function Hero() {
    return (
      <section className="hero">
        <div className="hero-content">
          <h1>Innovative IT Solutions for Your Business 🚀</h1>
          <p>
            At <b>NextLeap IT Services</b>, we help businesses grow with smart
            technology, scalable solutions, and creative innovation.
          </p>
          <a href="/services" className="btn-primary">Get Started</a>
        </div>
  
        <div className="hero-image">
          <img src={hero} alt="NextLeap IT Services" />
        </div>
      </section>
    );
  }
  