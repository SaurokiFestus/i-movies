import About from "./About"

import Home from "./Home"

import Search from "./Search"

import Contacts from "./Contacts"

import Navbar from "./Navbar"

import { Route, Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

      <Route path ="/" element={<Home/>} >
      </Route>

      <Route path ="/about" element ={<About/>}>
      </Route>

      {/* <Route path ="/search" element ={<Search/>}>
      </Route> */}

      <Route path ="/contacts" element ={<Contacts/>}>
      </Route>

      </Routes>
      
     
      
    </div>
  );
}

export default App;
