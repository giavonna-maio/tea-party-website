import "./menu-drawer.css"
import { useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { Home } from "./home-page";
import { About } from "../about-page";

export const Menu = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen((prev) => !prev);
    }

    return (
        <>
            <button className="menu-toggle" onClick={toggleDrawer}>
                <i className="fas fa-bars" style={{ fontSize: "2rem", cursor: "pointer" }}></i>
            </button>
            <BrowserRouter>
                <div className={`drawer ${drawerOpen ? "open" : ""}`}>
                    <button className="close-btn" onClick={toggleDrawer}>x</button>
                    <nav className="drawer-nav">
                        <ul>
                            <li>
                                <Link to="/" onClick={toggleDrawer}>Home</Link>
                            </li>
                            <li>
                                <a href="#menu" onClick={toggleDrawer}>
                                    Menu Options
                                </a>
                            </li>
                            <li>
                                <a href="#menu" onClick={toggleDrawer}>
                                    Book an Event
                                </a>
                            </li>
                            <li>
                                <Link to="/about" onClick={toggleDrawer}>About</Link>
                            </li>
                            <li>
                                <a href="#about" onClick={toggleDrawer}>
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </nav>

                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>

    );
};