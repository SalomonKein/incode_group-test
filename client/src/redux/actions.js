   
import {ADD_DATA_FROM_SERVER} from '../utils/const';

export function setTickers(tickets) {
  return {
    type: ADD_DATA_FROM_SERVER,
    data: tickets,
  };
}