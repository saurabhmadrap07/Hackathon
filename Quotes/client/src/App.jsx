import { useState } from 'react'
import {Routes,Route} from "react-router"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import Home from './components/Home'
// import './App.css'


// export const AuthContext = createContext();

// function getUserFromSessionStorage() {
//   const [user, setUser] = useState(getUserFromSessionStorage());
// 	return JSON.parse(sessionStorage.getItem("user"));
// }

function App() {
  

  return (
    <div className="container">
    <Routes>
      
      <Route index="true" element={<Home/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/register" element={<RegistrationForm/>}/>
      
    </Routes>
    </div>
  )
}

export default App
