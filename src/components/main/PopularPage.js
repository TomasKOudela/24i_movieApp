import {useContext, useEffect} from 'react'
import Container from '../reusable/container'
import Navbar from '../navbar/Navbar'
import Detail from '../detail/Detail'
import Pagination from '../pagination/Pagination'
import {MovieContext} from '../../context/Context'


const PopularPageContent = () => {
         // const state values from context 
    const {getPopularMovies, page, popularMovies, setIndex, setDetail, setShowMenu, showMenu} = useContext(MovieContext)
      // after page changes useEffect calls new data a rerenders content   
    useEffect(()=>{
            getPopularMovies()
        },[page])
        return(
            <>
                <Navbar></Navbar>
                  <Container >
                       <h1 className='pageheader'>Popular movies</h1>
                      <div className='moviesPage'>
                        {popularMovies.results && popularMovies.results.map((movie, movieIndex)=>{
                            return (
                            <img className='popMoviePosters' key={movieIndex} alt='poster' src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} onClick={()=>{setIndex(movieIndex); setDetail(popularMovies.results[movieIndex]); setShowMenu(!showMenu)}}></img>
                            )
                        })}
                      </div>
                      <Pagination />
                </Container>
                <Detail/>
            </>
    )
}

export default PopularPageContent