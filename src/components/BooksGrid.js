import React from 'react'
import BookCard from './BookCard'

export default function BooksGrid({ booksData }) {
    return (
        <div className="books-grid">
            {booksData.map(book => (
                <BookCard key={book.id} bookData={book} />
            ))}
        </div>
    )
}
