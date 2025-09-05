import { useState, useEffect, useRef } from "react";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const [status, setStatus] = useState("");

  // 👇 Animation on scroll
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("visible");
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // 👇 Form submit handler (Google Sheets)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      business: e.target.business.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwEVcP04ZaATqAnQ-8owYo657OBGs1prlEosbehQjwmwWIWmyRRNNq9hLXhhvTW6jS0/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setStatus("✅ Submitted successfully!");
      e.target.reset();
    } catch (err) {
      setStatus("⚠️ Error submitting form.");
    }
  };

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="text" name="business" placeholder="Business Name" required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Email Address" required />
        </div>
        <div className="form-group">
          <input type="tel" name="phone" placeholder="Phone Number" required />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {status && <p className="status-message">{status}</p>}

      {/* CSS Styling */}
      <style>{`
        .contact-section {
          padding: 100px 20px;
          background: linear-gradient(135deg, #f8fafc, #eef2ff);
          text-align: center;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .contact-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .contact-section h2 {
          font-size: 2.5rem;
          margin-bottom: 40px;
          font-weight: 700;
          color: #1e293b;
        }
        .contact-form {
          max-width: 600px;
          margin: 0 auto;
          padding: 40px;
          background: #ffffff;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }
        .form-group {
          margin-bottom: 20px;
        }
        input {
          width: 100%;
          padding: 14px 18px;
          border: 1px solid #d1d5db;
          border-radius: 12px;
          font-size: 1rem;
          outline: none;
          transition: border 0.3s ease, box-shadow 0.3s ease;
        }
        input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 8px rgba(99,102,241,0.4);
        }
        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: white;
          padding: 14px;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(99,102,241,0.3);
        }
        .status-message {
          margin-top: 20px;
          font-weight: 500;
          color: #16a34a;
        }
      `}</style>
    </section>
  );
}
