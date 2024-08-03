// src/components/ProjectGrid.js
import React from 'react';

function ProjectGrid() {
  // Example data
  const projects = [
    { id: 1, title: 'Project One', image: 'path/to/image1.jpg', video: 'path/to/video1.mp4' },
    { id: 2, title: 'Project Two', image: 'path/to/image2.jpg', video: 'path/to/video2.mp4' },
    // Add more projects here
  ];

  return (
    <div className="project-grid">
      {projects.map(project => (
        <div key={project.id} className="project-item">
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} />
          {project.video && <video src={project.video} controls />}
        </div>
      ))}
    </div>
  );
}

export default ProjectGrid;
