import { put, call } from 'redux-saga/effects';
import apiCall from '../api';
import {
  FETCH_SUCCESS
} from '../base';

const API = process.env.REACT_APP_API;

export function* fetchProduct() {
  try {
    const data = yield call(apiCall, 'get', API);
    yield put({ 
      type: FETCH_SUCCESS, 
      payload: {
        data
      }
    });
  } catch (e) {
    const { status, error } = e;
    yield put({ 
      type: FETCH_SUCCESS, 
      payload: {
        status, 
        error
      } 
    });
  }
}