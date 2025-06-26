import './index.css';

import Navbar from '../Navbar';
import SocialIcons from '../SocialIcons';
import { useContext } from 'react';
import themeContext from '../../context/themeContext';

const Home = () => {
    const {theme} = useContext(themeContext);

    const color_css = theme === 'dark' ? 'dark-theme' : '';

    return (
        <div className={`main-container ${color_css}`}>
            <Navbar />
            <div className="home-container">
                <div className={`home-icons-container ${color_css}`}>
                    <SocialIcons />
                </div>
                <div className="details-container">
                    <button className="hello-btn">Hello!</button>
                    <h3 className="name-item">I'm <span className="span-item">Anish</span><img src="Wave.svg" className="wave-image" alt="hand-wave"/></h3>
                    <p className="para-item">UI/UX Designer, Front-End Developer & Thinker. Based in India</p>
                    <div className="btn-container">
                        <button className="cv-btn">Download CV</button>
                        <button className="get-btn">Get In Touch</button>
                    </div>
                </div>
                <div className="image-container">
                    <div className="image-item">
                        <img src="HeroImage.png" className="profile-image" alt="profile-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;