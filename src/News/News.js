import React from 'react'
import {v4} from 'uuid'
import './news.css'
import { Link } from 'react-router-dom'

const News = (props) => {
const {news} = props;
    
    
    return (
        <div className='grid'>
{news.map(data=>(
<div key={v4()} className='card'>
<Link to={`detail/${data.title}`}>
<div className='imgBx'>
<img src ={data.image} alt={data.title}/>
<h2 className='card-title'>{data.title}</h2>
<span>{data.publishedAt}</span>
</div>

</Link>

</div> 
))}
</div>    
    )
}

export default News
