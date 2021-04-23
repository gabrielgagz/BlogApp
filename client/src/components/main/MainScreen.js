import React, { useState } from 'react';
import { NavBar } from '../ui/NavBar';
import { PostsList } from './PostsList';
import { AppContext } from '../../context/AppContext';

export const MainScreen = () => {

    const [reload, setReload] = useState( false );

    return (
            <>
            <NavBar />
            <AppContext.Provider value={{ reload, setReload }}>
                <PostsList />
            </AppContext.Provider>
            </>
    )
}
