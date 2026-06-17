import { useState, useEffect } from "react";

import Cursor from "./components/Cursor/Cursor";
import GradientMesh from "./components/GradientMesh/GradientMesh";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";

import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import Loader from "./components/Loader/Loader";
import PageTransition from "./components/PageTransition";
import SEO from "./SEO";
// import GithubStats from "./components/GithubStats/GithubStats";

function App() {

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <PageTransition>

      <SEO />

      <Cursor />

      <ScrollProgress />

      <GradientMesh />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Education />

      <Certifications />

      <Contact />

      <Footer />

    </PageTransition>
  );
}

export default App;


// import Cursor from "./components/Cursor/Cursor";
// import GradientMesh from "./components/GradientMesh/GradientMesh";
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import ScrollProgress from "./components/ScrollProgress/ScrollProgress";

// import About from "./components/About/About";
// import Skills from "./components/Skills/Skills";
// import Experience from "./components/Experience/Experience";
// import Projects from "./components/Projects/Projects";
// import Education from "./components/Education/Education";
// import Certifications from "./components/Certifications/Certifications";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";

// function App() {
//   return (
//     <>
//       <PageTransition>
//         <SEO />
//         <Cursor />

//         <ScrollProgress />
//         <GradientMesh />

//         <Navbar />

//         <Hero />

//         <About />
//         <Skills />
//         <Experience />
//         <Projects />
//         <Education />
//         <Certifications />
//         <GithubStats />
//         <Contact />
//         <Footer />
//       </PageTransition>
//     </>
//   );
// }

// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   setTimeout(() => {
//     setLoading(false);
//   }, 2500);
// }, []);

// if (loading) {
//   return <Loader />;
// }

// export default App;
