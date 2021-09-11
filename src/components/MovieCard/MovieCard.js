import React from 'react';
import Rate from '../Rate';
import { Link } from "react-router-dom";

const MovieCard = ({
  movie: { name, date, rating, image, type, description,id },
}) => {
  return (
    <Link to= {`/trailer/${name}`} key={id}>

    <div className="card">
      <div className="card-1">
        <img src={image} alt="poster" />
      </div>
      <div className="card-2">
        <h1>{name}</h1>
        <div >
          <ul>
            <h4>{date}</h4>
            <h4>||</h4>
            <h4>{type}</h4>
          </ul>
        </div>
        <div className="card-2-rating">
          <Rate rating={rating} />
        </div>
        <div className="card-2-description">
          <p>{description}</p>
          
        </div>
      </div>
    </div>
    </Link>
  );
};

export default MovieCard;