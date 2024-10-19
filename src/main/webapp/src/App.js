import React, { useState } from 'react';
import Navbar from './components/Navbar';
import RapiDocComponent from './components/RapiDocComponent';

const App = () => {
  const [theme, setTheme] = useState("light"); // Light theme as default
  const [specUrl, setSpecUrl] = useState("/v3/api-docs"); // Default API URL

  const handleApiChange = (e) => {
    setSpecUrl(e.target.value);
  };

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        theme={theme}
        handleThemeToggle={handleThemeToggle}
        specUrl={specUrl}
        handleApiChange={handleApiChange}
      />
      <RapiDocComponent theme={theme} specUrl={specUrl} />
    </div>
  );
};

export default App;
