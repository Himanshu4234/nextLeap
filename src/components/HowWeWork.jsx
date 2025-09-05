import { FaSearch, FaLaptopCode, FaGlobe, FaRocket } from "react-icons/fa";

export default function HowWeWork() {
  return (
    <section className="how-we-work">
      <div className="container">
        <h2>How NextLeap Works to Grow Your Business</h2>
        <p className="intro">
          A clear roadmap that takes your business from offline to a thriving online presence.
        </p>

        <div className="timeline">
          <div className="timeline-step">
            <div className="icon-circle"><FaSearch /></div>
            <div className="content">
              <h3>Step 1: Understanding Your Business</h3>
              <p>
                We connect with you to analyze your goals, challenges, and opportunities to create a
                tailored digital roadmap.
              </p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="icon-circle"><FaLaptopCode /></div>
            <div className="content">
              <h3>Step 2: Building Your Online Presence</h3>
              <p>
                From websites to e-commerce stores, we craft a modern and secure online identity that
                represents your brand.
              </p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="icon-circle"><FaGlobe /></div>
            <div className="content">
              <h3>Step 3: Making You Visible Worldwide</h3>
              <p>
                Using SEO, ads, and social campaigns, we make sure your business is discoverable and
                trusted globally.
              </p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="icon-circle"><FaRocket /></div>
            <div className="content">
              <h3>Step 4: Growth & Continuous Support</h3>
              <p>
                We provide ongoing support, performance tracking, and optimization to fuel consistent
                business growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .how-we-work {
          background: #f9fafc;
          padding: 80px 20px;
        }
        .how-we-work h2 {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: #222;
        }
        .how-we-work .intro {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
          font-size: 1.1rem;
          color: #555;
        }
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding-left: 20px;
          border-left: 3px solid #007bff;
        }
        .timeline-step {
          position: relative;
          margin-bottom: 50px;
          padding-left: 40px;
        }
        .icon-circle {
          position: absolute;
          left: -3rem;
            top: -6px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #5992d6;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1.4rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }
        .timeline-step h3 {
          font-size: 1.3rem;
          margin-bottom: 10px;
          color: #222;
        }
        .timeline-step p {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
