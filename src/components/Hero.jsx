import heroVideo from "../assets/hero_video.mp4";

export default function Hero() {
  return (
    <section className="hero">
      {/* Video background */}
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Hero content */}
      <div className="hero-content">
        <h1>
          Take Your Business <span>Online</span> & Reach More <span>Customers</span> 🚀
        </h1>
        <p>
          At <b>NextLeap IT Services</b>, we help businesses without a digital
          presence step into the online world with websites, apps, and smart
          technology — so you can grow faster and expand your reach.
        </p>

        <div className="hero-buttons">
          <a href="/services" className="btn btn-primary">
            Get Started Today
          </a>
          <a href="/contact" className="btn btn-secondary">
            Talk to Us
          </a>
        </div>
      </div>

      {/* ✅ CSS inside same file */}
      <style>{`
        .hero {
          position: relative;
          height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          color: #fff;
          text-align: center;
        }

        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 850px;
          padding: 20px;
        }

        .hero-content h1 {
          font-size: 2.8rem;
          line-height: 1.3;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .hero-content h1 span {
          color: #4da6ff;
        }

        .hero-content p {
          font-size: 1.25rem;
          margin-bottom: 35px;
          color: #e0e0e0;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          justify-content: center;
        }

        .btn {
          padding: 14px 28px;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.3s ease-in-out;
        }

        .btn-primary {
          background: #007bff;
          color: #fff;
        }

        .btn-primary:hover {
          background: #0056b3;
        }

        .btn-secondary {
          background: #fff;
          color: #007bff;
        }

        .btn-secondary:hover {
          background: #f1f1f1;
        }

        /* ✅ Mobile responsiveness */
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2rem;
          }
          .hero-content p {
            font-size: 1rem;
          }
          .btn {
            font-size: 0.95rem;
            padding: 10px 20px;
          }
        }
      `}</style>
    </section>
  );
}
