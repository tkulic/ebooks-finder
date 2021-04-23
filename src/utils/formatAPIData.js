import placeholderImg from "../img/book-placeholder.svg"

export function formatAPIData(data) {
    if (!data) {
        return []
    } else {
        const booksData = data.map(dbObject => {
            const id = dbObject.id

            const { volumeInfo } = dbObject
            const title = volumeInfo.title
            const description = "subtitle" in volumeInfo ? volumeInfo.subtitle : "No description"
            const authors = "authors" in volumeInfo ? volumeInfo.authors : "N/A"
            const publisher = "publisher" in volumeInfo ? volumeInfo.publisher : "N/A"
            const publishedDate = "publishedDate" in volumeInfo ? volumeInfo.publishedDate : "N/A"
            const ISBN = "industryIdentifiers" in volumeInfo ? volumeInfo.industryIdentifiers[0].identifier : "N/A"
            const pageCount = "pageCount" in volumeInfo ? volumeInfo.pageCount : "N/A"
            const thumbnail = "imageLinks" in volumeInfo ? volumeInfo.imageLinks.thumbnail : placeholderImg
            const googleBooksLink = volumeInfo.infoLink

            return {
                id,
                title,
                description,
                authors,
                publisher,
                publishedDate,
                ISBN,
                pageCount,
                thumbnail,
                googleBooksLink
            }
        })
        return booksData
    }
}




