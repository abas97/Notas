export const nombre = 'fernando'
import dotenv from 'dotenv';
import Server from './models/server';

dotenv.config()
const server = new Server()
server.listen()
