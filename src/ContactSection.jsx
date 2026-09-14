import React from 'react';

function ContactSection({ contact, isDarkMode }) {
  return (
    <section style={{ width: '100%', maxWidth: '600px', marginTop: '2.5rem', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '0.5rem', fontSize: '1.5rem', color: isDarkMode ? '#fff' : '#333', fontWeight: 'bold' }}>
        Contacto
      </h2>
      <p style={{ marginBottom: '1.5rem', color: isDarkMode ? '#ccc' : '#555', fontSize: '0.95rem' }}>
        ¿Hablamos? Puedes contactarme a través de mis redes o enviarme un correo.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <a 
          href={`mailto:${contact.email}`}
          style={{ 
            backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff', 
            color: isDarkMode ? '#61dafb' : '#0066cc', 
            padding: '0.6rem 1.2rem', 
            borderRadius: '8px', 
            textDecoration: 'none', 
            border: isDarkMode ? '1px solid #444' : '1px solid #ccc', 
            fontSize: '0.9rem',
            boxShadow: isDarkMode ? 'none' : '0 2px 4px rgba(0,0,0,0.05)',
            fontWeight: '500'
          }}
        >
          📧 Correo
        </a>
        <a 
          href={contact.github} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff', 
            color: isDarkMode ? '#61dafb' : '#0066cc', 
            padding: '0.6rem 1.2rem', 
            borderRadius: '8px', 
            textDecoration: 'none', 
            border: isDarkMode ? '1px solid #444' : '1px solid #ccc', 
            fontSize: '0.9rem',
            boxShadow: isDarkMode ? 'none' : '0 2px 4px rgba(0,0,0,0.05)',
            fontWeight: '500'
          }}
        >
          💻 GitHub
        </a>
        <a 
          href={contact.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff', 
            color: isDarkMode ? '#61dafb' : '#0066cc', 
            padding: '0.6rem 1.2rem', 
            borderRadius: '8px', 
            textDecoration: 'none', 
            border: isDarkMode ? '1px solid #444' : '1px solid #ccc', 
            fontSize: '0.9rem',
            boxShadow: isDarkMode ? 'none' : '0 2px 4px rgba(0,0,0,0.05)',
            fontWeight: '500'
          }}
        >
          💼 LinkedIn
        </a>
      </div>
    </section>
  );
}

export default ContactSection;