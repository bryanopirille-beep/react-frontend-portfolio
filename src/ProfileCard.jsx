import React from 'react';
import './ProfileCard.css';

function ProfileCard({ name, role, bio, avatarUrl, isDarkMode }) {
  return (
    <div style={{ 
      backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
      border: isDarkMode ? '1px solid #333' : '1px solid #e5e7eb',
      borderRadius: '16px',
      padding: '2rem 1.5rem',
      textAlign: 'center',
      boxShadow: isDarkMode ? 'none' : '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <img 
          src={avatarUrl} 
          alt={name} 
          style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #61dafb' }}
        />
      </div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: isDarkMode ? '#ffffff' : '#111827' }}>
        {name}
      </h1>
      <p style={{ fontSize: '0.95rem', fontWeight: '600', color: '#61dafb', marginBottom: '1rem' }}>
        {role}
      </p>
      <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: isDarkMode ? '#9ca3af' : '#4b5563', maxWidth: '500px', margin: '0 auto 1.5rem auto' }}>
        {bio}
      </p>
      <button style={{ 
        backgroundColor: '#61dafb', 
        color: '#000000', 
        border: 'none', 
        padding: '0.6rem 1.5rem', 
        borderRadius: '8px', 
        fontWeight: 'bold', 
        cursor: 'pointer',
        fontSize: '0.9rem'
      }}>
        Conectar
      </button>
    </div>
  );
}

export default ProfileCard;