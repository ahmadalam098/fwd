import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import ProjectPage from './projects/ProjectPage';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
import HomePage from './home/HomePage';

function App() {
  return (
    <BrowserRouter>
      <header className="sticky">
        <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
        </span>
        <nav style={{ display: 'flex', gap: '0.75rem', flex: 1 }}>
          <NavLink to="/" className="button rounded">
            🏠 Home
          </NavLink>
          <NavLink to="/projects" className="button rounded">
            🚀 Projects
          </NavLink>
        </nav>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
          background: 'rgba(139, 92, 246, 0.1)',
          padding: '0.5rem 1rem',
          borderRadius: '2rem',
          border: '1px solid rgba(139, 92, 246, 0.2)'
        }}>
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
            animation: 'pulse 2s infinite',
            boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)'
          }}></span>
          ✨ Online
        </div>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
