import React from 'react'
import './developer.css'

const Developer = () => {
    return (
    <div className='container'>
     <div className='box'>
        <div className='imgBx'>
            <img src='https://scontent.frgn4-1.fna.fbcdn.net/v/t1.15752-9/244074319_547658979868769_6910831034821288976_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=id6Vwd-Po4oAX_HaYqC&_nc_ht=scontent.frgn4-1.fna&oh=6337ee2885c763ad164cb45425741cba&oe=6193A61A'/>

            </div>
        <div className='info'>
          <h3>Name:<span>Sai Thiha Kyaw</span></h3>
          <h3>Language:<span>Javacript(ReactJs)</span></h3>
          <h3>Biography:<span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor aut repudiandae, possimus mollitia magni, dignissimos ratione, recusandae eveniet nisi aspernatur accusantium perferendis itaque repellendus corrupti aliquam illum totam qui iusto</span></h3>
          <div className='sci-menu'>
          <a href='https://www.facebook.com/profile.php?id=100035432660306'><i class="fab fa-facebook"></i></a>
          <a href='https://www.instagram.com/sai._bit/?fbclid=IwAR015PtdUXr7cvr_XCbhoIf6Bf2O9inaUBpDKE35tsQBwpBLMLiunpRsw4g'><i class="fab fa-instagram-square"></i></a>
         </div>
         </div>
        </div>
       
    </div>
    )
}

export default Developer
