import { initialState } from '../state';
import {
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCH_INITIAL,
  ADD_REQUEST,
  MODAL_REQUEST
} from '../base';

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      state.data.data = action.payload.data;
      break;
    
    case FETCH_FAILURE:
      state.data.error = action.payload.error;
      state.data.status = action.payload.status;
      break;

    case FETCH_INITIAL:
      state.data.data = [];
      break;

    case ADD_REQUEST:
      state.add.add = [...state.add.add, action.payload];
      break;

    case MODAL_REQUEST:
      state.modal.modal = action.payload;
      break;

    default:
      break;
  };
  return state;
};

export default reducers;