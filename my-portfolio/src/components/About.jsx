import heroBg from '../assets/hero-bg.svg';

export default function About() {
    return (
        <div className="about-hero-container">
            <div className="about-content">
                {/* Your about text, headings, etc. */}
                <h2>About Me</h2>
                <p>Some info about you...</p>
            </div>
            <div className="about-hero-svg">
                <img src={heroBg} alt="Hero" />
            </div>
        </div>
    );
} 