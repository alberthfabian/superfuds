import {
  ADD_REQUEST,
  FETCH_REQUEST,
  MODAL_REQUEST,
  DELETE_REQUEST,
  REMOVE_REQUEST,
  LESS_REQUEST
} from '../base';

export const fetchProduct = () => ({
  type: FETCH_REQUEST
});

export const addProduct = id => ({
  type: ADD_REQUEST,
  payload: id
});

export const deleteProduct = id => ({
  type: DELETE_REQUEST,
  payload: id
});

export const openModal = open => ({
  type: MODAL_REQUEST,
  payload: open
});

export const removeData = id => ({
  type: REMOVE_REQUEST,
  payload: id
});

export const lessData = id => ({
  type: LESS_REQUEST,
  payload: id
});

