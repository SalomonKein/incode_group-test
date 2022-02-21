import {
  ADD_DATA_FROM_SERVER,
  RECONNECT,
  REMOVE_INDEX,
  SET_ON_OFF_STATUS,
} from '../utils/const';

export function setTickers(tickets) {
  return {
    type: ADD_DATA_FROM_SERVER,
    data: tickets,
  };
}

export function setOnOffStatus(status) {
  return {
    type: SET_ON_OFF_STATUS,
    data: status,
  };
}

export function removeIndex(boolean) {
  return {
    type: REMOVE_INDEX,
    data: boolean,
  };
}

export function reconnect(boolean) {
  return {
    type: RECONNECT,
    data: boolean,
  };
}
