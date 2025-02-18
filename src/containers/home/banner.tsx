import { Menu } from "./menu-drawer";
import "./home-styles.css";

export const Banner = () => {

    return (

        <div className="banner-container">
            <div className="top-banner fade-in">
                <h1 className="welcome-message">The Traveling Tea Cup</h1>
                <h2 className="special-message">For Special Moments</h2>
                <Menu />
            </div>
        </div>
    );
};