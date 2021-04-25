import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../helpers/apiHelper';
import logo from '../../assets/logo.svg';
import '../../css/navbar.css';

export const NavBar = () => {

    // TODO: improve
    const [dataState, setDataState] = useState({ init: 'init' });

    useEffect(() => {
        
        // Get all categories
        getCategories()
            .then(data => setDataState(data) )
            .catch(reason => console.log(reason.message));

    }, []);

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-4 shadow d-flex px-2'>
            <div className='container-fluid'>
                <Link className='justify-content-start ms-2' to='/'>
                    <img className='img-logo img-fluid' src={ logo } alt='Logo'/>
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
                <div className='nav-center collapse navbar-collapse justify-content-center w-100' id='navbarNav'>
                    <div className='navbar-nav text-center justify-content-start'>
                        <div className='nav-item'>
                            <Link
                                className='nav-link active'
                                aria-current='page'
                                to='/'
                            >
                                { ( dataState.length > 0 ) && 'All' }
                            </Link>
                        </div>
                        {
                            ( dataState.length > 0 ) &&
                            
                                // Iterate trough catagories
                                dataState.map( ( { id, name } ) => {

                                    return (
                                        <span className='nav-item' key={ id }>
                                            <Link
                                                className='nav-link active'
                                                aria-current='page'
                                                to={ name }
                                            >
                                                {name}
                                            </Link>
                                        </span>
                                    )

                                })
                        }
                    </div>
                    <div className='justify-content-end'>
                </div>
                </div>
            </div>
        </nav>
    );
};
