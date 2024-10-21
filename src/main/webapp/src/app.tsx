import React from 'react';
import Navbar from './components/navbar';
import Apidoc from './components/apidoc';

const App: React.FC = () => {
  const [specUrl, setSpecUrl] = React.useState<string>('/v3/api-docs');

  // Handler for changing the API specification URL
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
      <Apidoc specUrl={specUrl} />
    </div>
  );
};

export default App;
