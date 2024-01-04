import React from 'react';
import '../assests/css/Logout.css'; 

const Logout = () => {
  // You can add logout functionality here if needed

  return (
    <div className="logout-page-container">
      <header className="logout-header">
        <h1>Logout</h1>
      </header>
      <main className="logout-main">
        <section className="logout-message">
          <p>You have been successfully logged out.</p>
        </section>
      </main>
      <footer className="logout-footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Logout;
