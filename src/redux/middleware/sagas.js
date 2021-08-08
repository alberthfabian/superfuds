import { all, takeLatest } from 'redux-saga/effects';
import { fetchProduct } from '../middleware';
import {
  FETCH_REQUEST
} from '../base';

export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_REQUEST, fetchProduct)
  ]);
}