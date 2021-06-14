import React from 'react';
import Item from '../items/Item'
import useCallData from '../hooks/use-CallData'

const Education = (props) => {
    const url='https://newsapi.org/v2/everything?q=education&apiKey=b02daf4fea814cb4861cb42eef0a2010'
    const{value:data,isLoading:isLoading}= useCallData(url);
    return(
        <>
           {isLoading && <h3><b>Loading...</b></h3>}
            {!isLoading&&<Item newsData={data}/>}
    </>
    )
};

export default Education;