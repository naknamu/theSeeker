import Header from './components/header';
import Main from './components/main';
import { useState } from 'react';

function App() {

  const TARGET = {first: 'Robot', second: 'Ryuk', third: 'Patrick'};
  const [status, setStatus] = useState({first: false, second: false, third: false});

  return (
    <>
      <Header TARGET={TARGET} status={status} />
      <Main TARGET={TARGET} status={status} setStatus={setStatus}/>
    </>
  );
}

export default App;
