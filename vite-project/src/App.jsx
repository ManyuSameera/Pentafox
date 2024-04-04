import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import Success from './Success';
import Display from './display';
import New from './New';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={!isLoggedIn ? <LoginForm onLogin={handleLogin} /> : <Success />} />
        <Route path="/success" element={<Success/>}/>
        <Route path="/display" element={<Display/>}/> */}
        <Route path='/' element={<New/>}/>
      </Routes>
    </Router>
  );
};

export default App;
