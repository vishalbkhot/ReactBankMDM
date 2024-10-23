import React from 'react';
import ClientList from './component/ClientList';
import BookList from './component/BookList';
import AccountList from './component/AccountList';

const App = () => {
    return (
        <div>
            <h1>Client Management</h1>
            <ClientList />
            <h1>Book Management</h1>
            <BookList/>
            <h1>Account Management</h1>
            <AccountList/>
        </div>
    );
};

export default App;
