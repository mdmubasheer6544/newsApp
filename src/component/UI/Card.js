import React from "react";
import classes from './Card.Module.css'

const Card = (props) => {
  return (
    <div className={classes.cardContainer}>
      <img src={props.urlToImage} className={classes.cardImg} alt="..." />
      <div className={classes.cardTitle}>
        <h5 className="title">{props.title.substr(0,10)}</h5>
        <p className={classes.description}>
         {props.description}
        </p>
        <a href="#" className="cardLink">
          {
              props.source.id
          }
        </a>
      </div>
        <small className={classes.publishDate}>{`Published at: ${new Date(props.publishedAt).toLocaleDateString()}`}</small>
    </div>
  );
};

export default Card;
