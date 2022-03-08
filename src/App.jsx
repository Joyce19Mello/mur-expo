import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { AboutExpo } from "./components/aboutExpo";
import { AboutMUR } from "./components/aboutMUR";
import { Sponsor } from "./components/sponsor";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Registrations } from "./components/registrations";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <AboutExpo data={landingPageData.Features} />
      <AboutMUR data={landingPageData.About} />
      <Testimonials data={landingPageData.Testimonials} />
      <Registrations data={landingPageData.Infos} />
      <Sponsor data={landingPageData.sponsor} />
      <Gallery data={landingPageData.Gallery}/>
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
