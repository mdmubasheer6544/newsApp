import React from 'react';
import  Card  from '../UI/Card';


const Item = (props) => {
   
    return (
        <>
        
        {props.newsData.map((item,index)=>{
            const{title,urlToImage,source,publishedAt,description}=item;
            return <Card key={index} title={title} urlToImage={urlToImage} source={source} publishedAt={publishedAt} description={description}  />

        })}
        </>
    );
};

export default Item;