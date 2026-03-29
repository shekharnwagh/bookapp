import React, { Component } from 'react';
import {Router, Route, IndexRoute, Redirect } from 'react-router';

import App from './app';
import AllBooks from './components/AllBooks';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';

export default(
    <Route path = "/" component = {App}>
    <IndexRoute component = {AllBooks}/>
    <Route path = "addbook" component = {AddBook}/>
    <Route path = "edit/:id" component = {EditBook}/>
    </Route>
);