import AboutSection from "../components/ConnectWithUs";
import SEO from "../components/SEO";

export default function About() {
  return (
    <>
      <SEO
        title="About NextLeap IT Solutions | Trusted IT Partner"
        description="Discover NextLeap IT Solutions – a trusted IT partner delivering secure, scalable, and innovative IT services to help businesses grow globally."
        keywords="About NextLeap IT solutions, IT company, IT partner, business IT services, cloud IT"
        url={`${window.location.origin}/about`}
        image={`${window.location.origin}/images/about-og.jpg`}
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About NextLeap IT Solutions",
          "description": "NextLeap IT Solutions is a trusted IT partner delivering secure, scalable, and innovative IT services.",
          "url": `${window.location.origin}/about`,
          "publisher": {
            "@type": "Organization",
            "name": "NextLeap IT Solutions",
            "logo": {
              "@type": "ImageObject",
              "url": `${window.location.origin}/logo.png`
            }
          }
        }}
      />
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>About NextLeap IT Services</h1>
          <p>
            Helping businesses take the leap into the digital world —
            delivering scalable, secure, and innovative IT solutions to grow
            globally 🌍🚀
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <h2>Why Choose NextLeap IT Services?</h2>
        <p className="section-subtitle">
          We are your trusted IT partner. Our mission is to simplify
          technology and empower businesses with scalable and secure digital
          solutions. From web development to digital marketing and cloud IT, we
          help your business thrive in today’s digital world.
        </p>

        <div className="card-container">
          <div className="card">
            <h3>⚡ Innovation</h3>
            <p>
              Modern, cutting-edge solutions to keep your business
              competitive.
            </p>
          </div>
          <div className="card">
            <h3>🔒 Security</h3>
            <p>
              Robust systems to safeguard your business and customer data.
            </p>
          </div>
          <div className="card">
            <h3>🌍 Scalability</h3>
            <p>
              Flexible solutions that grow as your business expands.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section alt-bg">
        <h2>What We Do</h2>
        <div className="service-container">
          <div className="service-card">
            <h3>🌐 Website Design & Development</h3>
            <p>
              Modern websites, e-commerce stores, landing pages, and CMS
              tailored to your brand.
            </p>
          </div>
          <div className="service-card">
            <h3>🛠 Technical Support & Maintenance</h3>
            <p>
              24/7 support for hosting, domains, email setup, backups, and
              security monitoring.
            </p>
          </div>
          <div className="service-card">
            <h3>📢 Digital Advertising & Lead Generation</h3>
            <p>
              Targeted ad campaigns on Google, Facebook, and Instagram to
              drive sales.
            </p>
          </div>
          <div className="service-card">
            <h3>🎯 Consulting & Training</h3>
            <p>
              Digital strategies, team training, and IT skill development for
              business growth.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <AboutSection/>

      {/* CSS */}
      <style>{`
        .about-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          line-height: 1.6;
        }

        /* Hero Section */
        .hero {
          background-image: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          color: white;
          text-align: center;
          padding: 80px 20px;
          JUSTIFY-CONTENT: center;
        }
        .hero h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 20px;
        }
        .hero p {
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Section */
        .section {
          padding: 80px 20px;
          text-align: center;
        }
        .section h2 {
          font-size: 2.2rem;
          margin-bottom: 20px;
          font-weight: 700;
          color: #1f2937;
        }
        .section-subtitle {
          max-width: 700px;
          margin: 0 auto 50px;
          color: #6b7280;
          font-size: 1.1rem;
        }

        /* Cards */
        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 40px;
        }
        .card {
          background: white;
          border-radius: 15px;
          padding: 30px 20px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.12);
        }
        .card h3 {
          font-size: 1.4rem;
          margin-bottom: 15px;
          color: #4f46e5;
        }

        /* Services */
        .alt-bg {
          background: #f9fafb;
        }
        .service-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          margin-top: 40px;
        }
        .service-card {
          background: white;
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          text-align: left;
          transition: all 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }
        .service-card h3 {
          color: #9333ea;
          margin-bottom: 12px;
        }

        /* CTA */
        .cta {
          background: linear-gradient(135deg, #4f46e5, #3b82f6);
          color: white;
          text-align: center;
          padding: 70px 20px;
        }
        .cta h2 {
          font-size: 2rem;
          margin-bottom: 20px;
        }
        .cta p {
          max-width: 600px;
          margin: 0 auto 30px;
          font-size: 1.1rem;
        }
        .cta-btn {
          display: inline-block;
          background: white;
          color: #4f46e5;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .cta-btn:hover {
          background: #f3f4f6;
        }
        .hero-content{
          max-width: 100% ;
          WIDTH: 80% ;
          MIN-WIDTH: 100%;
        }
      `}</style>
    </div>
    </>
  );
}
