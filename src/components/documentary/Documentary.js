import {useContext} from 'react'
import {MovieContext} from '../../context/Context'
import Carousel from 'react-elastic-carousel';
const Documentary = () => {
    // consts from context 
    const {documentaryShow , setIndex, setDetail, setShowMenu, showMenu} = useContext(MovieContext)
    // breakpoints for carousel component 
      const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 3},
        {width: 768, itemsToShow: 6},
        {width: 1000, itemsToShow: 8},
    ]
    return(
        <>
        <h1>Documentary</h1>
        <ul>
            <Carousel breakPoints={breakPoints}>
            {documentaryShow.results && documentaryShow.results.map((show, movieIndex)=>{
                return (<li key={movieIndex}>
                 <img alt='poster' src={`https://image.tmdb.org/t/p/w342/${show.poster_path}`}onClick={()=>{setIndex(movieIndex); setDetail(documentaryShow.results[movieIndex]); setShowMenu(!showMenu)}}></img>
                </li>)
            })}
            </Carousel>
        </ul>
        </>
    )
}

export default Documentary