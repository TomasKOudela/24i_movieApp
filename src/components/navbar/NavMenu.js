import {navData} from '../navData/Data'
import {Link} from 'react-router-dom'
import {MovieContext} from '../../context/Context'
import {useContext} from 'react'
const NavMenu = () => {
    //consts from context 
    const {setPageDir,menu} = useContext(MovieContext)
    return(

        <ul ref={menu}>
            {/*onClick on li wil reset pagedir state value that causes rerender to page 1 in context useEffect*/}
           {navData.map((item, index)=>{
              return(<li onClick={()=>{setPageDir(item.title)}} key={index}><Link to={item.path} key={index}>{item.title}</Link></li>)
           })}
        </ul>
    )
}

export default NavMenu