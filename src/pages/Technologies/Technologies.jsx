import TechnologyCard from './TechnologyCard';
import './Technologies.css';

const Technologies = () => {
  return (
    <div className="technologies-section" id="technologies">
      <h2>Technologies</h2>
      <div className="technology-cards">
        <TechnologyCard
          title="Front-end"
          description="HTML, CSS, JavaScript, ReactJs"
        />
        <TechnologyCard
          title="Back-end"
          description="NodeJS (Express), Python (Flask, Django), PHP"
        />
        <TechnologyCard title="Databases" description="SQL, MongoDB" />
        <TechnologyCard
          title="Mobile-Development"
          description="Dart (Flutter)"
        />
      </div>
    </div>
  );
};

export default Technologies;
