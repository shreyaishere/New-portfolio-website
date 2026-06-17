import { Helmet } from "react-helmet-async";

export default function SEO() {
  return (
    <Helmet>
      <title>
        Shreya Shukla | Full Stack Developer
      </title>

      <meta
        name="description"
        content="Full Stack Developer Portfolio"
      />

      <meta
        name="keywords"
        content="React Developer, MERN Developer, Full Stack Developer"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Shreya Shukla",
          jobTitle: "Full Stack Developer",
          email: "shuklashreya731@gmail.com"
        })}
      </script>
    </Helmet>
  );
}


// import { Helmet }
// from "react-helmet-async";

// export default function SEO(){

// return(

// <Helmet>

// <title>
// Shreya Shukla
// </title>

// <meta
// name="description"
// content="Full Stack Developer"
// />

// </Helmet>

// );

// }