import React from 'react';

function ExperienceSection({ experience, isDarkMode }) {
  return (
<section style={{ 
  width: '100%', 
  maxWidth: '600px', 
  marginTop: '2.5rem', 
  marginLeft: 'auto', 
  marginRight: 'auto' 
}}>
        <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', textAlign: 'center', fontWeight: 'bold' }}>
        Experiencia Laboral
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        {experience.map((item) => (
          <div 
            key={item.id} 
            style={{ 
              backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff', 
              padding: '1.5rem', 
              borderRadius: '12px', 
              border: isDarkMode ? '1px solid #333' : '1px solid #e0e0e0',
              boxShadow: isDarkMode ? 'none' : '0 4px 6px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease'
            }}
          >
            {/* Cabecera del puesto y empresa */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: isDarkMode ? '#61dafb' : '#0066cc', margin: 0, fontWeight: '600' }}>
                  {item.role}
                </h3>
                <h4 style={{ fontSize: '0.95rem', color: isDarkMode ? '#ddd' : '#555', margin: '0.2rem 0 0 0', fontWeight: '500' }}>
                  {item.company}
                </h4>
              </div>
              
              {/* Insignia de periodo */}
              <span style={{ 
                fontSize: '0.8rem', 
                color: isDarkMode ? '#aaa' : '#666', 
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f0f0f0', 
                padding: '0.25rem 0.6rem', 
                borderRadius: '6px',
                fontWeight: '500'
              }}>
                {item.period}
              </span>
            </div>

            {/* Descripción */}
            <p style={{ fontSize: '0.9rem', color: isDarkMode ? '#ccc' : '#444', lineHeight: '1.5', margin: '0.8rem 0 0 0' }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;