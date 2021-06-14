import React from 'react';
import classes from './HoriCard.Module.css';

const HorizontalCard = (props) => {
    return (
        <div className={classes.horiCard}>
           <div className={classes.horiImg}>
               <img src={props.urlToImage} className={classes.imgCard}  alt="" />
           </div>
           <div className={classes.horiDescription}>
               <h4>{props.title}</h4>
               <p>{props.description}</p>
               <a href="#" className="cardLink">
               {
                   props.source.id
               }
        </a>
        <small className={classes.publishDate}>{`Published at: ${new Date(props.publishedAt).toLocaleDateString()}`}</small>
           </div> 
        </div>
    );
};

export default HorizontalCard;