import React, { useState, useEffect } from 'react';
import { addAccount, updateAccount } from './apiService';

const AccountForm = ({ account, onSave }) => {
    const [formAccount, setFormAccount] = useState({
        id: 0,
        accountNumber: '',
        balance: 0,
        clientId: 0,
        client: {
            id: 0,
            name: '',
            email: ''
        }
    });

    useEffect(() => {
        if (account) {
            setFormAccount(account); // Populate form if editing
        }
    }, [account]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormAccount((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleClientChange = (e) => {
        const { name, value } = e.target;
        setFormAccount((prev) => ({
            ...prev,
            client: {
                ...prev.client,
                [name]: value
            }
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formAccount.id === 0) {
            await addAccount(formAccount);
        } else {
            await updateAccount(formAccount.id, formAccount);
        }
        onSave();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>{formAccount.id ? 'Edit Account' : 'Add Account'}</h3>

            <div>
                <label>Account Number:</label>
                <input
                    type="text"
                    name="accountNumber"
                    value={formAccount.accountNumber}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label>Balance:</label>
                <input
                    type="number"
                    name="balance"
                    value={formAccount.balance}
                    onChange={handleChange}
                    required
                />
            </div>

            <h4>Client Details</h4>

            <div>
                <label>Client Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formAccount.client?.name || ''}
                    onChange={handleClientChange}
                    required
                />
            </div>

            <div>
                <label>Client Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formAccount.client?.email || ''}
                    onChange={handleClientChange}
                    required
                />
            </div>

            <button type="submit">Save</button>
        </form>
    );
};

export default AccountForm;
