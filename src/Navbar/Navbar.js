import React from 'react'
import './navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { serchText } from '../redux/serchSlice';
import { useDispatch } from 'react-redux';
import Mnavbar from '../MoboNavbar/Mnavbar';




const Navbar = () => {
const [load, setload] = useState(false);
const [navload, setnavload] = useState(true);
const [mobileNavbar, setmobileNavbar] = useState(false);
const [text, settext] = useState('')
const dispatch = useDispatch();
const handleload = ()=>{
    setload(!load);
}

    return (
        <div className ='Navbar' id="Navar">
      <div className='bar'>
          <h1>NFYG (News For Your Grandpa)</h1> 
          <div className='toggle'>
            <h2 onClick={()=>{
            setmobileNavbar(!mobileNavbar)
        }
        }><i className="fas fa-bars"></i></h2>
           </div>
          {navload ?  <div className='menu'>
          <Link to='/' onClick={()=>
            {settext('example');
            dispatch(serchText(text));
            }} >Home</Link> 
          <a href="#" onClick={handleload}>News</a>
          <Link to='/developer'>Developers</Link>
          <h2 onClick={()=>{setnavload(!navload)}}><i className="fas fa-search"></i></h2>
          </div> :
          <div className='input'>
           <h2><i className="fas fa-search" onClick={()=>{setnavload(!navload)}}></i></h2>
          <input type='text' placeholder="Serch the field you would like to read"
          value={text}
           onChange={(e)=>settext(e.target.value)}
           onKeyUp={(event)=>{
            if (event.keyCode === 13) {
                setnavload(!navload);
                dispatch(serchText(text));
              }
           }}
           />
          </div> }
          </div> 
        {load && <div className="news">
        <Link to='/teachnology'>Teachnology</Link>
        <a>Covid-19</a>
        </div> 
        }  
        {mobileNavbar && <Mnavbar/>}
        </div>
    )
}

export default Navbar
