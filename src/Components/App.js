import React from 'react';

//** Using store now */
import { data } from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from '../actions';
// import { render } from 'react-dom';

class App extends React.Component {
  componentDidMount() {
    // really you do API call here
    // then you call store.dispatch()

    const { store } = this.props;

    store.subscribe(() => {
      console.log('Updated');
      this.forceUpdate();
    })

    store.dispatch(addMovies(data))

    // console.log(store.getState());
  }

  isMovieFav = (movie) => {
    const { favourite } = this.props.store.getState();
    // console.log('isMovieFav called for , ', movie);
    const index = favourite.indexOf(movie);

    if (index !== -1) {
      // found the movie
      // console.log('Favourite');
      return true;
    }
    // console.log('Unfavourite');
    return false;
  }

  render() {
    console.log('Render ', this.props.store.getState());
    const { list } = this.props.store.getState();
    return (
      <div className="App">

        <Navbar />

        <div className="main">
          <div className='tabs'>
            <div className='tab'>Movies</div>
            <div className='tab'>Favourite</div>
          </div>

          <div className='list'>
            {/* <MovieCard /> */}
            {list.map((movie, index) => (
              < MovieCard
                movie={movie}
                key={index}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFav(movie)}
              />
            ))}
          </div>

        </div>
      </div>
    )
  }
}

export default App;
