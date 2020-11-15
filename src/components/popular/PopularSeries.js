import {useContext} from 'react'
import {MovieContext} from '../../context/Context'
import Carousel from 'react-elastic-carousel';
const PopularSeries = () => {
    //context state values 
    const {popularSeries, setIndex, setDetail, setShowMenu, showMenu} = useContext(MovieContext)
    // break points for carousel component from library
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 3},
        {width: 768, itemsToShow: 6},
        {width: 1000, itemsToShow: 8},
    ]
    return(
        <>
        <h1>Popular series</h1>
        <ul>
            <Carousel breakPoints={breakPoints}>
                {/*mapping through results if there are any*/}
            {popularSeries.results && popularSeries.results.map((serie, movieIndex)=>{
                return (
                <li key={movieIndex}>
                 <img alt='poster' src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`} onClick={()=>{setIndex(movieIndex); setDetail(popularSeries.results[movieIndex]); setShowMenu(!showMenu)}}></img>
                </li>
                )
            })}
              </Carousel>
        </ul>
        </>
    )
}

export default PopularSeries