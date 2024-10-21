import React from 'react';
import Navbar from './components/Navbar';
import RapiDocComponent from './components/RapiDocComponent';

const App: React.FC = () => {
  const [specUrl, setSpecUrl] = React.useState<string>('/v3/api-docs');

  const handleApiChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSpecUrl(e.target.value);
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar specUrl={specUrl} handleApiChange={handleApiChange} />
      <RapiDocComponent specUrl={specUrl} />
    </div>
  );
};

export default App;
