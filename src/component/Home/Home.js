import React from "react";
import Header from "./Header";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Education from "../Education/Education";
import Corona from "../Corona/Corona";
import Sport from "../Sports/Sport";
import Main from "./Main";
import classes from './main.Module.css'
import Search from "../Search/Search";

const Home = (props) => {
  return (
    <>
      <Router>
       <Header {...props}/>
       <div className={classes.mainContainer}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/corona" component={Corona} />
          <Route exact path="/sport" component={Sport} />
          <Route exact path="/search/:searchKey" component={Search} />

        </Switch>
       </div>
        <footer className={classes.footer}>
            <div> 
                Md|Mubasheer|Development|Project<br/>
                &copy;Copy2021.All rights reserved.
            </div>
        </footer>
      </Router>
      
    </>
  );
};

export default Home;
