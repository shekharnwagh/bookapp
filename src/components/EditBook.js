import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookApi from '../data/BookApi';
 

class EditBook extends Component {
    
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.state = {
            author : '',
            name : '',
            price : 0,
            id: 0
        }
    }

    componentDidMount() {
        this.setState({ name: BookApi.getBook(this.props.match.params.id).name });
        this.setState({ author: BookApi.getBook(this.props.match.params.id).author });
        this.setState({ price: BookApi.getBook(this.props.match.params.id).price });
        this.setState({ id: BookApi.getBook(this.props.match.params.id).id });
    }

    handleName(event) {
        this.setState({ name : event.target.value});
    }

    handleAuthor(event) {
        console.log(event.target.value);
        this.setState({ author : event.target.value});
    }

    handlePrice(event) {
        console.log(event.target.value);
        this.setState({ price : event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        var book = {};
        book["id"] = this.state.id;
        book["name"] = this.state.name;
        book["author"] = this.state.author;
        book["price"] = this.state.price;
        BookApi.editBook(this.state.id, book);
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
                <h1>EDIT BOOK</h1>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input id="name" class="form-control" type="text" ref="name" value={this.state.name} onChange={(e) => this.setState({name : e.target.value})} />
                </div>
                <div class="form-group">
                    <label for="author">Author:</label>
                    <input id="author" class="form-control" type="text" ref="author" value={this.state.author} onChange={(e) => this.setState({author : e.target.value})}/>
                </div>
                <div class="form-group">
                    <label for="price">Price:</label>
                    <input id="price" class="form-control" type="number" ref="price" value={this.state.price} onChange={(e) => this.setState({price : e.target.value})}/>
                </div>
                <span>
                    <input type="submit" value="Save" class="btn btn-success col-sm-2" onClick={this.onSubmit}/>
                    <span class="col-sm-1"></span>
                    <NavLink to="/"><button class="btn btn-success col-sm-2">Cancel</button></NavLink>
                </span>
            </form>
          );
    }
}
 
export default EditBook;

/*

*/