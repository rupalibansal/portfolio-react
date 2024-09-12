import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png"
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
const Hero = () => {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;

    return (
        <section id="hero" className={ styles.container}>
            <div className={ styles.colorModeContainer }>
           
                <img className={styles.hero} src={heroImg} alt="Profile picture"></img>
                <img className={ styles.colorMode} src={ themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
            </div>
            <div className={styles.info}>
                <h1>
                    Rupali
                    <br />
                    Bansal
                </h1>
                <h2>Software Engineer</h2>
                <span>
                    <a href="https://github.com/rupalibansal" target="_blank">
                        <img src={githubIcon} alt="git hub icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/rupalibansal11/" target="_blank">
                        <img src={linkedInIcon} alt="linkedIn icon" />
                    </a>
                </span>
                <p className={ styles.description}>
                With a Passion for Developing Seamless and Innovative Solutions.   
                </p>
                <a href={CV} download>
                    <button className="hover">Resume</button>
                </a>
            </div>
      </section>
  
  )
}

export default Hero