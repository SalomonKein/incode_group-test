import io from 'socket.io-client';
import { SERVER_URL } from '../utils/const';

const socket = io(SERVER_URL);


export function getTickets(EVENT, func) {
socket.emit('start');
socket.on(EVENT, func)     
}
