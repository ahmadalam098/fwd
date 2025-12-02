import { Link } from 'react-router';

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>🌊 ProjectPilot</h1>
        <p>
          Navigate your projects with confidence. A modern, intuitive platform 
          designed to streamline your workflow and boost team productivity.
        </p>
        <div className="cta-buttons">
          <Link to="/projects" className="button primary">
            🎯 View Projects
          </Link>
          <a href="#features" className="button bordered">
            💡 Learn More
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-item">
          <div className="number">50+</div>
          <div className="label">Projects</div>
        </div>
        <div className="stat-item">
          <div className="number">$2.5M</div>
          <div className="label">Budget</div>
        </div>
        <div className="stat-item">
          <div className="number">98%</div>
          <div className="label">Success</div>
        </div>
        <div className="stat-item">
          <div className="number">24/7</div>
          <div className="label">Support</div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="features-grid">
        <div className="feature-card">
          <div className="icon">📊</div>
          <h3>Real-time Analytics</h3>
          <p>Track project metrics and budgets with live dashboards and instant insights.</p>
        </div>
        <div className="feature-card">
          <div className="icon">⚡</div>
          <h3>Blazing Fast</h3>
          <p>Built with cutting-edge technology for a smooth, responsive experience.</p>
        </div>
        <div className="feature-card">
          <div className="icon">🔐</div>
          <h3>Enterprise Security</h3>
          <p>Your data is protected with industry-leading encryption standards.</p>
        </div>
        <div className="feature-card">
          <div className="icon">👥</div>
          <h3>Team Sync</h3>
          <p>Collaborate seamlessly with real-time updates and shared workspaces.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
