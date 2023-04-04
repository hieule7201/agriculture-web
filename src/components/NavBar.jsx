import { Link, NavLink } from 'react-router-dom'
import { links } from '../data'
import './navbar.css'

import { GiLindenLeaf } from 'react-icons/gi'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { BsFillBagFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useState } from 'react'

const NavBar = () => {

    const [showSubNav, setShowSubNav] = useState(false)
    const [isShow, setIsShow] = useState(false)
    return (
        <nav>
            <div className='container nav__container'>


                <Link to="/" className='logo' onClick={()=>{setIsShow(false); setShowSubNav(false)}}>
                    <GiLindenLeaf />
                    Organick
                </Link>
                <ul className={`nav__links ${isShow ? 'nav__show': 'nav__hide'}`}>
                    {
                        links.map(({ name, path, child }, index) => {

                            if (name === "Pages") {
                                return (
                                <li key={index}>
                                    <a className='nav__other-page' onClick={()=>setShowSubNav(!showSubNav)}>Pages <IoMdArrowDropdown/> </a>
                                    <ul className={`nav__subnav ${showSubNav ? 'subnav__show': 'subnav__hide'}`}>
                                        {
                                            child.map(({ name, path }, index) => {
                                                return (
                                                    <li key={index} onClick={()=>{setIsShow(prev => !prev); setShowSubNav(!showSubNav)}}>
                                                        <NavLink to={path} className={({ isActive }) => isActive ? 'active__nav' : ''}>{name}</NavLink>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>)
                            } else
                                return (
                                    <li key={index} onClick={()=>{setIsShow(prev => !prev);setShowSubNav(false)}}>
                                        <NavLink to={path} className={({ isActive }) => isActive ? 'active__nav' : ''}>{name}</NavLink>
                                    </li>
                                )

                        })

                    }

                </ul>
                    <div className="nav__search">
                        <input type='text' className='input__search' placeholder='' title=''/>
                        <button className='btn__search'><AiOutlineSearch /></button>
                    </div>
                    <div className="nav__bag">
                        <button className='btn__bag'><BsFillBagFill /></button>
                        <p className='detail__bag'>{`Cart (99+)`}</p>
                    </div>
                <button className="nav__toggle-btn" onClick={()=>{
                    if(showSubNav===true){setShowSubNav(prev => !prev)};
                    setIsShow(prev => !prev)}} >
                    {
                        isShow? <AiOutlineClose/> : <FaBars />
                    }
                </button>
            </div>
        </nav>
    )
}

export default NavBar