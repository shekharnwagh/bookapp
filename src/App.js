import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from 'react-router-dom';
import AllBooks from './components/AllBooks';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';

export default class App extends React.Component {
    
    render() { 
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component = {AllBooks}/>
                        <Route path = "/addbook" component = {AddBook}/>
                        <Route path = "/edit/:id" component = {EditBook}/>
                    </Switch>
                </div>
            </Router>
          );
    }
}
 
