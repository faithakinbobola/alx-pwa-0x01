import React from "react";

interface MovieCardProps {
    
}
 
const MovieCard: React.FC<MovieCardProps> = () => {
    return ( 
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://via.placeholder.com/150" alt="Movie Poster" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Movie Title</div>
                <p className="text-gray-700 text-base">
                    This is a brief description of the movie. It gives an overview of the plot and main characters.
                </p>
            </div>
        </div>
     );
}
 
export default MovieCard;