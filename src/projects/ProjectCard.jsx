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
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: 'white',
              padding: '0.35rem 0.75rem',
              borderRadius: '0.5rem',
              fontSize: '0.85rem',
              fontWeight: '600'
            }}>
              {formatBudget(project.budget)}
            </span>
            <span style={{
              display: 'inline-block',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.5rem',
              fontSize: '0.7rem',
              fontWeight: '500',
              textTransform: 'uppercase',
              background: project.isActive ? 'rgba(16, 185, 129, 0.2)' : 'rgba(100, 116, 139, 0.2)',
              color: project.isActive ? '#10b981' : '#64748b'
            }}>
              {project.isActive ? '● Active' : '○ Inactive'}
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
          Edit Project
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
