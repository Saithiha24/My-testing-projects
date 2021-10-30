import React from 'react'
import {  useLocation, useParams } from 'react-router'
import { APIKey } from '../Api/apikey';
import { BaseURL } from '../Api/newsapi';
import useFetch from '../useFetch';

const NewsDetail = () => {
    const { id } = useParams();
    const locaton = useLocation();
    const {news} = useFetch(`${BaseURL}?q=example&token${APIKey}${locaton}${id}`)
    return (
       
        <>
       
        Wait We are developing for this feature 
        and for serching news as you like too 
        My title is {id}
        </>)
}

export default NewsDetail
