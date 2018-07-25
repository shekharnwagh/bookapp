import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import BookApi from '../data/BookApi';

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        var book = {};
        book.name = this.refs.name.value;
        book.author = this.refs.author.value;
        book.price = parseInt(this.refs.price.value);
        BookApi.saveBook(book);
        if (! isNaN(book.price)){
        this.props.history.push('/');     
        }
        else {
            alert("Please enter a number for price");
        }
    }

    render() { 
        return (

            <form class="col-sm-6">
                <h1>ADD BOOK</h1>
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input id="name" type="text" ref="name" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label for="author">Author:</label>
                        <input id="author" type="text" ref="author" class="form-control"/>
                    </div>
                    <div class="form-group">    
                        <label for="price">Price:</label>
                        <input id="price" type="number" ref="price" class="form-control"/>
                    </div>
                    <br></br>
                    <span>
                        <input type="submit" value="Save" class="btn btn-success col-sm-2" onClick={this.onSubmit}/>
                        <span class="col-sm-1"></span>
                        <NavLink to="/"><button class="btn btn-success col-sm-2">Cancel</button></NavLink>
                    </span>
            </form>
          );
    }
}
 
export default withRouter(AddBook);