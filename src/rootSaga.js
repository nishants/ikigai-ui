import {all} from 'redux-saga/effects';
import scatterSaga from './auth/scatter_saga';

export default function* rootSaga(){
    yield all([
        scatterSaga()
    ]);
}
