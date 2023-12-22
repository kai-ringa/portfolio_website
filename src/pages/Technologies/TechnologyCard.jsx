import './TechnologyCard.css';

const TechnologyCard = ({ title, description }) => {
  return (
    <div className="technology-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TechnologyCard;
