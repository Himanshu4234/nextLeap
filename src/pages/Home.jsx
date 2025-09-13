import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="NextLeap IT Solutions | Reliable IT Services"
        description="NextLeap provides expert IT services, cloud solutions, and business IT support to help your company grow faster."
        keywords="NextLeap IT solutions, IT services, IT consulting, cloud IT, business IT support"
        url={`${window.location.origin}`}
        image={`${window.location.origin}/images/home-og.png`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NextLeap IT Solutions",
          "url": `${window.location.origin}`,
          "logo": {
            "@type": "ImageObject",
            "url": `${window.location.origin}/logo.png`
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-96548011678",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["English"]
          },
          "sameAs": [
            "https://www.linkedin.com/in/nextleap-it-solutions-118707380",
            "https://twitter.com/nextleapit",
            "https://facebook.com/nextleapit"
          ],
          "department": [
            {
              "@type": "Organization",
              "name": "Cloud Services"
            },
            {
              "@type": "Organization",
              "name": "IT Consulting"
            },
            {
              "@type": "Organization",
              "name": "Cybersecurity"
            }
          ]
        }}
      />
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold">
          Welcome to NextLeap IT Services 🚀
        </h1>
      </div>
    </>
  );
}
