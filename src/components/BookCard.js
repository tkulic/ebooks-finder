import React from 'react'

export default function BookCard({ bookData }) {
    return (
        <div className="book-card">
            <a href={bookData.googleBooksLink}><h2 className="book-title" target="_blank" rel="noreferrer">{bookData.title}</h2></a>
            <div className="flex-wrapper">
                <div className="col-left">
                    <p><span className="light-text">{bookData.description}</span></p>
                    <p><span className="light-text">Author:</span> {bookData.authors}</p>
                    <p><span className="light-text">Publisher:</span> {bookData.publisher}</p>
                    <p><span className="light-text">Published:</span> {bookData.publishedDate}</p>
                    <p><span className="light-text">ISBN:</span> {bookData.ISBN}</p>
                    <p><span className="light-text">Pages:</span> {bookData.pageCount}</p>
                </div>
                <div className="col-right">
                    <a href={bookData.googleBooksLink} target="_blank" rel="noreferrer">
                        <img src={bookData.thumbnail} alt="book cover" />
                    </a>
                </div>
            </div>
        </div>
    )
}

