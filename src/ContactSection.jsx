import React from 'react';

function ContactSection({ contact }) {
  return (
    <section style={{ width: '100%', maxWidth: '600px', marginTop: '2rem', textAlign: 'center', color: '#fff' }}>
      <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Contacto</h2>
      <p style={{ marginBottom: '1.5rem', color: '#ccc', fontSize: '0.95rem' }}>
        ¿Hablamos? Puedes contactarme a través de mis redes o enviarme un correo.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <a 
          href={`mailto:${contact.email}`}
          style={{ backgroundColor: '#2a2a2a', color: '#61dafb', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', border: '1px solid #444', fontSize: '0.9rem' }}
        >
          📧 Correo
        </a>
        <a 
          href={contact.github} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ backgroundColor: '#2a2a2a', color: '#61dafb', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', border: '1px solid #444', fontSize: '0.9rem' }}
        >
          💻 GitHub
        </a>
        <a 
          href={contact.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ backgroundColor: '#2a2a2a', color: '#61dafb', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', border: '1px solid #444', fontSize: '0.9rem' }}
        >
          💼 LinkedIn
        </a>
      </div>
    </section>
  );
}

export default ContactSection;