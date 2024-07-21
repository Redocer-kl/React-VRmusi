import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Lines from '../assets/thelines.svg';
import Cross from '../assets/cross-svgrepo.svg';
import './navbar.css';
import {Button} from './button.js'


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(()=>{
    showButton();
    }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            VR musi
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <img src={click ? Cross : Lines} width={34} alt = "..."/>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/posters' className='nav-links' onClick={closeMobileMenu}>
                Афиша
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                О нас
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/blog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Блог
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Личный кабинет
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--primary'>Личный кабинет</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;