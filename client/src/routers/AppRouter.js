import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { MainScreen } from '../components/MainScreen';

export const AppRouter = () => {

    return (
        <Router>
            <>
                <Switch>
                    <Route exact path='/blog' component={ MainScreen } />
                    <Route exact path='/' component={ MainScreen } />
                    <Redirect to='/' />
                </Switch>
            </>
        </Router>
    )
}
