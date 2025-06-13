import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  return (
    <div className='flex bg-black text-white'>

      <SideBar />
      <Main />
      {/* <Header /> */}
     
    </div>
  )
}

export default App
