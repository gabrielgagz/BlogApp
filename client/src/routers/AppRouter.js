import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { MainScreen } from '../components/main/MainScreen';

export const AppRouter = () => {

    return (
        <Router>
            <>
                <Switch>
                    <Route exact path='/' component={ MainScreen } />
                    <Route exact path='/:urlcategory' component={ MainScreen } />
                    <Redirect to='/' />
                </Switch>
            </>
        </Router>
    )
}
