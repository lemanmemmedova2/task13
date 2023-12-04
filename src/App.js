import { BrowserRouter ,Routes, Route,NavLink} from 'react-router-dom'
import About from './Component/AboutPage'
import Contact from './Component/ContactsPage'
import Team from './Component/Team'
import './App.css'
import {useState} from 'react'
import image from './img.png'
function App() {
  const [first , setFirst] = useState(true);
  function main1(){
document.querySelector('.navbar-nav').style.display = 'none'
  }
  function main2(){
    document.querySelector('.navbar-nav').style.display = 'block'
      }
const two = (e)=>{
 if(first){
  main2();
  setFirst(false)
 }else{
  main1();
  setFirst(true);
 }
}

  return (
  
    <div className='container'>
        <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar style">
        Пингвины
      </NavLink>
      <img onClick={two} src={image} alt='photo'/>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to={'/about'}>
              О нас
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to={'/contacts'}>
              Контакты
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'/team'}>
              Наша команда
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    <Routes>
    <Route path="/about" element={<About/>}> 
    </Route>
    <Route path="/contacts" element={<Contact/>}>
    
    </Route>
    <Route path="/team" element={<Team/>}>
    </Route>
    </Routes>
    </BrowserRouter>
  </div>
 
  );
}

export default App;
