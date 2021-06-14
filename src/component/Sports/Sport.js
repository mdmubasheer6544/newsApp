import React from 'react';
import useCallData from '../hooks/use-CallData';
import Item from '../items/Item'

const Sport = () => {
    const url='https://newsapi.org/v2/everything?q=sports&apiKey=b02daf4fea814cb4861cb42eef0a2010'
    const{value:data,isLoading:isLoading}= useCallData(url);
    return(
        <>
          {isLoading && <h3><b>Loading...</b></h3>}
            {!isLoading&&<Item newsData={data}/>}
    </>
    )
};

export default Sport;