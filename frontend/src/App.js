import Secure from './secure'
import Login from './login'
import { CookiesProvider, useCookies } from 'react-cookie'
import './App.css';

function App() {
  const [cookies, setCookie] = useCookies(['user'])

  const login = (user) => {
    setCookie('user', user, { path: '/' })
  }

  const logout = () => {
    setCookie('user', '', { path: '/' })
  }

  return (
    <CookiesProvider>
      <div>{cookies.user ? <Secure user={cookies.user} onLogout={logout} /> : <Login onLogin={login} />}</div>
    </CookiesProvider>
  );
}

export default App;
