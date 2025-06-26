import { useCallback, useContext } from 'react';
import './index.css';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { TbBrandGithubFilled } from "react-icons/tb";
import themeContext from '../../context/themeContext';


const SocialIcons = () => {
    const {theme} = useContext(themeContext);

    const color_css = theme === 'dark' ? 'dark-theme' : '';

    const dark = theme === 'dark' ? 'dark-btn' : 'light-btn';

    const dark_koo = theme === 'light' ? 'Koo Black.png' : 'Koo Dark.png';

    return (
        <div className="icons-container">
            <button className={`btn ${dark}`}><FaFacebookF className={color_css}/></button>
            <button className={`btn ${dark}`}><ImInstagram  className={color_css}/></button>
            <button className={`btn ${dark}`}><FaTwitter  className={color_css}/></button>
            <button className={`btn ${dark}`}><TbBrandGithubFilled  className={color_css}/></button>
            <button className={`btn ${dark}`}><FaLinkedinIn  className={color_css}/></button>
            <button className={`btn ${dark}`}><FaTelegramPlane  className={color_css}/></button>
            <button className={`btn ${dark}`}><img src={dark_koo} alt="Koo" className="Koo-image"/></button>
        </div>
    )
}

export default SocialIcons;