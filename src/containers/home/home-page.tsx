import "./home-styles.css";
import "./icons.css";
import "../links.css";
import "./menu-drawer.css";

export const Home = () => {

    return (
            <div className="icon-box">
                <div className="icons">
                    <i className="fa-brands fa-instagram"></i>
                    <p className="icon-text"><a href="https://www.instagram.com/jesmall20/" target="_blank" rel="noopener noreferrer">thetravelingteacup</a></p>
                </div>
                <div className="icons">
                    <i className="fa-brands fa-facebook"></i>
                    <p className="icon-text"><a href="https://www.facebook.com/gina.small.75436" target="_blank" rel="noopener noreferrer">thetravelingteacup</a></p>
                </div>
                <div className="icons">
                    <i className="fa-solid fa-phone"></i>
                    <p className="icon-text"><a href="tel:2156051033">215-605-1033</a></p>
                </div>
                <div className="icons">
                    <i className="fa-solid fa-envelope"></i>
                    <p className="icon-text"><a href="mailto:travelingteacup@gmail.com" >travelingteacup@gmail.com</a></p>
                </div>
                <div className="icons">
                    <i className="fas fa-map-marker-alt"></i>
                    <p className="icon-text">We come to you!</p>
                </div>
            </div>

    );


};