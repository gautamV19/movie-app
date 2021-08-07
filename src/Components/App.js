import React from 'react';

//** Using store now */
import { data } from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from '../actions';
// import { render } from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    console.log('Constr');

    this.state = {
      showList: true
    }
  }
  componentDidMount() {
    // generally you do API call here
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
    const { favourite } = this.props.store.getState().movies;
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

  goToFav = () => {
    this.state.showList = false;
    this.forceUpdate();
  }

  goToList = () => {
    this.state.showList = true;
    this.forceUpdate();
  }

  render() {
    console.log('Render ', this.props.store.getState());
    const { list, favourite } = this.props.store.getState().movies;
    return (
      <div className="App">

        <Navbar />

        <div className="main">
          <div className='tabs'>
            <div className={` tab ${this.state.showList ? 'active-tabs' : ''}`} onClick={this.goToList}>Movies</div>
            <div className={` tab ${this.state.showList ? '' : 'active-tabs'}`} onClick={this.goToFav}>Favourites</div>
          </div>

          {this.state.showList ?
            (<div className='list'>
              {/* <MovieCard /> */}
              {list.map((movie, index) => (
                < MovieCard
                  movie={movie}
                  key={index}
                  dispatch={this.props.store.dispatch}
                  isFavourite={this.isMovieFav(movie)}
                />
              ))}
            </div>) :
            (<div className='fav'>
              {/* <MovieCard /> */}
              {favourite.map((movie, index) => (
                < MovieCard
                  movie={movie}
                  key={index}
                  dispatch={this.props.store.dispatch}
                  isFavourite={true}
                />
              ))}
            </div>)
          }
          {
            (favourite.length === 0) ? <div className='no-movies'>No movies to show!!!</div> : null
          }
        </div>
      </div>
    )
  }
}

export default App;
