import {useContext, useEffect, useState} from 'react'
import Container from '../reusable/container'
import Navbar from '../navbar/Navbar'
import Detail from '../detail/Detail'

import {MovieContext} from '../../context/Context'


const SearchPageContent = () => {
           // const state values from context 
   const {BASIC_URL,API_KEY,setIndex, setDetail, setShowMenu, showMenu} = useContext(MovieContext)
   // state values for search
   const [searchResults, setSearchResults] = useState({results: []})
   const [searchQuery, setSearchQuery] = useState('Star Wars')
   // calling api to fetch data that have our query included
   const getSearch = async (search) => {
        const searched = await fetch(`${BASIC_URL}search/movie?api_key=${API_KEY}&language=cs-cz&page=1&query=${search}`)
        const searchedData = await searched.json();
        setSearchResults(searchedData)   
      };
      
      // changing value of input that is equal to searchQuery and on every change getting new results
      const handleSubmit = (e) => {
          setSearchQuery(e.target.value)
        if (searchQuery.length > 0) {
          getSearch(searchQuery)
        } 
      }
      //einitial render that will find star wars movies
      useEffect(() => {
          getSearch(searchQuery)
      }, [])
        
        return(
            <>
                <Navbar></Navbar>
                 <Container>
                    <h1 className='pageheader'>Search</h1>
                     <div className='inputForm'>
                            <input value={searchQuery} onChange={(e)=>{handleSubmit(e)}}></input>
                     </div>
                     <div className='searchContent'>
                        {searchResults ? searchResults.results.map((item, index)=>{
                            return  <img className='popMoviePosters' key={index} alt='poster' src={`https://image.tmdb.org/t/p/w342/${item.poster_path}`} onClick={()=>{setIndex(index); setDetail(searchResults.results[index]); setShowMenu(!showMenu)}}></img>
                        }): ''}
                     </div>
                 </Container>
                <Detail/>
            </>
    )
}

export default SearchPageContent