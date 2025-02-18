import "./menu-drawer.css"
import { useState } from "react";
import { Link } from "react-router-dom";


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
            <div className={`drawer ${drawerOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={toggleDrawer}>x</button>
                <nav className="drawer-nav">
                    <ul>
                        <li>
                            <Link to="/" onClick={toggleDrawer}>Home</Link>
                        </li>
                        <li>
                            <Link to="/menuoptions" onClick={toggleDrawer}>Menu Options</Link>
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
        </>

    );
};