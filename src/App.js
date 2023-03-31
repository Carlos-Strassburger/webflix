
import { LoginScreen } from './screens/login-screen/Login.screen.jsx'
import { HomeScreen } from './screens/home-screen/Home.screen.jsx'
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className='App'>
      <Routes>
        <Route path="/" element={<LoginScreen />}></Route>
        <Route path="/home" element={<HomeScreen />}></Route>
      </Routes>
      </div>
    </>
  );
}

export default App;
