import React, {useRef, useState, createContext, useEffect } from "react";


export const MovieContext = createContext();

export const MovieState = ({ children }) => {

    // API consts 
      const API_KEY = '4b3babb8d95732213195c952bb150f4a'
      const BASIC_URL = 'https://api.themoviedb.org/3/'

      // states for used through whole app

      const [popularMovies, setPopularMovies] = useState([])
      const [popularSeries, setPopularSeries] = useState([])
      const [familyShow, setFamilyShow] = useState([])
      const [documentaryShow, setDocumentaryShow] = useState([])
      const [index, setIndex] = useState(0);
      const [showMenu, setShowMenu] = useState(false);
      const [detail, setDetail] = useState({});
      const [showPlayer, setshowPlayer] = useState(false);
      const [pageDir, setPageDir] = useState('Home')
      const [page, setPage] = useState(1)
      const [pageButtons, setPageButtons] = useState([])
      const [dropMenu, setDropMenu] = useState(true)

      // these refs are used only for mobile version to show and hide menu
      const menu = useRef(null)
      const menuBurger = useRef(null)
      

    //fetching data for movies
      const getPopularMovies = async () => {
          const popularMoviesResponse = await fetch(`${BASIC_URL}movie/popular?api_key=${API_KEY}&language=cs-cz&page=${page}`)
          const popularMoviesData = await popularMoviesResponse.json();
          setPopularMovies(popularMoviesData)   
      };

      // fetching data for popular series
        const getPopularSeries = async () => {
          const popularSeriesResponse = await fetch(`${BASIC_URL}tv/popular?api_key=${API_KEY}&language=cs-cz&page=${page}`)
          const popularSeriesData = await popularSeriesResponse.json();
          setPopularSeries(popularSeriesData)   
      };
      //fetching data for Family section
       const getFamilyShows = async () => {
          const familyShowResponse = await fetch(`${BASIC_URL}discover/movie?api_key=${API_KEY}&language=cs-cz&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}&with_genres=10751`)
          const familyShowData = await familyShowResponse.json();
          setFamilyShow(familyShowData)   
      };

      // fetching data for documentary content 
       const getDocumentary = async () => {
          const documentaryResponse = await fetch(`${BASIC_URL}discover/movie?api_key=${API_KEY}&language=cs-cz&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}&with_genres=99`)
          const documentaryData = await documentaryResponse.json();
          setDocumentaryShow(documentaryData)   
      };
      
   // after change of pageDir with navBar content page is reseted to page 1 so you start from the begining on every page
      useEffect(()=>{
         setPage(1)
         getPopularMovies()
         getPopularSeries()
         getFamilyShows()
         getDocumentary()
      },[pageDir])

    


                return (
            <MovieContext.Provider value={{dropMenu, setDropMenu, menuBurger, menu, BASIC_URL, pageButtons, setPageButtons, page, setPage, API_KEY,popularMovies, setPopularMovies, popularSeries, setPopularSeries, familyShow, setFamilyShow, documentaryShow, setDocumentaryShow, index, setIndex, showMenu, setShowMenu, detail, setDetail,showPlayer, setshowPlayer, getPopularMovies, getPopularSeries, getFamilyShows, getDocumentary, pageDir, setPageDir}}>
                {children}
            </MovieContext.Provider>
        );
    }