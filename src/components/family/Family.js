import {useContext} from 'react'
import {MovieContext} from '../../context/Context'
import Carousel from 'react-elastic-carousel';
const Family = () => {
     // const state values from context 
    const {familyShow, setIndex, setDetail, setShowMenu, showMenu} = useContext(MovieContext)
    // breakpoints for carousel component
          const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 3},
        {width: 768, itemsToShow: 6},
        {width: 1000, itemsToShow: 8},
    ]
    return(
        <>
        <h1>Family</h1>
        <ul>
             <Carousel breakPoints={breakPoints}>
            {familyShow.results && familyShow.results.map((show, movieIndex)=>{
                 return (<li key={movieIndex}>
                 <img alt='poster' src={`https://image.tmdb.org/t/p/w342/${show.poster_path}`}onClick={()=>{setIndex(movieIndex); setDetail(familyShow.results[movieIndex]); setShowMenu(!showMenu)}}></img>
                </li>)
               
            })}
            </Carousel>
        </ul>
        </>
    )
}

export default Family