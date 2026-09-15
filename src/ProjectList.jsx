import React from 'react';

function ProjectList({ projects, isDarkMode }) {
  return (
<section style={{ 
  width: '100%', 
  maxWidth: '600px', 
  marginTop: '2.5rem', 
  marginLeft: 'auto', 
  marginRight: 'auto'  
}}>      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', textAlign: 'center', color: isDarkMode ? '#fff' : '#333', fontWeight: 'bold' }}>
        Mis Proyectos
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        {projects.map((project) => (
          <div 
            key={project.id} 
            style={{ 
              backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff', 
              padding: '1.5rem', 
              borderRadius: '12px', 
              border: isDarkMode ? '1px solid #333' : '1px solid #e0e0e0',
              boxShadow: isDarkMode ? 'none' : '0 4px 6px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease'
            }}
          >
            <h3 style={{ fontSize: '1.1rem', color: isDarkMode ? '#61dafb' : '#0066cc', marginBottom: '0.4rem', fontWeight: '600' }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '0.9rem', color: isDarkMode ? '#ccc' : '#444', lineHeight: '1.5', marginBottom: '1rem' }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {project.tech.map((t, index) => (
                <span 
                  key={index} 
                  style={{ 
                    fontSize: '0.8rem', 
                    backgroundColor: isDarkMode ? '#2a2a2a' : '#f0f0f0', 
                    color: isDarkMode ? '#61dafb' : '#0066cc', 
                    padding: '0.2rem 0.6rem', 
                    borderRadius: '6px',
                    border: isDarkMode ? '1px solid #444' : '1px solid #d0d0d0',
                    fontWeight: '500'
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