import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/navbar.css';

export const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-4 shadow text-center'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/'>
                    Navbar
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <div className='navbar-nav'>
                        <span className='nav-item'>
                            <Link
                                    className='nav-link active'
                                    aria-current='page'
                                    to='/'
                                >
                                    Cat1
                            </Link>
                        </span>
                        <span className='nav-item'>
                            <Link
                                    className='nav-link active'
                                    aria-current='page'
                                    to='/'
                                >
                                    Cat2
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};
