import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="NextLeap IT Solutions | Reliable IT Services"
        description="NextLeap provides expert IT services, cloud solutions, and business IT support to help your company grow faster."
        keywords="NextLeap IT solutions, IT services, IT consulting, cloud IT, business IT support"
        url="https://yourdomain.com/"
        image="https://yourdomain.com/images/home-og.jpg"
      />
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold">
          Welcome to NextLeap IT Services 🚀
        </h1>
      </div>
    </>
  );
}
