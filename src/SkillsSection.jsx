import React from 'react';

function SkillsSection({ skills, isDarkMode }) {
  return (
    <section style={{ 
      width: '100%', 
      maxWidth: '600px', 
      marginTop: '2.5rem', 
      marginLeft: 'auto', 
      marginRight: 'auto' 
    }}>
      <h2 style={{ 
        marginBottom: '1.5rem', 
        fontSize: '1.5rem', 
        textAlign: 'center', 
        color: isDarkMode ? '#fff' : '#333', 
        fontWeight: 'bold' 
      }}>
        Habilidades Técnicas
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', 
        gap: '1rem' 
      }}>
        {skills.map((skill, index) => (
          <div 
            key={index}
            style={{ 
              backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff', 
              padding: '1rem', 
              borderRadius: '10px', 
              border: isDarkMode ? '1px solid #333' : '1px solid #e0e0e0',
              textAlign: 'center',
              boxShadow: isDarkMode ? 'none' : '0 2px 4px rgba(0,0,0,0.03)',
              transition: 'all 0.3s ease'
            }}
          >
            <span style={{ 
              fontSize: '0.95rem', 
              fontWeight: '600', 
              color: isDarkMode ? '#61dafb' : '#0066cc' 
            }}>
              {skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;