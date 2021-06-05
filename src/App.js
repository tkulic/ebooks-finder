import React, { useState } from 'react'

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import BooksGrid from './components/BooksGrid'

import loadingSpinner from "./img/loading-spinner.gif"
import { formatAPIData } from "./utils/formatAPIData"
import Footer from './components/Footer'

export default function App() {
    const [searchedBooks, setSearchedBooks] = useState([])
    const [message, setMessage] = useState("")

    function fetchData(query) {
        console.log(query.eBooksonly)
        console.log(query.textInput)
        const eBooks = query.eBooksonly ? "&filter=free-ebooks" : ""
        console.log(eBooks)
        setMessage(<img src={loadingSpinner} alt="loading spinner" className="loading-spinner" />)
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${query.textInput}&maxResults=${query.resultsCount}&printType=${query.publicationType}&orderBy=${query.sortOrder}${eBooks}&filter=free-ebooks`)
            .then(res => res.json())
            .then(data => {
                setSearchedBooks(formatAPIData(data.items))
                setMessage("")
            })
            .catch(err => {
                console.log(err.message)
                setMessage(err.message)
                setSearchedBooks([])
            })
    }

    return (
        <div>
            <Header />
            <div className="wrapper">
                <SearchBar fetchData={fetchData} />
                <BooksGrid booksData={searchedBooks} />
                <p className="message">{message}</p>
                <Footer />
            </div>

        </div >
    )
}
