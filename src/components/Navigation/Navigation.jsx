import React from 'react';
import './Navigation.scss';
import logo from '../../assets/logo.svg';
import mobMenu from '../../assets/mobMenu.svg'
import { useState } from 'react';
import { useEffect } from 'react';

const Navigation = () => {

    const [mobileMenuImg, setMobileMenuImg] = useState(true);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [scroll, setScroll] = useState(false)

    const openMobMenu = (e) => {
        e.preventDefault();
        setMobileMenu((changeMobStatus) => !changeMobStatus)
    }

    useEffect(() => {
        setMobileMenuImg(!mobileMenu)

        const scrolling = () => {
            if(window.scrollY > 0){
                setScroll(true);
            }else{
                setScroll(false)
            }
        };

        window.addEventListener('scroll', scrolling);
        return () => {
            window.removeEventListener('scroll',scrolling)
        }

    },[mobileMenu, scroll])

  return (
    <>
        <div className={`nav-block ${scroll ? 'active' : ''}`}>
            <div className='nav-block__logo'>
                <img src={logo}></img>
                <p>Hoo<span>Bank</span></p>
            </div>
            <div className='nav-block__navigation-desktop'>
                <p>Home</p>
                <p>About Us</p>
                <p>Features</p>
                <p>Solution</p>
            </div>
        </div>
        <div className='navigation-mob'>
            {mobileMenuImg === true && (
                <img className={`${scroll ? 'active' : ''}`} src={mobMenu} onClick={openMobMenu}></img>
            )} 
            <div className={`navigation-mob__nav ${mobileMenu ? 'open': ''}`}>
                <p onClick={openMobMenu} className='navigation-mob__nav_close'>X</p>
                <div className='navigation-mob__nav_menu'>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Features</p>
                    <p>Solution</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navigation