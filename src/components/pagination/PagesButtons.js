import React, {useState, useEffect } from 'react'

import {MovieContext} from '../../context/Context'
import {useContext} from 'react'
const PagesButtons = () => {
    // context state values
    const {setPage, page, pageButtons} = useContext(MovieContext)
    const [btns, setBtns] = useState([])

    // everytime page state value changes we set new btns.
    useEffect(()=>{
        setBtns(pageButtons)
    },[page])

    return(
            <div className='pages'>
                {/*mapping through page items in the array*/}
            {btns.map((item, index) => {
                if (item < 500)
            return (<button key={index} className='pagebuttons' onClick={()=>{setPage(item)}}>{item}</button>)
            })}
            </div>
    )
}

export default PagesButtons