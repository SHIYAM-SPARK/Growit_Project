import React from 'react';
import '..assests/css/Dashboard.css'; 
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header>
        <h1>Welcome, User!</h1>
      </header>
      <nav>
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </nav>
      <main>
        <section className="user-info">
          <h2>User Information</h2>
          <p>Name: John Doe</p>
          <p>Email: john@example.com</p>
        </section>
        <section className="dashboard-content">
          <h2>Dashboard Content</h2>
          <p>Welcome to your user dashboard. Here, you can view and manage your information.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
