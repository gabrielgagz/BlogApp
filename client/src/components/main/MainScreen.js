import React from 'react';
import { NavBar } from '../ui/NavBar';
import { PostsList } from './PostsList';

export const MainScreen = () => {
    return (
        <>
            <NavBar />
            <PostsList />
        </>
    )
}
