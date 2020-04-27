import React, {Suspense} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from "../routes";
import {Loaders} from "./Loaders";

const App = () => {
    const routes = useRoutes('text')
    return (
        <Suspense fallback={<Loaders/>}>
            <Router basename='/'>
                {routes}
            </Router>
        </Suspense>
    );
}

export default App;
