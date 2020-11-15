import React, {useEffect} from 'react'
import Navbar from '../navbar/Navbar'
import Hero from '../Hero/Hero'
import Detail from '../detail/Detail'
import {MovieContext} from '../../context/Context'
import {useContext} from 'react'

const Home = () => {
         // const state values from context 
      const {getPopularMovies, getPopularSeries, getFamilyShows, getDocumentary, page} = useContext(MovieContext)
         // after page changes useEffect calls new data a rerenders content
      useEffect(()=>{
        getPopularMovies()
        getPopularSeries()
        getFamilyShows()
        getDocumentary()
      }, [page])
    return(
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <Detail></Detail>
        </>
    )
}

export default Home