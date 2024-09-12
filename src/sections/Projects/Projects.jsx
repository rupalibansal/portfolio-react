import styles from './Projects.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import ProjectCard from '../../common/ProjectCard';

const Projects = () => {
    return (
        <section id="projects" className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
             {/* Project 1 */}
            <ProjectCard src={viberr}
                link="https://github.com/rupalibansal/todosAPI"
                h3="Viberr"
                p="Streaming App" />
            
                {/* Project 2 */}
            <ProjectCard src={freshBurger}
                link="https://github.com/rupalibansal/eShop"
                h3="Eshop"
                    p="E-Commerce Platform for Men's Clothing" />

                {/* Project 3 */}
            <ProjectCard src={freshBurger}
                link="https://github.com/rupalibansal/googleBooksClone"
                h3="Google Books Clone"
                    p="Platform to Search Books" />
                
                {/* Project 4 */}
             <ProjectCard src={freshBurger}
                link="https://github.com/rupalibansal/morse_code_translator"
                h3="Morse Code Translator"
                    p="Morse Code Translator" />

                {/* Project 5 */}
            <ProjectCard src={freshBurger}
                link="https://github.com/rupalibansal/fakeOS"
                h3="Fake OS"
                    p="Fake OS MacBook" />      
                </div>
        </section>

  )
}

export default Projects