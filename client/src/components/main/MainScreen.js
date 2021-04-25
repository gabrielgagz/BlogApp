import React, { useState } from 'react';
import { NavBar } from '../ui/NavBar';
import { PostsList } from './PostsList';
import { AppContext } from '../../context/AppContext';
import '../../css/main.css'

export const MainScreen = () => {

    const [reload, setReload] = useState( false );
    const [edit, setEdit] = useState( false );

    return (
            <>
                <AppContext.Provider value={{ reload, setReload, edit, setEdit }}>
                    <NavBar />
                    <PostsList />
                    <button
                                className="btn-newpost shadow"
                                data-bs-toggle='modal'      
                                data-bs-target='#addEditModal'
                                onClick={ () => setEdit(false) }
                            >
                                <i class="fas fa-feather"></i>
                    </button>
                </AppContext.Provider>
            </>
    )
}
