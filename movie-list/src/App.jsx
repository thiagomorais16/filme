import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from './pages/Home/Home.jsx';
import MovieDetail from './pages/MovieDetail/MovieDetail.jsx';

function App() {
  const [searchValue, setSearchValue] = useState("")
  return (

    <div className="App" style={{backgroundColor: "#080415"}}>
      {/* ele vai carregar a div app e dps vai carregar header só dps ele vai carregar rota filha */}
      {/*ele vai mandar da filha pra mãe com routes*/}
      <Header onSubmit={(inputValue) => setSearchValue (inputValue)}/>
      <Routes>
        <Route path="/" element={<Home searchValueProp ={searchValue} />} />
        <Route path="/movie/:id" element= {<MovieDetail />} />
      </Routes>
    </div>
  )
}

export default App;
