import { useState, useEffect } from 'react';
import { projectAPI } from './projectAPI';
import { Project } from './Project';
import ProjectList from './ProjectList';

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      try {
        const data = await projectAPI.get(currentPage);
        setError(null);
        if (currentPage === 1) {
          setProjects(data);
        } else {
          setProjects((projects) => [...projects, ...data]);
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, [currentPage]);

  const saveProject = (project) => {
    projectAPI
      .put(project)
      .then((updatedProject) => {
        let updatedProjects = projects.map((p) => {
          return p.id === project.id ? new Project(updatedProject) : p;
        });
        setProjects(updatedProjects);
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  const handleMoreClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '1.5rem'
      }}>
        <div>
          <h1 style={{ marginBottom: '0.25rem' }}>📁 Projects</h1>
          <p style={{ color: 'var(--text-muted)', margin: 0 }}>
            Manage and track all your projects in one place
          </p>
        </div>
        <div style={{ 
          background: 'var(--bg-card)', 
          padding: '0.75rem 1.25rem', 
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-color)'
        }}>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Total Projects</span>
          <div style={{ 
            fontSize: '1.5rem', 
            fontWeight: '700', 
            color: 'var(--primary-light)' 
          }}>
            {projects.length}
          </div>
        </div>
      </div>

      {error && (
        <div className="row">
          <div className="card large error" style={{
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid var(--error)',
            padding: '1.5rem'
          }}>
            <section style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>⚠️</span>
              <div>
                <h4 style={{ color: 'var(--error)', marginBottom: '0.25rem' }}>Error Loading Projects</h4>
                <p style={{ color: 'var(--error)', margin: 0 }}>{error}</p>
              </div>
            </section>
          </div>
        </div>
      )}

      <ProjectList onSave={saveProject} projects={projects} />

      {!loading && !error && (
        <div className="row" style={{ marginTop: '2rem' }}>
          <div className="col-sm-12">
            <div className="button-group fluid">
              <button 
                className="button primary" 
                onClick={handleMoreClick}
                style={{ 
                  padding: '0.875rem 2.5rem',
                  fontSize: '1rem'
                }}
              >
                Load More Projects →
              </button>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className="center-page" style={{ minHeight: '200px' }}>
          <div className="spinner primary"></div>
          <p style={{ color: 'var(--text-secondary)' }}>Loading amazing projects...</p>
        </div>
      )}
    </>
  );
}

export default ProjectsPage;