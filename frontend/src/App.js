import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Secure from './secure'
import Login from './login'
import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/home" element={<Secure email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
