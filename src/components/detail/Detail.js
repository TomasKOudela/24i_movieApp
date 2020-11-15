import {useContext} from 'react'
import {MovieContext} from '../../context/Context'
import { FaTimes } from "react-icons/fa";

const PopularMovies = () => {
    // consts from context 
    const {detail, showMenu, setShowMenu, showPlayer, setshowPlayer} = useContext(MovieContext)
    return(
        <>
            {showMenu && <div className='detail'>
                {/* div on left that has heading that is either detail.name and if that is empty it is detail.title */}
                    <div className='left'>
                        {detail.name ? <h2>{detail.name}</h2> : <h2>{detail.title}</h2>}
                        <p>{detail.overview}</p>
                        <span></span>
                        {/* on click we show player  */}
                        <button onClick={()=>{setshowPlayer(!showPlayer)}}>Play</button>
                    </div>
                    <div className='right'>
                        {/*closing menu and player on click*/}
                    <button onClick={()=>{setShowMenu(!showMenu); setshowPlayer(false)}}> <FaTimes className={showPlayer ? 'icon-top-right': 'icon'}/>
                    </button>

                        <img key={detail.id} alt='poster' src={`https://image.tmdb.org/t/p/w342/${detail.poster_path}`}/>
                    
                    </div>
                    {/*if showplayer is true we display it*/}
                    {showPlayer && <video controls autoPlay className='video'>
                         <source src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'} type="video/mp4"></source>
                     </video>}
                </div>}
        </>
    )
}

export default PopularMovies