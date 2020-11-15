import {useContext, useEffect} from 'react'
import Container from '../reusable/container'
import Navbar from '../navbar/Navbar'
import Detail from '../detail/Detail'
import Pagination from '../pagination/Pagination'
import {MovieContext} from '../../context/Context'


const PopularSContent = () => {
     // const state values from context 
    const {getPopularSeries, page, popularSeries, setIndex, setDetail, setShowMenu, showMenu} = useContext(MovieContext)
  // after page changes useEffect calls new data a rerenders content
        useEffect(()=>{
            getPopularSeries()
        },[page])
        return(
            <>
                <Navbar></Navbar>
                  <Container >
                       <h1 className='pageheader'>Popular series</h1>
                      <div className='moviesPage'>
                        {popularSeries.results && popularSeries.results.map((movie, movieIndex)=>{
                            return (
                            <img className='popMoviePosters' key={movieIndex} alt='poster' src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} onClick={()=>{setIndex(movieIndex); setDetail(popularSeries.results[movieIndex]); setShowMenu(!showMenu)}}></img>
                            )
                        })}
                      </div>
                      <Pagination />
                </Container>
                <Detail/>
            </>
    )
}

export default PopularSContent