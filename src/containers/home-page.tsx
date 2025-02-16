import "./home-styles.css"
export const Home = () => {

    return (

        <div className="home-container">
            <div className="top-banner fade-in">
                <h1 className="welcome-message">Welcome to the Traveling Tea Cup</h1>
                <h2 className="special-message">For Special Moments</h2>
            </div>
            <div className="icon-box">
                <div className="icons">
                    <i className="fas fa-map-marker-alt"></i>
                    <p className="icon-text">We come to you!</p>
                </div>
                <div className="icons">
                    <i className="fa-solid fa-phone"></i>
                    <p className="icon-text"><a href="tel:2156051033">215-605-1033</a></p>
                </div>
                <div className="icons">
                    <i className="fa-solid fa-envelope"></i>
                    
                    <p className="icon-text"><a href="mailto:travelingteacup@gmail.com" >travelingteacup@gmail.com</a></p>
                </div>

                
            </div>
        </div>

    );


};