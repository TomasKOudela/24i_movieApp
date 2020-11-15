import Container from '../reusable/container'
import NavLogo from './NavLogo'
import NavMenu from './NavMenu'
import {useContext} from 'react'
import {MovieContext} from '../../context/Context'
const Navbar = () => {
    //state values from context
 const {menu, dropMenu, setDropMenu, menuBurger} = useContext(MovieContext)
//handle click that drops the menu by 100vh or raises it by 100vh functional only on mobile 
    const handleClick = () => {
        setDropMenu(!dropMenu)
        if(dropMenu){
            menu.current.style.top = '0';
        } else {
            menu.current.style.top = '-100vh';
        }
        
    }
    return(
        <nav>
            <Container>
                <NavLogo />
                <NavMenu />
                <div className='menuIcon' onClick={()=>{handleClick()}} ref={menuBurger}>
                   <div></div> 
                </div>
            </Container>
        </nav>
    )
}

export default Navbar