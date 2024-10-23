import axios from 'axios';

const apiBaseUrl = 'http://localhost:5204/api';

export const getAllClients = () => axios.get(`${apiBaseUrl}/Client`);
export const getClientById = (id) => axios.get(`${apiBaseUrl}/Client/${id}`);
export const createClient = (client) => axios.post(`${apiBaseUrl}/Client`, client);
export const updateClient = (id, client) => axios.put(`${apiBaseUrl}/Client/${id}`, client);
export const deleteClient = (id) => axios.delete(`${apiBaseUrl}/Client/${id}`);

export const getAllBooks = () => axios.get(`${apiBaseUrl}/Book`);
export const getBookById = (id) => axios.get(`${apiBaseUrl}/Book/${id}`);
export const createBook = (book) => axios.post(`${apiBaseUrl}/Book`, book);
export const updateBook = (id, book) => axios.put(`${apiBaseUrl}/Book/${id}`, book);
export const deleteBook = (id) => axios.delete(`${apiBaseUrl}/Book/${id}`);

export const getAllAccounts = () => axios.get(`${apiBaseUrl}/Account`);
export const getAccountById = (id) => axios.get(`${apiBaseUrl}/Account/${id}`);
export const createAccount = (account) => axios.post(`${apiBaseUrl}/Account`, account);
export const updateAccount = (id, account) => axios.put(`${apiBaseUrl}/Account/${id}`, account);
export const deleteAccount = (id) => axios.delete(`${apiBaseUrl}/Account/${id}`);
