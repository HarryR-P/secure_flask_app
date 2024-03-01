import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Secure from './secure'
import Login from './login'
import PrivateRoutes from './utils/PrivateRoutes'
import { useState } from 'react'
import './App.css';

function App() {
  const [email, setEmail] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)


  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes  loggedIn={loggedIn}/>} >
            <Route path="/" element={<Secure email={email} setLoggedIn={setLoggedIn} />} />
          </Route>
          <Route path="/login" element={<Login setEmail={setEmail} setLoggedIn={setLoggedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
