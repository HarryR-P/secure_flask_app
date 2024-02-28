import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Secure from './secure'
import Login from './login'
import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [email, setEmail] = useState('')

  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setEmail={setEmail} />} />
          <Route path="/secure" element={<Secure email={email} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
