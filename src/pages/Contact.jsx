import ContactSection from "../components/ContactSection";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <>
    <SEO
  title="Contact NextLeap IT Solutions | Get in Touch"
  description="Contact NextLeap IT Solutions today for professional IT services, support, and solutions tailored to your business needs."
  keywords="Contact NextLeap IT solutions, IT support, IT services help"
  url={`${window.location.origin}/contact`}
  image={`${window.location.origin}/images/contact-og.jpg`}
/>
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Get in Touch</h1>
        <p>
          Have questions? We’d love to hear from you. Connect with NextLeap IT
          Services today.
        </p>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info">
        <div className="info-card">
          <div className="icon">📧</div>
          <h3>Email Us</h3>
          <a href="mailto:nextleap.itservice@gmail.com">
            nextleap.itservice@gmail.com
          </a>
        </div>

        <div className="info-card">
          <div className="icon">📞</div>
          <h3>Call Us</h3>
          <div className="contact-numberds">
          <p>
            <a href="tel:+919654801167">+91 96548 01167</a>
          </p>
          <p>
            <a href="tel:+918447494471">+91 84474 94471</a>
          </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactSection />

      {/* CSS */}
      <style>{`
        .contact-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          line-height: 1.6;
        }
        .contact-numberds {
          display: flex;
          justify-content: center;
          gap: 1rem;
      }
        /* Hero Section */
        .hero {
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          color: white;
          text-align: center;
          padding: 100px 20px 80px;
          min-height:fit-content;
          flex-direction: column;
        }
        .hero h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 15px;
        }
        .hero p {
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto;
          opacity: 0.9;
        }

        /* Contact Info */
        .contact-info {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          padding: 60px;
        }
        .info-card {
          flex: 1;
          background: linear-gradient(135deg, #f0fdf4, #e0f2fe);
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .info-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }
        .info-card .icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }
        .info-card h3 {
          font-size: 1.3rem;
          margin-bottom: 10px;
          color: #1e293b;
        }
        .info-card a {
          color: #2563eb;
          font-weight: 500;
          text-decoration: none;
        }
        .info-card a:hover {
          color: #0ea5e9;
        }

        /* Contact Form (applies to ContactSection) */
        .contact-form {
          padding: 80px 20px;
          background: #f1f5f9;
          text-align: center;
        }
        .contact-form h2 {
          font-size: 2rem;
          margin-bottom: 30px;
          color: #1f2937;
        }
        form {
          max-width: 600px;
          margin: 0 auto;
        }
        .form-group {
          margin-bottom: 20px;
        }
        input, textarea {
          width: 100%;
          padding: 15px;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          font-size: 1rem;
          outline: none;
          transition: border 0.3s ease, box-shadow 0.3s ease;
        }
        input:focus, textarea:focus {
          border-color: #0ea5e9;
          box-shadow: 0 0 8px rgba(14,165,233,0.4);
        }
        .submit-btn {
          background: linear-gradient(135deg, #2563eb, #0ea5e9);
          color: white;
          padding: 14px 35px;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
    </>
  );
}
