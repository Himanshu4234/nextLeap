import AboutSection from "../components/AboutSection";

export default function About() {
  return (
    <div className="about-page font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-600 to-blue-600 text-white py-20 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          About NextLeap IT Services
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Empowering businesses with cutting-edge technology solutions, tailored to your success 🚀
        </p>
      </section>

      {/* About Section */}
      <div className="p-8 md:p-16 bg-white">
        <AboutSection />
      </div>

      {/* Mission / Vision / Values */}
      <section className="bg-gray-50 py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          Our Core Beliefs
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {[
            {
              title: "🌍 Our Mission",
              desc: "To deliver scalable and reliable IT solutions that help businesses thrive in a digital-first world.",
            },
            {
              title: "🚀 Our Vision",
              desc: "To be the most trusted IT partner for businesses worldwide, leading innovation and driving growth.",
            },
            {
              title: "💡 Our Values",
              desc: "Innovation, integrity, and customer success are at the heart of everything we do.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-gray-100 to-gray-200">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-800">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            { name: "John Doe", role: "Founder & CEO" },
            { name: "Jane Smith", role: "CTO" },
            { name: "David Lee", role: "Head of Operations" },
          ].map((member, i) => (
            <div
              key={i}
              className="p-8 border rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 bg-white"
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-6 border-4 border-indigo-600 shadow-lg"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Let’s Build Something Amazing Together
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-lg opacity-90 leading-relaxed">
          Ready to take your business to the next level? Partner with NextLeap IT Services today and 
          leverage our expertise to unlock new opportunities.
        </p>
        <a
          href="/contact"
          className="inline-block mt-8 bg-white text-indigo-700 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition-transform transform hover:-translate-y-1"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
