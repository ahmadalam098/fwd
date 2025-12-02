import { Project } from './Project';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

function formatDescription(description) {
  return description.substring(0, 60) + '...';
}

function formatBudget(budget) {
  if (budget >= 1000000) {
    return `$${(budget / 1000000).toFixed(1)}M`;
  } else if (budget >= 1000) {
    return `$${(budget / 1000).toFixed(0)}K`;
  }
  return `$${budget.toLocaleString()}`;
}

function ProjectCard(props) {
  const { project, onEdit } = props;
  const handleEditClick = (projectBeingEdited) => {
    onEdit(projectBeingEdited);
  };
  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <Link to={'/projects/' + project.id}>
          <h5 className="strong">
            <strong>{project.name}</strong>
          </h5>
          <p>{formatDescription(project.description)}</p>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            marginTop: '0.75rem',
            marginBottom: '0.5rem'
          }}>
            <span className="budget-display" style={{
              background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
              color: 'white',
              padding: '0.4rem 0.85rem',
              borderRadius: '0.75rem',
              fontSize: '0.85rem',
              fontWeight: '600',
              boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)'
            }}>
              💎 {formatBudget(project.budget)}
            </span>
            <span style={{
              display: 'inline-block',
              padding: '0.3rem 0.6rem',
              borderRadius: '0.5rem',
              fontSize: '0.7rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              background: project.isActive ? 'rgba(6, 182, 212, 0.15)' : 'rgba(100, 116, 139, 0.2)',
              color: project.isActive ? '#22d3ee' : '#64748b',
              border: project.isActive ? '1px solid rgba(6, 182, 212, 0.3)' : 'none'
            }}>
              {project.isActive ? '● Live' : '○ Paused'}
            </span>
          </div>
        </Link>
        <button
          className="bordered"
          onClick={() => {
            handleEditClick(project);
          }}
        >
          <span className="icon-edit"></span>
          ⚙️ Edit
        </button>
      </section>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.instanceOf(Project).isRequired,
  onEdit: PropTypes.func.isRequired
};

export default ProjectCard;
