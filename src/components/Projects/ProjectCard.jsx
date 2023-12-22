import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const ProjectCard = ({ project }) => {
  const { title, description, imageUrl, githubLink, liveDemoLink } = project;

  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub /> Github
          </a>
          <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
