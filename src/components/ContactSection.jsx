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
            mode: "no-cors",   // 👈 fixes the 405 CORS issue
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
        <button type="submit" className="btn-dark submit-btn">Submit</button>
      </form>

      {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
    </section>
  );
}
