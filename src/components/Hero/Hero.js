import Container from '../reusable/container'
import PopularMovies from '../popular/PopularMovies'
import PopularSeries from '../popular/PopularSeries'
import Family from '../family/Family'
import Documentary from '../documentary/Documentary'
const Hero = () => {
    return(
        <div className='hero'>
            <Container>
                <PopularMovies/>
                <PopularSeries />
                <Family />
                <Documentary />
            </Container>
        </div>
    )
}

export default Hero