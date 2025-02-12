/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


// eslint-disable-next-line no-unused-vars
const Card = ({ coffee }) => {
    const {name, image, category, origin, type, id, rating, popularity} =
     coffee || {}
    // console.log(coffee)
    // return <div>{name}</div>
    return (
        <div className="flex relative">
            <Link to={`/coffee/${id}`}
            className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden"
            >
                <figure className="w-full h-48 overflow-hidden">
                    <img className="" src={image} alt=""/>
                </figure>
                <div className="p4">
                    <h1 className="text-xl">Name: {name}</h1>
                    <p>Category: {category}</p>
                    
                    <p>Type: {type}</p>
                    <p>Origin: {origin}</p>
                    <p>Rating: {rating}</p>
                    <p>Popularity: {popularity}</p>
                </div>
            </Link>
        </div>
    )
};

export default Card;
