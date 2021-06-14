import React from 'react';
import HorizontalCard from '../UI/HorizontalCard';

const HomeItem = (props) => {
    return (
        <>
        
        {props.newsData.map((item,index)=>{
            const{title,urlToImage,source,publishedAt,description}=item;
            return <HorizontalCard key={index} title={title} urlToImage={urlToImage} source={source} publishedAt={publishedAt} description={description}  />

        })}
        </>
    );
};

export default HomeItem;