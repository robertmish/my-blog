import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';

export default client
