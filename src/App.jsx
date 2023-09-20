import { Home } from "./components/Home/Home";
import { About } from "./components/About/about";
import { Services } from "./components/Services/services";
import { Contact } from "./components/Contact/contact";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import UsePageDataHook from "./customHooks/usePageDataHook";
import { Blogs } from "./components/Blogs/blogs";
import Footers from "./components/Footers/footers";
import { Register } from "./components/Registers/register";
import NewNavBar from "./components/components/newNavBar/newNavBar";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const { landingPageData } = UsePageDataHook();

  return (
    <HashRouter>
      <NewNavBar />
      <Routes>
        <Route path="/" element={<Home data={landingPageData.Home} />} />
        <Route path="/home" element={<Home data={landingPageData.Home} />} />
        <Route path="/about" element={<About data={landingPageData.About} />} />
        <Route
          path="/services"
          element={<Services data={landingPageData.Services} />}
        />
        <Route path="/blog" element={<Blogs />} />
        <Route
          path="/contact"
          element={<Contact data={landingPageData.Contact} />}
        />
        <Route
          path="/register"
          element={<Register data={landingPageData.Contact} />}
        />
      </Routes>
      <Footers data={landingPageData} />
    </HashRouter>
  );
};

export default App;
