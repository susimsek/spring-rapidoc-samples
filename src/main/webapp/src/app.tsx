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
    <div className="app-container">
      <Navbar specUrl={specUrl} handleApiChange={handleApiChange}/>
      <Apidoc specUrl={specUrl}/>
    </div>
  );
};

export default App;
