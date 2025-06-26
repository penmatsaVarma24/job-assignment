import { useContext } from 'react';
import './index.css';

import { Link } from 'react-router-dom';
import themeContext from '../../context/themeContext';

const Navbar = () => {
    const {theme, setTheme} = useContext(themeContext);

    const themeChange = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    const theme_image = theme === 'light' ? 'Moon.png' : 'Sun.png';

    return (
        <div className="navbar-container">
            <div className="logo-container">
                <img src="Logo.png" className="logo-image" alt="logo" />
                <p className="logo-name">ANISH KUMAR SINHA</p>
            </div>
            <div className="routes-container">
                <Link to="/" className="link-item">
                    <p className="route">Home</p>
                </Link>
                <Link to="/about" className="link-item">
                    <p className="route">About</p>
                </Link>
                <p className="route">Resume</p>
                <p className="route">Skills</p>
                <p className="route">Project</p>
                <p className="route">Contact</p>
                <button className="theme-button" onClick={themeChange}><img src={theme_image} className="moon-image" /></button>
            </div>
        </div>
    )
}

export default Navbar;