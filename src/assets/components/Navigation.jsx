import './navigation.css'
import {MenuData} from './MenuData'
import menu from '../../../images/icon-menu.svg'
import close from '../../../images/icon-close.svg'
import logo from '../../../images/logo.svg'
import cart from '../../../images/icon-cart.svg'
import avatar from '../../../images/image-avatar.png'
import { useState } from 'react'
function Navigation() {

  const [isOpen, setIsOpem] = useState(false)

    return (
      <>
        <nav className='navContainer'>
          <div className="menu">
          <img src={menu} className='bars' alt="" onClick={() => setIsOpem(!isOpen)}/>
          <img src={logo} />
          <ul className={isOpen ? 'navItems active' : 'navItems'}>
            <li className='navItem'><img src={close} alt="" onClick={() => setIsOpem(!isOpen)}/></li>
            {MenuData.map((item, index) => (
              <li className='navItem' key={index}>{item.title}</li>
            ))}
          </ul>
          </div>
          <div className="user">
            <img className='cart' src={cart}/>
            <img className='avatar' src={avatar} />
          </div>
        </nav>
      </>
    )
  }
  
  export default Navigation