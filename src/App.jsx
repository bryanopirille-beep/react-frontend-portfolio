import { useState } from 'react';
import ProfileCard from './ProfileCard';
import ProjectList from './ProjectList';
import ContactSection from './ContactSection';
import './App.css';

const userData = {
  name: "Bryan Pirille",
  role: "Frontend Developer & UI Specialist",
  bio: "Construyendo interfaces web modernas, responsivas y eficientes con React, cuidando cada detalle de la experiencia de usuario.",
  projects: [
    {
      id: 1,
      title: "Red Movilidad Case Study",
      description: "Análisis y rediseño de la experiencia de usuario para el sistema de transporte.",
      tech: ["React", "UI/UX", "Figma"]
    },
    {
      id: 2,
      title: "React Frontend Portfolio",
      description: "Portafolio modular desarrollado con componentes reutilizables y Vite.",
      tech: ["React", "Vite", "CSS"]
    }
  ],
  avatarUrl: "https://i.ibb.co/dsCGXFpZ/Gemini-Generated-Image-m6g9ffm6g9ffm6g9.jpg",
  contact: {
    email: "bryanopirille@gmail.com",
    github: "https://github.com/bryanopirille-beep",
    linkedin: "https://www.linkedin.com/in/bryan-pirille/"
  }
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

      <ProfileCard 
        name={userData.name}
        role={userData.role}
        bio={userData.bio}
        avatarUrl={userData.avatarUrl}
        isDarkMode={isDarkMode}
      />

      <ProjectList projects={userData.projects} />

      <ContactSection contact={userData.contact} />

    </main>
  );
}

export default App;