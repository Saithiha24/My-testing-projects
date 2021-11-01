import React from 'react'
import './navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
const [load, setload] = useState(false);

const handleload = ()=>{
    setload(!load);
}

    return (
        <div className = 'Navbar' id="Navar">
        <div className='bar'>
          <h1>NFYG (News For Your Grandpa)</h1> 
          <div className='menu'>
          <Link to='/'>Home</Link> 
          <a href="#" onClick={handleload}>News</a>
          <Link to='/developer'>Developers</Link>
          </div>
          </div>
     {load ? <div className="news">
        <Link to='/teachnology'>Teachnology</Link>
        <a>Covid-19</a>
        </div> : <></>
        }   
        
        </div>
    )
}

export default Navbar
