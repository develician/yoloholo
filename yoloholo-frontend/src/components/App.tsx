import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage,
        AuthPage } from 'pages';

const App = () => {
    return (
        <div>
            <Switch>
            <Route exact={true} path="/" component={HomePage}/>
            <Route exact={false} path="/auth/login" component={AuthPage}/>
            </Switch> 
        </div>
    );
};

export default App;