import React from 'react'
import Arrow from '../Arrow/Arrow'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
        <h2>Privacy</h2>
        <h3>Sickhub.intel.inct...</h3>
        <div className='sci'>
        <a href='https://github.com/Saithiha24'><i class="fab fa-github"></i></a>
        <a href='https://www.facebook.com/profile.php?id=100035432660306'><i class="fab fa-facebook"></i></a>
        <a href='https://www.instagram.com/sai._bit/?fbclid=IwAR015PtdUXr7cvr_XCbhoIf6Bf2O9inaUBpDKE35tsQBwpBLMLiunpRsw4g'><i class="fab fa-instagram-square"></i></a>
        </div>
        <Arrow/>
        </div>
        
    )
}

export default Footer
