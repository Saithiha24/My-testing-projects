import React from 'react'
import useFetch from '../useFetch'
import News from '../News/News'
import { BaseURL } from '../Api/newsapi'
import { APIKey } from '../Api/apikey'
import { useSelector } from 'react-redux'


const Teach = () => {
    const {error,isloading} = useFetch(`${BaseURL}?q=teachnology&token=${APIKey}`);
    const news = useSelector(state=>state.news.getNews);
    return (
        <>
        {isloading && <h2>Loading.... Please Wait</h2>}
        {error && <div>{error}</div>} 
        {news && <News news={news}/> }
        </>
        ) 
    
}

export default Teach
