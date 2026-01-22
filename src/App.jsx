import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import HomeBengali from "./Pages/Home/HomeBengali";
import Contact from "./Pages/Contact/Contact";
import Member from "./Pages/Member/Member";
import Admission from "./Pages/Admission/Admission";
import Recruitment from "./Pages/Recruitment/Recruitment";
import Donation from "./Pages/Donation/Donation";
import Query from "./Pages/Query/Query";
import Collaboration from "./Pages/Collaboration/Collaboration";
import Link from "./Pages/Link/Link";
import LinkBengali from "./Pages/Linkbengali/LinkBengali";
import ScrollToTop from "./ScrollToTop";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [language, setLanguage] = useState("en");

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={language === "en" ? <Home /> : <HomeBengali />}
        />
        <Route
          path="/link"
          element={language === "en" ? <Link /> : <LinkBengali />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/member" element={<Member />} />
        <Route path="/query" element={<Query />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/donation" element={<Donation />} />
      </Routes>
    </>
  );
};

export default App;
