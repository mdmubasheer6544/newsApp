import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './component/Home/Home';
import{BrowserRouter,Route,Link,Switch} from 'react-router-dom'


const Landing = () => {
    return (
        <BrowserRouter>
            <Home/>
        </BrowserRouter>
    );
};

export default Landing;