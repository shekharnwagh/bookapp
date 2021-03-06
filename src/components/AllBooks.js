import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BookApi from '../data/BookApi';
import { NavLink } from 'react-router-dom';

class AllBooks extends Component {
    constructor(props) {
        super(props);
        this.rowDelete = this.rowDelete.bind(this);
        this.state = {
            books: []
        };
    }
    
    componentDidMount() {
        this.setState({ books: BookApi.getAllBooks() });
    }

    rowDelete=(id)=>{
        for(let i = 0; i<this.state.books.length; i++){
            if(this.state.books[i].id==id){
                this.state.books.splice(i,1);
                this.setState({books: BookApi.getAllBooks() });
            }
        }
    }

    render() {
        var bookNodes = this.state.books.map(book => (
            <tr>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td>
                    <div class="row">
                    <NavLink class="col-sm-4" to={`/edit/${book.id}`}><button class="btn btn-primary col-sm-12">Edit</button></NavLink>
                    <button class="btn btn-danger col-sm-4" onClick={() => this.rowDelete(book.id)}>Delete</button>
                    </div>
                </td>
            </tr>   
        ))
        return (  
            <div>
                <h1>BOOK LIST</h1>
                <table class="table table-striped" border="1">
                    <thead class="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookNodes}
                    </tbody>
                </table><br></br>
                <NavLink to="/addbook"><button class="btn btn-success col-sm-2">Add Book</button></NavLink>
            </div>
        );
    }
}
 
export default AllBooks;