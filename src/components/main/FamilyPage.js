import {useContext, useEffect} from 'react'
import Container from '../reusable/container'
import Navbar from '../navbar/Navbar'
import Detail from '../detail/Detail'
import Pagination from '../pagination/Pagination'
import {MovieContext} from '../../context/Context'


const FamilyPageContent = () => {
     // const state values from context 
    const {getFamilyShows, page, familyShow, setIndex, setDetail, setShowMenu, showMenu} = useContext(MovieContext)
    // after page changes useEffect calls new data a rerenders content
        useEffect(()=>{
            getFamilyShows()
        },[page])
        return(
            <>
                <Navbar></Navbar>
                  <Container >
                      <h1 className='pageheader'>Family</h1>
                      <div className='moviesPage'>
                        {familyShow.results && familyShow.results.map((movie, movieIndex)=>{
                            return (
                            <img className='popMoviePosters' key={movieIndex} alt='poster' src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} onClick={()=>{setIndex(movieIndex); setDetail(familyShow.results[movieIndex]); setShowMenu(!showMenu)}}></img>
                            )
                        })}
                      </div>
                      <Pagination />
                </Container>
                <Detail/>
            </>
    )
}

export default FamilyPageContent