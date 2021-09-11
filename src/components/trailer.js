import React from "react";
import { Link, useParams } from "react-router-dom";


const Trailer = ({moviesList}) => { 
    const {name}=useParams();
    const movie=moviesList.find(movie=> movie.name===name)
    return (
        <div className='Trailer'>
            <Link to='/'><button className='back'>Return Menu</button></Link>
            <div className='TrailerImg'>
                <img src={movie&&movie.image} alt='poster'/>
            </div>
             <div className='TrailerDetails'>
                <h2>{movie.name}</h2>
                <p>{movie.description}</p>
                <span >{movie.trailer}</span>
            </div>  
            
        </div>
    )

}


export default Trailer