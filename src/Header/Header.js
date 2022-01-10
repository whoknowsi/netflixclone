import React, { useState, useEffect } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = ({ showHeader }) => {

    const [isOpen, setIsOpen] = useState();

    const handleExplorerClick = () => {
        if (isOpen) setIsOpen(false);
        else setIsOpen(true);
    }
    
    return (
        <header className={showHeader ? 'showHeader' : ''}>
            <div className="headerLeft">
                <img alt="Netflix Clone" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" href='/' />
                <ul>
                    <li className='navigationMenu' onClick={handleExplorerClick}>Explorar</li>
                    {isOpen ?
                        <div className="navigatonSubMenu" style={{ opacity: 1, transitionDuration: "200ms"}}>
                            <ul>
                                <li className='navigatonSubMenuItem'>Explorar</li>
                                <li className='navigatonSubMenuItem'>Inicio</li>
                                <li className='navigatonSubMenuItem'>Series</li>
                                <li className='navigatonSubMenuItem'>Películas</li>
                                <li className='navigatonSubMenuItem'>Novedades populares</li>
                                <li className='navigatonSubMenuItem'>Mi lista</li>
                            </ul>
                        </div> :
                        <div className="navigatonSubMenu" style={{ opacity: 0, transitionDuration: "50ms", visibility: "hidden" }}>
                        <ul>
                            <li className='navigatonSubMenuItem'>Explorar</li>
                            <li className='navigatonSubMenuItem'>Inicio</li>
                            <li className='navigatonSubMenuItem'>Series</li>
                            <li className='navigatonSubMenuItem'>Películas</li>
                            <li className='navigatonSubMenuItem'>Novedades populares</li>
                            <li className='navigatonSubMenuItem'>Mi lista</li>
                        </ul>
                    </div>
                    }
                    <li className='navigationItem'>Inicio</li>
                    <li className='navigationItem'>Series</li>
                    <li className='navigationItem'>Películas</li>
                    <li className='navigationItem'>Novedades populares</li>
                    <li className='navigationItem'>Mi lista</li>
                </ul>
            </div>
            <div className="headerRight">
                <div className="headerRightElement">
                    <SearchIcon />
                </div>
                <div className="headerRightElement">
                    <NotificationsIcon className="headerRightElement" />
                </div>
                <div className="headerRightElement">
                    <img src="https://archive.org/download/profiles_202104/default.png" alt="profile pictura" />
                </div>
            </div>
        </header>
    )
}

export default Header
