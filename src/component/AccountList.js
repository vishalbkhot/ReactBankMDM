import React, { useState, useEffect } from 'react';
import { getAllAccounts, deleteAccount } from './apiService';

const AccountList = ({ onEdit }) => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        loadAccounts();
    }, []);

    const loadAccounts = async () => {
        const response = await getAllAccounts();
        setAccounts(response.data);
    };

    const handleDelete = async (id) => {
        await deleteAccount(id);
        loadAccounts(); // Refresh the list after deleting
    };

    return (
        <div>
            <h2>Account List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Account Number</th>
                        <th>Balance</th>
                        <th>Client Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.length > 0 ? (
                        accounts.map((account) => (
                            <tr key={account.id}>
                                <td>{account.id}</td>
                                <td>{account.accountNumber}</td>
                                <td>{account.balance}</td>
                                <td>{account.client?.name || 'No Client'}</td>
                                <td>
                                    <button onClick={() => onEdit(account)}>Edit</button>
                                    <button onClick={() => handleDelete(account.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No accounts available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AccountList;
