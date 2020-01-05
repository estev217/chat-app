import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact 
      name = "Jim Ramos"
      avatar = "https://randomuser.me/api/portraits/men/54.jpg"
      />
      <Contact 
      name = "Marion Stewart"
      avatar = "https://randomuser.me/api/portraits/women/9.jpg"
      online
      />
      <Contact 
      name = "Guy Henderson"
      avatar = "https://randomuser.me/api/portraits/men/86.jpg"
      />
    </div>
  );
}

export default App;
