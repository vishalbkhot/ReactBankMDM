import React, { useState, useEffect } from 'react';
import { createClient, updateClient, getClientById } from './apiService';

const ClientForm = ({ clientId, refreshClients }) => {
    const [client, setClient] = useState({ id: 0, name: '', email: '' });

    useEffect(() => {
        if (clientId) {
            getClientById(clientId).then((response) => setClient(response.data));
        }
    }, [clientId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClient({ ...client, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (clientId) {
            updateClient(clientId, client).then(() => refreshClients());
        } else {
            createClient(client).then(() => refreshClients());
        }
        setClient({ id: 0, name: '', email: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={client.name}
                onChange={handleInputChange}
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
                value={client.email}
                onChange={handleInputChange}
                placeholder="Email"
            />
            <button type="submit">Save Client</button>
        </form>
    );
};

export default ClientForm;
