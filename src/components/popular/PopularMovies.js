import {useContext, useEffect} from 'react'
import {MovieContext} from '../../context/Context'
import Carousel from 'react-elastic-carousel';
const PopularMovies = () => {
// context state values to show details and images.
const {popularMovies, setIndex, setDetail, setShowMenu, showMenu} = useContext(MovieContext)
    // brakpoints for carousel component that comes from library
        const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 3},
        {width: 768, itemsToShow: 6},
        {width: 1000, itemsToShow: 8},
    ]
      
  


    return(
        <>
        <h1>Popular movies</h1>
        
        <ul>
            <Carousel breakPoints={breakPoints}>
                {/*if there are any results we map through the array to get poster_path into URL that gets the image*/}
                 {popularMovies.results && popularMovies.results.map((movie, movieIndex)=>{
                return (<li key={movieIndex}>
                 <img alt='poster' src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} onClick={()=>{setIndex(movieIndex); setDetail(popularMovies.results[movieIndex]); setShowMenu(!showMenu)}}></img>
                </li>)
            })}
            </Carousel>
        </ul>
        </>
    )
}

export default PopularMovies