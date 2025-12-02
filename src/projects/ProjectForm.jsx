import { useState } from 'react';
import PropTypes from 'prop-types';
import { Project } from './Project';

function ProjectForm({ project: initialProject, onSave, onCancel }) {
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    name: '',
    description: '',
    budget: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid()) return;
    onSave(project);
  };

  const handleChange = (event) => {
    const { type, name, value, checked } = event.target;
    // if input type is checkbox use checked
    // otherwise it's type is text, number etc. so use value
    let updatedValue = type === 'checkbox' ? checked : value;

    //if input type is number convert the updatedValue string to a number
    if (type === 'number') {
      updatedValue = Number(updatedValue);
    }
    const change = {
      [name]: updatedValue,
    };

    let updatedProject;
    // need to do functional update b/c
    // the new project state is based on the previous project state
    // so we can keep the project properties that aren't being edited like project.id
    // the spread operator (...) is used to
    // spread the previous project properties and the new change
    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });
    setErrors(() => validate(updatedProject));
  };

  function validate(project) {
    let errors = { name: '', description: '', budget: '' };
    if (project.name.length === 0) {
      errors.name = 'Name is required';
    }
    if (project.name.length > 0 && project.name.length < 3) {
      errors.name = 'Name needs to be at least 3 characters.';
    }
    if (project.description.length === 0) {
      errors.description = 'Description is required.';
    }
    if (project.budget === 0) {
      errors.budget = 'Budget must be more than $0.';
    }
    return errors;
  }

  function isValid() {
    return (
      errors.name.length === 0 &&
      errors.description.length === 0 &&
      errors.budget.length === 0
    );
  }

  return (
    <form className="input-group vertical" onSubmit={handleSubmit} style={{
      background: 'var(--bg-card)',
      border: '2px solid var(--primary)',
      boxShadow: '0 0 30px rgba(99, 102, 241, 0.2)'
    }}>
      {/* Form Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '1.5rem',
        paddingBottom: '1rem',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <h4 style={{ 
          color: 'var(--primary-light)', 
          marginBottom: '0.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          ✏️ Edit Project
        </h4>
        <p style={{ 
          color: 'var(--text-muted)', 
          fontSize: '0.85rem',
          margin: 0 
        }}>
          Update the project details below
        </p>
      </div>

      <label htmlFor="name">Project Name</label>
      <input
        type="text"
        name="name"
        placeholder="enter name"
        value={project.name}
        onChange={handleChange}
        style={{
          borderColor: errors.name ? 'var(--error)' : undefined
        }}
      />
      {errors.name.length > 0 && (
        <div style={{
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid var(--error)',
          borderRadius: 'var(--radius-md)',
          padding: '0.5rem 0.75rem',
          marginTop: '0.25rem'
        }}>
          <p style={{ 
            color: 'var(--error)', 
            margin: 0, 
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            ⚠️ {errors.name}
          </p>
        </div>
      )}

      <label htmlFor="description">Project Description</label>
      <textarea
        name="description"
        placeholder="enter description"
        value={project.description}
        onChange={handleChange}
        style={{
          borderColor: errors.description ? 'var(--error)' : undefined
        }}
      />
      {errors.description.length > 0 && (
        <div style={{
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid var(--error)',
          borderRadius: 'var(--radius-md)',
          padding: '0.5rem 0.75rem',
          marginTop: '0.25rem'
        }}>
          <p style={{ 
            color: 'var(--error)', 
            margin: 0, 
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            ⚠️ {errors.description}
          </p>
        </div>
      )}

      <label htmlFor="budget">Project Budget ($)</label>
      <input
        type="number"
        name="budget"
        placeholder="enter budget"
        value={project.budget}
        onChange={handleChange}
        style={{
          borderColor: errors.budget ? 'var(--error)' : undefined
        }}
      />
      {errors.budget.length > 0 && (
        <div style={{
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid var(--error)',
          borderRadius: 'var(--radius-md)',
          padding: '0.5rem 0.75rem',
          marginTop: '0.25rem'
        }}>
          <p style={{ 
            color: 'var(--error)', 
            margin: 0, 
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            ⚠️ {errors.budget}
          </p>
        </div>
      )}

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginTop: '1rem',
        padding: '0.75rem',
        background: 'var(--bg-tertiary)',
        borderRadius: 'var(--radius-md)'
      }}>
        <input
          type="checkbox"
          name="isActive"
          id="isActive"
          checked={project.isActive}
          onChange={handleChange}
          style={{ margin: 0 }}
        />
        <label htmlFor="isActive" style={{ 
          margin: 0, 
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          {project.isActive ? '✅' : '⬜'} Project is Active
        </label>
      </div>

      <div className="input-group" style={{ 
        marginTop: '1.5rem',
        gap: '0.75rem'
      }}>
        <button className="primary" type="submit" style={{
          flex: 1,
          padding: '0.75rem'
        }}>
          💾 Save Changes
        </button>
        <button 
          type="button" 
          className="bordered" 
          onClick={onCancel}
          style={{
            flex: 1,
            padding: '0.75rem'
          }}
        >
          ✕ Cancel
        </button>
      </div>
    </form>
  );
}

ProjectForm.propTypes = {
  project: PropTypes.instanceOf(Project),
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default ProjectForm;
