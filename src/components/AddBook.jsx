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
        if (!book.name.length) {
            alert("Please enter a name !");
        }
        else if (!book.author.length) {
            alert("Please enter a author name");
        }
        else if (!book.price) {
            alert("Please enter a price")
        }
        else if (isNaN(book.price)) {
            alert("Please enter a number for price");
        }
        else {
            BookApi.saveBook(book);
            this.props.history.push('/');
        }
    }

    render() { 
        return (

            <form class="col-sm-6">
                <h1>ADD BOOK</h1>
                    <div class="form-group">
                        <label for="name">Name:<span style={{color:"red"}}>*</span></label>
                        <input id="name" type="text" ref="name" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label for="author">Author:<span style={{color:"red"}}>*</span></label>
                        <input id="author" type="text" ref="author" class="form-control"/>
                    </div>
                    <div class="form-group">    
                        <label for="price">Price:<span style={{color:"red"}}>*</span></label>
                        <input id="price" type="number" ref="price" class="form-control"/>
                    </div>
                    <div>
                        <span style={{color:"red"}}>*</span>Mandatory fields
                    </div>
                    <br></br>
                    <span>
                        <input type="submit" value="Save" class="btn btn-success col-sm-3" onClick={this.onSubmit}/>
                        <span class="col-sm-1"></span>
                        <NavLink to="/"><button class="btn btn-danger col-sm-3">Cancel</button></NavLink>
                    </span>
            </form>
          );
    }
}
 
export default withRouter(AddBook);