import React, { useState } from 'react';

/**
 * SchoolManagementApp - High-end, premium school management dashboard.
 * Features:
 * - Sidebar navigation
 * - Real-time statistics cards
 * - Student overview and recent activities
 * - Modern dark mode with glassmorphism
 */
const SchoolManagementApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="edu-app">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo-icon">E</div>
          <h2>EduManage</h2>
        </div>
        <nav className="nav-menu">
          <button 
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={`nav-item ${activeTab === 'students' ? 'active' : ''}`}
            onClick={() => setActiveTab('students')}
          >
            Students
          </button>
          <button 
            className={`nav-item ${activeTab === 'teachers' ? 'active' : ''}`}
            onClick={() => setActiveTab('teachers')}
          >
            Teachers
          </button>
          <button 
            className={`nav-item ${activeTab === 'finance' ? 'active' : ''}`}
            onClick={() => setActiveTab('finance')}
          >
            Finance
          </button>
          <button 
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </nav>
        <div className="sidebar-footer">
          <button className="logout-btn">Logout</button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="top-bar">
          <div className="search-bar">
            <input type="text" placeholder="Search for students, teachers, or courses..." />
          </div>
          <div className="user-profile">
            <div className="notification-icon">🔔</div>
            <div className="profile-img">JD</div>
            <span>Admin: Jane Doe</span>
          </div>
        </header>

        <section className="dashboard-view">
          <div className="view-header">
            <h1>School Overview</h1>
            <p>Welcome back, Admin. Here's what's happening today.</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-value">1,248</span>
              <span className="stat-label">Total Students</span>
              <div className="stat-trend positive">+12% this month</div>
            </div>
            <div className="stat-card">
              <span className="stat-value">86</span>
              <span className="stat-label">Active Teachers</span>
              <div className="stat-trend neutral">Stable</div>
            </div>
            <div className="stat-card">
              <span className="stat-value">94%</span>
              <span className="stat-label">Attendance Rate</span>
              <div className="stat-trend positive">+2% from last week</div>
            </div>
            <div className="stat-card highlight">
              <span className="stat-value">$42.4k</span>
              <span className="stat-label">Fees Collected</span>
              <div className="stat-trend positive">85% of target</div>
            </div>
          </div>

          <div className="details-row">
            <div className="recent-activities glass">
              <h3>Recent Activities</h3>
              <ul className="activity-list">
                <li>
                  <div className="activity-icon blue">📝</div>
                  <div className="activity-details">
                    <strong>Mid-term exams scheduled</strong>
                    <span>Oct 12th, 09:00 AM</span>
                  </div>
                </li>
                <li>
                  <div className="activity-icon green">🎓</div>
                  <div className="activity-details">
                    <strong>10 new students enrolled</strong>
                    <span>Grade 9 - Science Track</span>
                  </div>
                </li>
                <li>
                  <div className="activity-icon yellow">🔔</div>
                  <div className="activity-details">
                    <strong>Staff meeting reminder</strong>
                    <span>Tomorrow, 03:00 PM</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="performance-chart glass">
              <h3>Academic Performance</h3>
              <div className="chart-placeholder">
                {/* A real chart library like Recharts would go here */}
                <div className="chart-bar-container">
                    <div className="chart-bar" style={{height: '60%'}}></div>
                    <div className="chart-bar" style={{height: '80%'}}></div>
                    <div className="chart-bar" style={{height: '45%'}}></div>
                    <div className="chart-bar" style={{height: '90%'}}></div>
                    <div className="chart-bar" style={{height: '70%'}}></div>
                </div>
                <div className="chart-labels">
                    <span>Math</span>
                    <span>Science</span>
                    <span>Arts</span>
                    <span>History</span>
                    <span>Language</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global CSS for the premium look */}
      <style>{`
        :root {
          --primary: #6366f1;
          --primary-dark: #4f46e5;
          --bg-dark: #0f172a;
          --sidebar-dark: #1e293b;
          --glass-bg: rgba(255, 255, 255, 0.05);
          --card-bg: #1e293b;
          --text-main: #f8fafc;
          --text-muted: #94a3b8;
          --accent-green: #10b981;
          --accent-yellow: #f59e0b;
          --accent-blue: #3b82f6;
          --transition: all 0.3s ease;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          background-color: var(--bg-dark);
          color: var(--text-main);
          overflow: hidden;
        }

        .edu-app {
          display: flex;
          height: 100vh;
          width: 100vw;
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
        }

        /* Sidebar Styles */
        .sidebar {
          width: 260px;
          background-color: var(--sidebar-dark);
          display: flex;
          flex-direction: column;
          padding: 2rem;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background-color: var(--primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.5rem;
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
        }

        .nav-menu {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }

        .nav-item {
          background: none;
          border: none;
          color: var(--text-muted);
          padding: 1rem 1.5rem;
          text-align: left;
          font-size: 1rem;
          border-radius: 12px;
          cursor: pointer;
          transition: var(--transition);
        }

        .nav-item:hover, .nav-item.active {
          background-color: var(--glass-bg);
          color: var(--text-main);
          transform: translateX(5px);
        }

        .nav-item.active {
          color: var(--primary);
          background-color: rgba(99, 102, 241, 0.1);
        }

        .logout-btn {
          background: none;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ef4444;
          padding: 0.8rem;
          border-radius: 12px;
          cursor: pointer;
          width: 100%;
          transition: var(--transition);
        }

        .logout-btn:hover {
          background-color: rgba(239, 68, 68, 0.1);
        }

        /* Main Content Styles */
        .main-content {
          flex: 1;
          padding: 2rem 3rem;
          overflow-y: auto;
        }

        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .search-bar input {
          background: var(--glass-bg);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 0.8rem 1.5rem;
          color: white;
          width: 400px;
          outline: none;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .profile-img {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        /* Dashboard Styles */
        .view-header h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .view-header p {
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background-color: var(--card-bg);
          padding: 2rem;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
        }

        .stat-card.highlight {
          border: 1px solid var(--primary);
          background: linear-gradient(135deg, rgba(30, 41, 59, 1) 0%, rgba(99, 102, 241, 0.1) 100%);
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
        }

        .stat-label {
          color: var(--text-muted);
          font-weight: 500;
        }

        .stat-trend {
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }

        .stat-trend.positive { color: var(--accent-green); }
        .stat-trend.neutral { color: var(--text-muted); }

        /* Details Row */
        .details-row {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 2rem;
        }

        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 2rem;
        }

        h3 {
          margin-bottom: 1.5rem;
          font-size: 1.25rem;
        }

        .activity-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .activity-list li {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .activity-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }

        .activity-icon.blue { background-color: rgba(59, 130, 246, 0.1); }
        .activity-icon.green { background-color: rgba(16, 185, 129, 0.1); }
        .activity-icon.yellow { background-color: rgba(245, 158, 11, 0.1); }

        .activity-details strong {
          display: block;
          margin-bottom: 2px;
        }

        .activity-details span {
          color: var(--text-muted);
          font-size: 0.875rem;
        }

        /* Chart Placeholder */
        .chart-placeholder {
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 1rem;
        }

        .chart-bar-container {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          height: 140px;
          padding: 0 1rem;
        }

        .chart-bar {
          width: 40px;
          background: linear-gradient(to top, var(--primary), #818cf8);
          border-radius: 8px 8px 4px 4px;
          animation: growUp 1s ease-out forwards;
        }

        .chart-labels {
          display: flex;
          justify-content: space-between;
          color: var(--text-muted);
          font-size: 0.75rem;
          padding: 0 1rem;
        }

        @keyframes growUp {
          from { transform: scaleY(0); transform-origin: bottom; }
          to { transform: scaleY(1); transform-origin: bottom; }
        }
      `}</style>
    </div>
  );
};

export default SchoolManagementApp;
