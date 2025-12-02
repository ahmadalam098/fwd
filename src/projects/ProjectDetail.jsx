import { Project } from './Project';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export default function ProjectDetail({ project }) {
  return (
    <div>
      {/* Back Button */}
      <div style={{ marginBottom: '1.5rem' }}>
        <Link to="/projects" className="button bordered" style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '0.5rem' 
        }}>
          ← Back to Projects
        </Link>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="card large" style={{ maxWidth: '600px' }}>
            <img
              className="rounded"
              src={project.imageUrl}
              alt={project.name}
              style={{ height: '350px' }}
            />
            <section className="section dark" style={{ padding: '2rem' }}>
              <h3 className="strong" style={{ 
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, var(--primary-light), var(--accent))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {project.name}
              </h3>
              
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.7',
                marginBottom: '1.5rem' 
              }}>
                {project.description}
              </p>

              {/* Info Grid */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                {/* Budget */}
                <div style={{
                  background: 'var(--bg-tertiary)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center'
                }}>
                  <div style={{ 
                    fontSize: '0.75rem', 
                    color: 'var(--text-muted)', 
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '0.25rem'
                  }}>
                    💰 Budget
                  </div>
                  <div style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    color: '#10b981'
                  }}>
                    ${project.budget.toLocaleString()}
                  </div>
                </div>

                {/* Contract Date */}
                <div style={{
                  background: 'var(--bg-tertiary)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center'
                }}>
                  <div style={{ 
                    fontSize: '0.75rem', 
                    color: 'var(--text-muted)', 
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '0.25rem'
                  }}>
                    📅 Signed On
                  </div>
                  <div style={{ 
                    fontSize: '1rem', 
                    fontWeight: '600', 
                    color: 'var(--text-primary)'
                  }}>
                    {project.contractSignedOn.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '2rem',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  background: project.isActive 
                    ? 'linear-gradient(135deg, #10b981, #059669)' 
                    : 'var(--bg-tertiary)',
                  color: project.isActive ? 'white' : 'var(--text-muted)',
                  boxShadow: project.isActive ? '0 4px 15px rgba(16, 185, 129, 0.3)' : 'none'
                }}>
                  {project.isActive ? '✓ Active Project' : '○ Inactive Project'}
                </span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectDetail.propTypes = {
  project: PropTypes.instanceOf(Project).isRequired,
};
