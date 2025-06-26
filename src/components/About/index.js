import './index.css';

import Navbar from '../Navbar';
import SocialIcons from '../SocialIcons';

const About = () => {
    return (
        <div className="main-container">
            <Navbar />
            <div className="about-container">
                <div className="hand-container">
                    <div className="hand-image-container">
                        <img src="Rectangle.png" className="hand-image" />
                    </div>
                    <SocialIcons />
                </div>
                <div className="about-desc-container">
                    <h3 className="about-heading">T<span className="span-about-item">his is it ;)</span> </h3>
                    <p className="para-about-item">
                        Anish Kr. Sinha is an Indian UI/UX Designer & Front End Developer with a passion for 
                        designing beautiful and fuctional user experiences. Typically, he’s Driven & permanently 
                        Curious. He’s obsessed with designing things and even more obsessed with designing cool & 
                        clean stuff for the web and mobile. He has been in the business of creating since he hung 
                        his first painting on the wall when he was 11.
                        He holds a bachelor degree in Computer Applications. During his graduation, he has been 
                        actively involved in the web design community for the last 3 years. he has designed websites 
                        for small businesses, events, nonprofits and more. Currently he’s based in Bihar, India. Where 
                        he’s working as an independent creative. 
                        <br/>
                        <br/>
                        His interests, however, extend beyond the web and he loves helping people with branding and 
                        print design. He even loves designing 3D floor plan.
                        <br/>
                        <br/>
                        When he’s not designing, he’s probably hanging out with his girlfriend, watching series, 
                        sketching or messing around on something inspired by YouTube tutorials.
                    </p>
                    <div className="images-container">
                        <img src="Vector1.png" className="yellow-image" />
                        <img src="Vector2.png" className="yellow-image" />
                    </div>
                </div>
                <div className="image-about-container"></div>
            </div>
        </div>
    )
}

export default About;