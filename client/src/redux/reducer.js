import {ADD_DATA_FROM_SERVER} from '../utils/const';

const initialState = {
  tickers: [],
};

export default function reducer(state = initialState, action) {
    
  switch (action.type) {
    case ADD_DATA_FROM_SERVER: {
      return {
        ...state,
        tickers:  action.data,
      };
    }

    default: {
      return state;
    }
  }
}