import React from 'react';
import './ProfileCard.css'; // Crearemos los estilos en un momento

function ProfileCard({ name, role, bio, avatarUrl, isDarkMode }) {
  return (
    <div className={`profile-card ${isDarkMode ? 'dark' : 'light'}`}>
      <img src={avatarUrl} alt={name} className="profile-avatar" />
      <div className="profile-info">
        <h2>{name}</h2>
        <span className="profile-role">{role}</span>
        <p>{bio}</p>
      </div>
      <button className="profile-btn" onClick={() => alert(`¡Contactando a ${name}!`)}>
        Conectar
      </button>
    </div>
  );
}

export default ProfileCard;