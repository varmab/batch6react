import React, {Component} from 'react'
import Book from './Book'

class BookList extends Component{
    constructor(props){
        super(props);

        console.log(props)

        this.state={
            books:props.books
        }
    }

    addToWishlist=(book)=>{
        console.log(book)
        this.props.addToWishlist(book);
    }

    render(){
        return(
            <React.Fragment>
                {
                    this.state.books.map((book)=>{
                        return <Book key={book.id} book={book} addToWishlist={this.addToWishlist}/>
                    })
                }
            </React.Fragment>
        )
    }
}

export default BookList;