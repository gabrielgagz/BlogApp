import React, { useState } from 'react';
import { NavBar } from '../ui/NavBar';
import { PostsList } from './PostsList';
import { AppContext } from '../../context/AppContext';

export const MainScreen = () => {

    const [reload, setReload] = useState( false );
    const [edit, setEdit] = useState( false );

    return (
            <>
                <AppContext.Provider value={{ reload, setReload, edit, setEdit }}>
                    <NavBar />
                    <PostsList />
                </AppContext.Provider>
            </>
    )
}
