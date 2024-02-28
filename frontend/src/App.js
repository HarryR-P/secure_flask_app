import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Secure from './secure'
import Login from './login'
import PrivateRoutes from './utils/PrivateRoutes'
import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [email, setEmail] = useState('')


  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />} >
            <Route path="/secure" element={<Secure email={email} />} />
          </Route>
          <Route path="/login" element={<Login setEmail={setEmail} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
