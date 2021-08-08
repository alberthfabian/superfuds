import {
  ADD_REQUEST,
  FETCH_REQUEST,
  MODAL_REQUEST
} from '../base';

export const fetchProduct = () => ({
  type: FETCH_REQUEST
});

export const addProduct = id => ({
  type: ADD_REQUEST,
  payload: id
});

export const openModal = open => ({
  type: MODAL_REQUEST,
  payload: open
});

