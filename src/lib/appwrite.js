import { Client, Account, Databases } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68c2e29d000667e8e9b4');

export const account = new Account(client);
export const databases = new Databases(client);
export { ID } from 'appwrite';
