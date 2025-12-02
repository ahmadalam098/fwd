import { Link } from 'react-router';

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>🚀 ProjectPilot</h1>
        <p>
          Your ultimate project management companion. Track progress, manage budgets, 
          and deliver exceptional results with our powerful yet intuitive platform.
        </p>
        <div className="cta-buttons">
          <Link to="/projects" className="button primary">
            ✨ Explore Projects
          </Link>
          <a href="#features" className="button bordered">
            🔍 Discover Features
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-item">
          <div className="number">50+</div>
          <div className="label">Active Projects</div>
        </div>
        <div className="stat-item">
          <div className="number">$2.5M</div>
          <div className="label">Total Budget</div>
        </div>
        <div className="stat-item">
          <div className="number">98%</div>
          <div className="label">Success Rate</div>
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
          <h3>Smart Analytics</h3>
          <p>Real-time insights and beautiful dashboards to track your project performance at a glance.</p>
        </div>
        <div className="feature-card">
          <div className="icon">⚡</div>
          <h3>Lightning Fast</h3>
          <p>Blazing fast interface powered by modern technology for seamless project management.</p>
        </div>
        <div className="feature-card">
          <div className="icon">🔒</div>
          <h3>Bank-Level Security</h3>
          <p>Enterprise-grade encryption and security protocols to keep your data safe and protected.</p>
        </div>
        <div className="feature-card">
          <div className="icon">🤝</div>
          <h3>Team Collaboration</h3>
          <p>Real-time collaboration tools to keep your team aligned and projects on track.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
