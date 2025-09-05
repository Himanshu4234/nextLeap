import { useEffect, useState } from "react";

export default function ServicesSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/content/services.json")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Failed to load services:", err));
  }, []);

  if (!data) {
    return (
      <section className="services">
        <div className="services-header">
          <h2>Loading services...</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="services">
      <div className="services-header">
        <h2>{data.heading}</h2>
        <p>{data.intro}</p>
      </div>

      <div className="services-list">
        {data.items.map((s, idx) => (
          <div key={idx} className="service-card">
            <h3>{s.icon} {s.title}</h3>
            <ul>
              {s.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    <style>{
      `.services {
        padding: 80px 20px;
        background: linear-gradient(135deg, #0f2027, #203a43, #2c5364); /* Dark gradient */
        color: #fff;
        text-align: center;
      }
      
      .services-header h2 {
        font-size: 2.5rem;
        margin-bottom: 10px;
        font-weight: 700;
        color: #fff;
      }
      
      .services-header p {
        max-width: 750px;
        margin: 0 auto 50px;
        font-size: 1.2rem;
        color: #ddd;
      }
      
      .services-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 30px;
      }
      
      .service-card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        padding: 30px;
        text-align: left;
        box-shadow: 0 6px 18px rgba(0,0,0,0.3);
        transition: transform 0.3s ease, background 0.3s ease;
        border: 1px solid rgba(255,255,255,0.1);
      }
      
      .service-card:hover {
        transform: translateY(-10px);
        background: rgba(255, 255, 255, 0.1);
      }
      
      .service-card h3 {
        font-size: 1.4rem;
        margin-bottom: 15px;
        color: #00d4ff;
        font-weight: 600;
      }
      
      .service-card ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .service-card li {
        font-size: 1rem;
        margin-bottom: 8px;
        color: #eee;
        padding-left: 1.5em;
        position: relative;
      }
      
      .service-card li::before {
        content: "✔";
        color: #00ff99;
        position: absolute;
        left: 0;
      }
      `}

    </style>
    </section>
  );
}
