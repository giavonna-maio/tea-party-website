import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Banner } from "./containers/home/banner.tsx";
import { About } from "./containers/about-page.tsx";
import { Home } from "./containers/home/home-page.tsx";
import { MenuOptions } from "./containers/menu-options-page.tsx";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="app-container">
        <Banner />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menuoptions" element={<MenuOptions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
