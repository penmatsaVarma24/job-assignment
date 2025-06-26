import './index.css';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { TbBrandGithubFilled } from "react-icons/tb";


const SocialIcons = () => {
    return (
        <div className="icons-container">
            <button className="btn"><FaFacebookF /></button>
            <button className="btn"><ImInstagram /></button>
            <button className="btn"><FaTwitter /></button>
            <button className="btn"><TbBrandGithubFilled /></button>
            <button className="btn"><FaLinkedinIn /></button>
            <button className="btn"><FaTelegramPlane /></button>
            <button className="btn"><img src="Koo Black.png" alt="Koo" className="Koo-image"/></button>
        </div>
    )
}

export default SocialIcons;