import { FaEnvelopeOpenText, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import connectUs from "../assets/connect-world.png";

export default function ConnectSection() {
  return (
    <section className="connect-section">
      <div className="connect-container">
        
        {/* Left Content */}
        <div className="connect-text">
          <h2>Ready to Take Your Business Online?</h2>
          <p>
            At <span className="highlight">NextLeap IT Solutions</span>, we help businesses 
            like yours grow smarter, faster, and worldwide through modern digital transformation. 
            Let’s start your journey today!
          </p>

          <Link to="/contact" className="connect-btn">
            <FaEnvelopeOpenText className="icon" />
            Let’s Connect
            <FaArrowRight className="arrow" />
          </Link>
        </div>

        {/* Right Image */}
        <div className="connect-image">
          <img src={connectUs} alt="Global Connection" />
        </div>
      </div>

      {/* Inline CSS */}
      <style>{`
        .connect-section {
          background: linear-gradient(135deg, #f0fdf4, #e0f2fe);
          padding: 4rem 2rem;
        }

        .connect-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
          text-align: center;
        }

        .connect-text h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1e293b;
        }

        .connect-text p {
          margin-top: 1rem;
          font-size: 1.1rem;
          color: #475569;
          line-height: 1.6;
        }

        .connect-text .highlight {
          color: #059669;
          font-weight: 600;
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

        .connect-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .connect-btn .icon {
          font-size: 1.4rem;
        }

        .connect-btn .arrow {
          font-size: 1rem;
          transition: transform 0.3s ease-in-out;
        }

        .connect-btn:hover .arrow {
          transform: translateX(5px);
        }

        .connect-image img {
          width: 300px;
          max-width: 100%;
          border-radius: 20px;
          box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.15);
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Responsive */
        @media (min-width: 768px) {
          .connect-container {
            flex-direction: row;
            text-align: left;
            justify-content: space-between;
          }

          .connect-text {
            flex: 1;
          }

          .connect-image {
            flex: 1;
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
