import React from 'react'
import News from '../News/News';
import useFetch from '../useFetch';
import {APIKey} from '../Api/apikey'
import { BaseURL } from '../Api/newsapi';
import { useSelector } from 'react-redux';



const Home = () => {
    const serchText = useSelector(state=>state.serch.text);
    const url = `${BaseURL}?q=${serchText}&token=${APIKey}`;
    const {error,isloading} = useFetch(url);
    const news = useSelector(state => state.news.getNews)
    return (
        <>
        {isloading && <h2>Loading.... Please Wait</h2>}
        {error && <div>{error}</div>} 
        {news && <News news={news}/>}
        </>)
       
    
}

export default Home
