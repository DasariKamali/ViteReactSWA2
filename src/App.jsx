import React, { useEffect, useState } from 'react';
import { getPublicData, getApp2Data } from './api';

function App() {
  const [publicData, setPublicData] = useState('');
  const [app2Data, setApp2Data] = useState('');

  useEffect(() => {
    getPublicData().then(data => setPublicData(data));
    getApp2Data().then(data => setApp2Data(data));
  }, []);

  return (
    <div>
      <h1>Vite React App 2</h1>
      <p>Public Data: {publicData}</p>
      <p>App 2 Data: {app2Data}</p>
    </div>
  );
}

export default App;
