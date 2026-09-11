import React from 'react';

function ProjectList({ projects }) {
  return (
    <section style={{ width: '100%', maxWidth: '600px', marginTop: '2rem', color: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Mis Proyectos</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {projects.map((project) => (
          <div 
            key={project.id} 
            style={{ 
              backgroundColor: '#1a1a1a', 
              border: '1px solid #333', 
              borderRadius: '12px', 
              padding: '1.5rem' 
            }}
          >
            <h3 style={{ marginBottom: '0.5rem', color: '#61dafb' }}>{project.title}</h3>
            <p style={{ marginBottom: '1rem', color: '#ccc', fontSize: '0.95rem' }}>{project.description}</p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {project.tech.map((t, index) => (
                <span 
                  key={index} 
                  style={{ 
                    backgroundColor: '#2a2a2a', 
                    color: '#61dafb', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '20px', 
                    fontSize: '0.8rem',
                    border: '1px solid #444'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;