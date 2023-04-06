import { useState } from 'react'
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header.jsx";

function App() {

  return (

    <div className="App">
      {/* ele vai carregar a div app e dps vai carregar header só dps ele vai carregar rota filha */}
      <Header />
      <Outlet />
    </div>
  )
}

export default App
