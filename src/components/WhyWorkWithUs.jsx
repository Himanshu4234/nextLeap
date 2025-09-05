export default function WhyWorkWithUs() {
    return (
      <section className="why-us">
        <div className="container">
          <h2>Why Work With NextLeap IT Services?</h2>
          <p className="intro">
            We’re not just an IT company — we’re your growth partner. From bringing your business
            online to scaling it with smart digital strategies, here’s why clients trust us.
          </p>
  
          <div className="why-grid">
            <div className="why-card">
              <div className="number">01</div>
              <h3>🚀 Business Growth Focus</h3>
              <p>
                We help businesses that are not yet online establish a strong digital presence
                and grow revenue with SEO, ads, and modern websites.
              </p>
            </div>
  
            <div className="why-card">
              <div className="number">02</div>
              <h3>🔍 SEO-First Approach</h3>
              <p>
                Our strategies ensure your business gets discovered on Google, bringing you
                more customers without high ad costs.
              </p>
            </div>
  
            <div className="why-card">
              <div className="number">03</div>
              <h3>🤝 End-to-End IT Partner</h3>
              <p>
                From website development to hosting, marketing, and 24/7 support —
                we provide complete IT solutions tailored to small & growing businesses.
              </p>
            </div>
          </div>
        </div>
  
        {/* CSS inside same file */}
        <style>{`
          .why-us {
            padding: 80px 20px;
            background: #f9f9f9;
            text-align: center;
          }
          .why-us h2 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            font-weight: 700;
            color: #222;
            text-aligh:center;
          }
          .why-us .intro {
            max-width: 750px;
            margin: 0 auto 50px;
            font-size: 1.2rem;
            color: #555;
          }
          .why-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
          }
          .why-card {
            background: #fff;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
            text-align: left;
          }
          .why-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          }
          .why-card .number {
            font-size: 3rem;
            font-weight: bold;
            color: #007bff;
            opacity: 0.15;
            position: absolute;
            top: 20px;
            right: 20px;
          }
          .why-card h3 {
            font-size: 1.4rem;
            margin-bottom: 15px;
            color: #007bff;
          }
          .why-card p {
            font-size: 1rem;
            color: #444;
          }
        `}</style>
      </section>
    );
  }
  