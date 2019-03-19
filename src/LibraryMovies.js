import React, { Component } from 'react';

const Book=(props)=>{
    return (
        <tr key={props.book.id}>
                                        <td>{props.book.id}</td>
                                        <td>{props.book.title}</td>
                                        <td>{props.book.author}</td>
                                        <td><button onClick={()=>{
                                            // deleteBook(props.book.id)
                                        }}>Delete</button></td>
                                    </tr>
    )
}


class Library extends Component {
    constructor() {
        super();

        this.state = {
            books: [],
            book: {
                title: '', 
                author: ''
            }
        }

    }

    onTitleChange=(e)=>{
        var title=e.target.value;
        var book=Object.assign({},this.state.book);
        book.title=title;
        this.setState({
            book
        })
    }

    onAuthorChange=(e)=>{
        var author=e.target.value;
        var book=Object.assign({},this.state.book);
        book.author=author;
        this.setState({
            book
        })
    }

    addBook=(e)=>{
        e.preventDefault();

        var book=Object.assign({},this.state.book)
        book.id=this.state.books.length+1;

        this.setState({
            book
        },()=>{
            this.setState({
                books:[
                    ...this.state.books,
                    this.state.book
                ],
                book:{
                    title:'',
                    author:''
                }
            })
        })

        
    }

    deleteBook=(id)=>{
        debugger;
        var newBooks=this.state.books.filter((book)=>{
            return book.id!=id;
        })

        this.setState({
            books:newBooks
        })
    }

    render() {
        return (
            <div>
                <h1>My Library</h1>
                <input type="text" value={this.state.book.title} name="title" onChange={this.onTitleChange} />
                <input type="text" value={this.state.book.author} name="author" onChange={this.onAuthorChange} />
                <button onClick={this.addBook}>Add Book</button>
                <table>
                    <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Delete?</th>
                    </tr>
                    {
                        this.state.books.map((book) => {
                            return (<Book key={book.id} book={book}/>)
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Library;