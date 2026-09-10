import { useState } from 'react';
import ProfileCard from './ProfileCard';
import './App.css';

const userData = {
  name: "Bryan Pirille",
  role: "Frontend Developer & UI Specialist",
  bio: "Construyendo interfaces web modernas, responsivas y eficientes con React, cuidando cada detalle de la experiencia de usuario.",
  avatarUrl: "https://i.ibb.co/dsCGXFpZ/Gemini-Generated-Image-m6g9ffm6g9ffm6g9.jpg"
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: isDarkMode ? '#0f0f0f' : '#f9f9f9', padding: '2rem' }}>
      
      <div style={{ marginBottom: '1rem' }}>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{ padding: '0.5rem 1.0rem', cursor: 'pointer', borderRadius: '6px', border: '1px solid #ccc' }}
        >
          Cambiar a modo {isDarkMode ? 'Claro ☀️' : 'Oscuro 🌙'}
        </button>
      </div>

      {/* 2. Aquí adentro del return solo llamamos a los datos usando el objeto */}
      <ProfileCard 
        name={userData.name}
        role={userData.role}
        bio={userData.bio}
        avatarUrl={userData.avatarUrl}
        isDarkMode={isDarkMode}
      />

    </main>
  );
}

export default App;