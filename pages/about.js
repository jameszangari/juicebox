import SEO from "@/components/SEO";

function About() {
  const pageTitle = `about | ${process.env.siteTitle}`;

  return (
    <div className="flex flex-col mx-auto max-w-6xl">
      <SEO title={pageTitle} />
      <div className="w-3/6 flex justify-center m-auto">
        <img src="images/about.png" alt="" />
      </div>
      <div className="w-4/6 m-auto mt-16">
        <h1 className="text-4xl font-secondary font-semibold">About Us</h1>
        <p className="text-base font-primary mt-4 leading-relaxed">
          Juicebox exists as a reminder that we all grow old, but growing up is
          a choice. We started this brand in the greatest city on earth because
          New York embodies the spirit of endless possibility. Anything goes in
          NYC, and anything goes in the world of Juicebox. Do whatever you want,
          just don't let yourself grow up.
        </p>
      </div>
    </div>
  );
}

export default About;
