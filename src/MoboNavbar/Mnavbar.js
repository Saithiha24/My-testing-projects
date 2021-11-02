import React from 'react'
import './Mnavbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { serchText } from '../redux/serchSlice';
import { useDispatch } from 'react-redux';



const Mnavbar = () => {
        const [load, setload] = useState(false);
        const [navload, setnavload] = useState(true);
        const [mobileNavbar, setmobileNavbar] = useState(false);
        const [text, settext] = useState('')
        const dispatch = useDispatch();
    return (
        <div className='Mnavbar'>
            <div className='input'>
                <label><i class="fas fa-search"></i></label>
                <input
                type='text' placeholder="Serch"
          value={text}
           onChange={(e)=>settext(e.target.value)}
           onKeyUp={(event)=>{
            if (event.keyCode === 13) {
                setnavload(!navload);
                dispatch(serchText(text));
              }
           }}
           />
            </div>
            <div className='menu'>
         <Link to='/' onClick={()=>
            {settext('example');
            dispatch(serchText(text));
            }} ><i class="fas fa-home"></i>Home</Link>
         <Link to='/developer'><i class="fas fa-laptop-code"></i>Developer</Link>
         </div>
        </div>
    )
}

export default Mnavbar
