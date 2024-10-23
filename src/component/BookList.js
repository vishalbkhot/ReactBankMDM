import React, { useEffect, useState } from 'react';
import { getAllBooks, deleteBook } from './apiService';
import BookForm from './BookForm';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [selectedBookId, setSelectedBookId] = useState(null);

    useEffect(() => {
        refreshBooks();
    }, []);

    const refreshBooks = () => {
        getAllBooks().then((response) => setBooks(response.data));
    };

    const handleDelete = (id) => {
        deleteBook(id).then(() => refreshBooks());
    };

    const handleEdit = (id) => {
        setSelectedBookId(id);
    };

    return (
        <div>
            <h2>Book List</h2>
            <BookForm bookId={selectedBookId} refreshBooks={refreshBooks} />
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <strong>{book.title}</strong>
                        <ul>
                            {book.accounts.map((account) => (
                                <li key={account.id}>
                                    Account #{account.accountNumber} - Balance: {account.balance}
                                    <br />
                                    Client: {account.client ? (
                                        <>
                                            {account.client.name} ({account.client.email})
                                        </>
                                    ) : (
                                        'No client information available'
                                    )}
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => handleEdit(book.id)}>Edit</button>
                        <button onClick={() => handleDelete(book.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
