import React from "react";
import { addFavourite, remFavourite } from "../actions";

class MovieCard extends React.Component {

    handleFav = () => {
        const { movie, dispatch } = this.props;
        dispatch(addFavourite(movie));
    }

    handleUnfav = () => {
        const { movie, dispatch } = this.props;
        dispatch(remFavourite(movie));
    }

    render() {
        // console.log(this.props);
        const { movie, isFavourite } = this.props;
        // console.log(movie);
        // console.log('hi');
        return (
            <div className='movie-card'>
                <div className='left'>
                    <img alt="Movie-poster" src={movie.Poster}></img>
                </div>
                <div className='right'>
                    <div className='title'>{movie.Title}</div>
                    <div className='plot'>{movie.Plot}</div>
                    <div className='footer'>
                        <div className='rating'>{movie.imdbRating}</div>
                        {isFavourite ?
                            <button className='unfavourite-btn' onClick={this.handleUnfav}>Unfavourite</button>
                            :
                            <button className='favourite-btn' onClick={this.handleFav}>Favourite</button>
                        }
                        {/* {console.log('FAV   ',isFavourite())} */}
                    </div>
                </div>
            </div >
        );
    }
}

export default MovieCard;