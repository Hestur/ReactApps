import React from 'react';
import ErrorBound from './ErrorBound';
// import ErrorBounderiesoff from './ErrorBounderiesoff';
import BuggyCounter  from './BuggyCounter'


import './App.css';

function App() {
  return (
    <div className="App">
      <h1>fffff</h1>
    
      <hr />
      <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      <ErrorBound><BuggyCounter /></ErrorBound>
      <ErrorBound><BuggyCounter /></ErrorBound>
    </div>
  );
}

export default App;
