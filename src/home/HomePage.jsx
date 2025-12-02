import { Link } from 'react-router';

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>🚀 ProjectPilot</h1>
        <p>
          Manage your projects with ease. Track budgets, monitor progress, 
          and keep your team aligned with our intuitive project management platform.
        </p>
        <div className="cta-buttons">
          <Link to="/projects" className="button primary">
            View Projects
          </Link>
          <a href="#features" className="button bordered">
            Learn More
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
          <h3>Budget Tracking</h3>
          <p>Keep track of your project budgets in real-time with detailed analytics and reports.</p>
        </div>
        <div className="feature-card">
          <div className="icon">⚡</div>
          <h3>Fast & Efficient</h3>
          <p>Lightning-fast interface designed to help you manage projects without any delays.</p>
        </div>
        <div className="feature-card">
          <div className="icon">🔒</div>
          <h3>Secure & Reliable</h3>
          <p>Your data is protected with enterprise-grade security and regular backups.</p>
        </div>
        <div className="feature-card">
          <div className="icon">🤝</div>
          <h3>Team Collaboration</h3>
          <p>Work together seamlessly with your team members on shared projects.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
