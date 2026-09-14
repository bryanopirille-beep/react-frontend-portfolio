import { useState } from 'react';
import ProfileCard from './ProfileCard';
import ProjectList from './ProjectList';
import ExperienceSection from './ExperienceSection';
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
  experience: [
    {
      id: 1,
      role: "Atención al Cliente",
      company: "Rock Padel",
      period: "Dic 2025 - May 2026",
      description: "Gestión de atención al público, organización y soporte operativo en complejo deportivo."
    },
    {
      id: 2,
      role: "Ventas",
      company: "Claro",
      period: "2016 - 2017",
      description: "Atención comercial, asesoramiento a clientes y promoción de servicios de telecomunicaciones."
    },
    {
      id: 3,
      role: "Operador de Radio",
      company: "Radio Libertad",
      period: "2014 - 2015",
      description: "Control de emisión, soporte técnico en transmisiones y operación de equipos de audio."
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
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      backgroundColor: isDarkMode ? '#0f0f0f' : '#f4f5f7', 
      color: isDarkMode ? '#ffffff' : '#1f2937',
      padding: '1.5rem 1rem',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      
      {/* Botón de cambio de tema flotante/superior */}
      <div style={{ width: '100%', maxWidth: '700px', display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{ 
            padding: '0.5rem 1rem', 
            cursor: 'pointer', 
            borderRadius: '8px', 
            border: isDarkMode ? '1px solid #333' : '1px solid #d1d5db',
            backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
            color: isDarkMode ? '#ffffff' : '#333333',
            fontWeight: '500',
            fontSize: '0.85rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}
        >
          {isDarkMode ? 'Modo Claro ☀️' : 'Modo Oscuro 🌙'}
        </button>
      </div>

      {/* Contenedor principal adaptable estilo Dashboard / Bento */}
      <div style={{ 
        width: '100%', 
        maxWidth: '700px', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '2rem' 
      }}>
        <ProfileCard 
          name={userData.name}
          role={userData.role}
          bio={userData.bio}
          avatarUrl={userData.avatarUrl}
          isDarkMode={isDarkMode}
        />

        <ProjectList projects={userData.projects} isDarkMode={isDarkMode} />

        <ExperienceSection experience={userData.experience} isDarkMode={isDarkMode} />

        <ContactSection contact={userData.contact} isDarkMode={isDarkMode} />
      </div>

    </main>
  );
}

export default App;