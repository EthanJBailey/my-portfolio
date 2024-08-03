// src/components/TechGrid.js
import React from 'react';

function TechGrid() {
  // Example data
  const technologies = [
    { id: 1, name: 'JavaScript', icon: 'path/to/js-icon.png' },
    { id: 2, name: 'React', icon: 'path/to/react-icon.png' },
    // Add more technologies here
  ];

  return (
    <div className="tech-grid">
      {technologies.map(tech => (
        <div key={tech.id} className="tech-item">
          <img src={tech.icon} alt={tech.name} />
          <p>{tech.name}</p>
        </div>
      ))}
    </div>
  );
}

export default TechGrid;
