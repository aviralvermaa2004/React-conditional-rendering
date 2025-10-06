
import { useState } from 'react'
import './App.css'
import LoginBtn from './assets/components/LoginBtn';

function App() {
const [isloggedIn, setloggedIn]=useState(true);

if(isloggedIn){
   return ( 
   <logoutBtn />
   )
}
else{
  return (
     <LoginBtn/>
  )
}

}

export default App
