import React, { useEffect } from 'react'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import {MovieContext} from '../../context/Context'
import {useContext} from 'react'
import PagesButtons from './PagesButtons'
const Pagination = () => {
    //context state values 
    const {page, setPage, pageButtons, setPageButtons} = useContext(MovieContext)
    // next page function with rule if you are on 500 as a last page you cant go forward
    const nextPage = () => {
        if (page === 500) {
            setPage(page)
        } else {
            setPage(page + 1)
        }
    }
      // Prev page function with rule if you are on 1 as a first page you cant go back
    const prevPage = () => {
         if (page === 1) {
            setPage(page)
        } else {
            setPage(page - 1)
        }
    
    }

    // filling the array pagebuttons every time page changes with numbers up to 500 starting with the value of page
    useEffect(()=>{
        for (let i = page; i < page + 5; i++) {
            if (i >= 500 ) {
                setPageButtons([pageButtons.push(i + (500-i))])
            } else 
            setPageButtons([pageButtons.push(i)])
        }
      
        return (setPageButtons([]))
    }, [page])

    return(
        <>  
            <div className='pagination'>
                <button>
                    <FaChevronLeft onClick={() => {prevPage()}} />
                </button>
                <div className='pagination-inner'>
                    {/*if you go above 1 button will pop up so you can go back to page 1 at any time */}
                    <div className='firstbtn'>
                         {page >= 2 && (<button onClick={()=>{
                             setPage(1)
                         }}>1</button>)}
                    </div>
                    <PagesButtons />
                    <div className='lastBtn'>
                        {/*if you are bellow 500 button pops up so you can go always to the las page */}
                    {page <= 500 && <button onClick={()=>{
                             setPage(500)
                         }}>500</button>}
                    </div>
            
                </div>
                <button>
                    <FaChevronRight onClick={() => {
                        nextPage()
                    }}/>
                </button>
            </div>
        </>
    )
}

export default Pagination