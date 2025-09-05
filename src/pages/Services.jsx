import SEO from "../components/SEO";
export default function Services() {
  return (
    <>
    <SEO
      title="IT Services by NextLeap | Cloud, Consulting & Support"
      description="Explore NextLeap's IT services including cloud computing, IT consulting, cybersecurity, and reliable business IT support."
      keywords="IT services NextLeap, cloud IT, cybersecurity, IT consulting, business IT solutions"
      url={`${window.location.origin}/services`}
      image={`${window.location.origin}/images/services-og.jpg`}
    />
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>
            At NextLeap IT Services, we provide scalable, secure, and
            innovative IT solutions that help businesses thrive in the
            digital world. 🚀
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <h2>What We Offer</h2>
        <p className="section-subtitle">
          From building modern websites to driving growth through digital
          marketing, our services are designed to give your business a strong
          online presence.
        </p>

        <div className="service-grid">
          <div className="service-card">
            <h3>🌐 Website Design & Development</h3>
            <p>
              Build responsive websites, e-commerce platforms, landing pages,
              and CMS tailored to your brand.
            </p>
          </div>

          <div className="service-card">
            <h3>🛠 Technical Support & Maintenance</h3>
            <p>
              24/7 assistance for domains, hosting, backups, and ongoing
              website security.
            </p>
          </div>

          <div className="service-card">
            <h3>📢 Digital Advertising & Lead Generation</h3>
            <p>
              Run powerful ad campaigns on Google, Facebook, and Instagram to
              drive targeted traffic and leads.
            </p>
          </div>

          <div className="service-card">
            <h3>🎯 Consulting & Training</h3>
            <p>
              Strategic consulting, IT training, and growth plans to empower
              your team and business.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Let’s Build Your Digital Future</h2>
        <p>
          Partner with NextLeap IT Services today and grow your business with
          our trusted IT solutions.
        </p>
        <a class="connect-btn" href="/contact" data-discover="true"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path></svg>Let’s Connect<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></a>
      </section>

      {/* CSS */}
      <style>{`
        .services-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          line-height: 1.6;
        }

        /* Hero Section */
        .hero {
          color: white;
          text-align: center;
          justify-content:center;
          padding: 80px 20px;
          background-image: linear-gradient(135deg, #0f2027, #203a43, #2c5364)
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

        /* Services Grid */
        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }
        .service-card {
          background: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.08);
          text-align: left;
          transition: all 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.12);
        }
        .service-card h3 {
          font-size: 1.3rem;
          margin-bottom: 15px;
          color: #4f46e5;
        }
        .service-card p {
          font-size: 1rem;
          color: #374151;
        }

        /* CTA */
        .cta {
          text-align: center;
          margin-top: 60px;
          padding: 4rem 2rem;
          background-image: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          color: white;
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
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          font-size: 1.1rem;
          font-weight: 600;
          background: linear-gradient(to right, #059669, #2563eb);
          color: #fff;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease-in-out;
        }
        .cta-btn:hover {
          background: #f3f4f6;
        }
        .connect-btn {
          margin-top: 2rem;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          font-size: 1.1rem;
          font-weight: 600;
          background: linear-gradient(to right, #059669, #2563eb);
          color: #fff;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease-in-out;
        }

      `}</style>
    </div>
    </>
  );
}
