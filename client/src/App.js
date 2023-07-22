import './App.css';
import Landing from './components/Landing/Landing.jsx'
import {Navigate,Routes,Route, useNavigate } from "react-router-dom"
import Home from './components/Home/Home'
import Games from './components/Games/Games'
import Card from './components/Card/Card';
import ApiLocal from './components/ApiLocal/ApiLocal';
import LocalGames from './components/Games/LocalGames';
import { useEffect,useState } from 'react';
const App =() => {

  const navigate = useNavigate()

const [access, setAccess] = useState(false)
  const username = 'josefranco@gmail.com'
const password = 'video123game'
const login =(userData) =>{
  if(userData.username === username && userData.password === password){
    setAccess(true)
    navigate("/home")
  }
}


  return (
    <div className="App" style={{ padding: '210px' }}>
 <Routes>
 <Route path='/api' element={<ApiLocal/>}/>
 <Route path="/" element={<Landing login={login}/>}/>
<Route path="/detailpagegames/:id" element={<Games/>}/>
<Route path="/detailpagelocalgames/:id" element={<LocalGames/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/card' element={<Card/>}/>
<Route path="*" element={<Navigate to='/'/>}/>
 </Routes>   

  </div>
  );
}

export default App;

/*
useEffect(()=>{
  !access && navigate('/')

},[access])

*/