import React,{useState,useEffect} from 'react';
import useCallData from '../hooks/use-CallData'
import HomeItem from './HomeItem';

const Main = () => {
const url='https://newsapi.org/v2/top-headlines?country=us&apiKey=b02daf4fea814cb4861cb42eef0a2010'

const{value:data,isLoading:isLoading}= useCallData(url);
    return(
        <>
        {isLoading && <h3><b>Loading...</b></h3>}
            {!isLoading&&<HomeItem newsData={data}/>}
    </>
    )



};

export default Main;