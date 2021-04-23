import React, { useState, useEffect, useRef } from 'react'

export default function SearchBar(props) {
    const [query, setQuery] = useState({
        textInput: "",
        resultsCount: "10",
        publicationType: "all",
        sortOrder: "relevance"
    })
    const [filtersVisible, setFiltersVisible] = useState(false)
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    function handleChange(e) {
        const { name, value } = e.target
        setQuery({
            ...query,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (query.textInput) {
            props.fetchData(query)
            setFiltersVisible(false)
        }
    }

    function toogleFilters(e) {
        setFiltersVisible(true)
    }

    function clearInputField() {
        setQuery({
            textInput: "",
            resultsCount: "10",
            publicationType: "all",
            sortOrder: "relevance"
        })
    }

    console.log(query)

    return (
        <div className="search-form">
            <form onSubmit={handleSubmit}>
                <div className="search-bar">
                    <input
                        type="text"
                        id="query"
                        name="textInput"
                        placeholder="type here"
                        aria-label="Search by title, author or subject."
                        title="Search by title, author or subject."
                        value={query.textInput}
                        onChange={handleChange}
                        ref={inputRef}
                        required
                    />
                    <button type="reset" className="reset-btn" onClick={clearInputField}>⨉</button>
                    <button type="submit" className="search-btn">Search</button>
                </div>
                {!filtersVisible && <button type="button" className="toggle-filters-btn" onClick={toogleFilters}>▹Filters</button>}
                <fieldset className={`search-options ${filtersVisible ? "visible" : ""}`}>
                    <div className="search-option">
                        <legend>Number of results: </legend>
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="resultsCount"
                                value="10"
                                checked={query.resultsCount === "10"}
                                onChange={handleChange}
                            />
                                10
                        </label>
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="resultsCount"
                                value="20"
                                checked={query.resultsCount === "20"}
                                onChange={handleChange}
                            />
                                20
                        </label>
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="resultsCount"
                                value="30"
                                checked={query.resultsCount === "30"}
                                onChange={handleChange}
                            />
                                30
                        </label>
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="resultsCount"
                                value="40"
                                checked={query.resultsCount === "40"}
                                onChange={handleChange}
                            />
                                40
                        </label>
                    </div>
                    <div className="search-option">
                        <legend>Publication type: </legend>
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="publicationType"
                                value="all"
                                checked={query.publicationType === "all"}
                                onChange={handleChange}
                            />
                                All
                        </label>
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="publicationType"
                                value="books"
                                checked={query.publicationType === "booka"}
                                onChange={handleChange}
                            />
                                Books
                        </label>
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="publicationType"
                                value="magazines"
                                checked={query.publicationType === "magazines"}
                                onChange={handleChange}
                            />
                                Magazines
                        </label>
                    </div>
                    <div className="search-option">
                        <legend>Sort by: </legend>
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="sortOrder"
                                value="relevance"
                                checked={query.sortOrder === "relevance"}
                                onChange={handleChange}
                            />
                                Relevance
                        </label>
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="sortOrder"
                                value="newest"
                                checked={query.sortOrder === "newest"}
                                onChange={handleChange}
                            />
                                Newest
                        </label>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
