import React, { useEffect, useState } from 'react';
import { getAllClients, deleteClient } from './apiService';
import ClientForm from './ClientForm';

const ClientList = () => {
    const [clients, setClients] = useState([]);
    const [selectedClientId, setSelectedClientId] = useState(null);

    useEffect(() => {
        refreshClients();
    }, []);

    const refreshClients = () => {
        getAllClients().then((response) => setClients(response.data));
    };

    const handleDelete = (id) => {
        deleteClient(id).then(() => refreshClients());
    };

    const handleEdit = (id) => {
        setSelectedClientId(id);
    };

    return (
        <div>
            
            <ClientForm clientId={selectedClientId} refreshClients={refreshClients} />
            <ul>
                {clients.map((client) => (
                    <li key={client.id}>
                        {client.name} ({client.email}) 
                        <button onClick={() => handleEdit(client.id)}>Edit</button>
                        <button onClick={() => handleDelete(client.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientList;
