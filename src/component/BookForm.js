import React, { useState, useEffect } from 'react';
import { createBook, updateBook, getBookById } from './apiService';

const BookForm = ({ bookId, refreshBooks }) => {
    const [book, setBook] = useState({ id: 0, title: '', accounts: [] });
    const [account, setAccount] = useState({ id: 0, accountNumber: '', balance: 0, clientId: 0, client: { id: 0, name: '', email: '' } });

    useEffect(() => {
        if (bookId) {
            getBookById(bookId).then((response) => setBook(response.data));
        }
    }, [bookId]);

    const handleBookInputChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleAccountInputChange = (e) => {
        const { name, value } = e.target;
        setAccount({ ...account, [name]: value });
    };

    const addAccount = () => {
        setBook({ ...book, accounts: [...book.accounts, account] });
        setAccount({ id: 0, accountNumber: '', balance: 0, clientId: 0, client: { id: 0, name: '', email: '' } });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (bookId) {
            updateBook(bookId, book).then(() => refreshBooks());
        } else {
            createBook(book).then(() => refreshBooks());
        }
        setBook({ id: 0, title: '', accounts: [] });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Book</h3>
            <input
                type="text"
                name="title"
                value={book.title}
                onChange={handleBookInputChange}
                placeholder="Book Title"
            />

            <h4>Add Account</h4>
            <input
                type="text"
                name="accountNumber"
                value={account.accountNumber}
                onChange={handleAccountInputChange}
                placeholder="Account Number"
            />
            <input
                type="number"
                name="balance"
                value={account.balance}
                onChange={handleAccountInputChange}
                placeholder="Balance"
            />
            <input
                type="text"
                name="clientId"
                value={account.clientId}
                onChange={handleAccountInputChange}
                placeholder="Client ID"
            />
            <input
                type="text"
                name="clientName"
                value={account.client.name}
                onChange={(e) => setAccount({ ...account, client: { ...account.client, name: e.target.value } })}
                placeholder="Client Name"
            />
            <input
                type="email"
                name="clientEmail"
                value={account.client.email}
                onChange={(e) => setAccount({ ...account, client: { ...account.client, email: e.target.value } })}
                placeholder="Client Email"
            />

            <button type="button" onClick={addAccount}>Add Account</button>
            <button type="submit">Save Book</button>
        </form>
    );
};

export default BookForm;
