import React from 'react';
import './Navigation.scss';
import logo from '../../assets/logo.svg';
import mobMenu from '../../assets/mobMenu.svg'
import { useState } from 'react';
import { useEffect } from 'react';

const Navigation = () => {

    const [mobileMenuImg, setMobileMenuImg] = useState(true);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [scroll, setScroll] = useState(false);

    const [defaultClassMobileMenu, setDefaultClassMobileMenu] = useState('navigation-mob__nonActive');

    const open = () => {
        setDefaultClassMobileMenu('navigation-mob__nonActive_open');
        setMobileMenu((changeMobStatus) => !changeMobStatus);
    };

    const close = () => {
        setDefaultClassMobileMenu('navigation-mob__nonActive_close');
        setMobileMenuImg(true)
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
            <div className='navigation-mob'>
                {mobileMenuImg && (
                    <img src={mobMenu} onClick={open}></img>
                )}
                <div className={defaultClassMobileMenu}>
                    <p onClick={close} className='navigation-mob__nonActive_imgClose'>X</p>
                    <div className='navigation-mob__nonActive_menu'>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Features</p>
                        <p>Solution</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navigation