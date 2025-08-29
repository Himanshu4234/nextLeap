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
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
