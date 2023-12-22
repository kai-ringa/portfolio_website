import { projectsData } from './data';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h2>projects</h2>
      <div className="projects-cards">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
