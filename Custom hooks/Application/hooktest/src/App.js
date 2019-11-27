import React, {useContext} from 'react';


import Demo1 from './Hooks/useState/useState';
import Demo2 from './Hooks/useEffect/useEffect';
const TestContext = React.createContext();
function Display() {
  const value = useContext(TestContext);
  return <div>{value}, I am learning react hooks.</div>;
}


function App() {
  return (
    <div className="App">
      <div>HH</div>
     <Demo1 />
     <br/>
     <Demo2 />
    <br/>
     <TestContext.Provider value={"Kaleem"}>
      <Display />
    </TestContext.Provider>
    </div>
  );
}

export default App;
