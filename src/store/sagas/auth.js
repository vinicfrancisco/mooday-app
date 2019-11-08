import {call, put, takeLatest, delay} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {Actions} from 'react-native-router-flux';
import {api} from '~/services';

import {Creators as AuthActions, Types as AuthTypes} from '~/store/ducks/auth';

function* loginRequest(action) {
  try {
    const {data} = action.payload;
    const url = '/login';
    const response = yield call(api.post, url, data);
    const {token} = response.data;

    AsyncStorage.setItem('auth_token', token);

    yield put(Actions.home());
    yield put(AuthActions.loginSuccess());
  } catch (error) {
    yield put(AuthActions.loginFailure());
  }
}

function* registerRequest(action) {
  try {
    const {data} = action.payload;
    const url = '/register';
    yield call(api.post, url, data);

    yield put(
      AuthActions.loginRequest({
        email: data.email,
        password: data.password,
      }),
    );

    yield put(Actions.home());
    yield put(AuthActions.signUpSuccess());
  } catch (error) {
    yield put(AuthActions.signUpFailure());
  }
}

function* logoutRequest() {
  try {
    AsyncStorage.clear();
    yield delay(500);
    yield put(Actions.login());

    yield put(AuthActions.logoutSuccess());
  } catch (error) {
    yield put(AuthActions.logoutFailure());
  }
}

export default function* saga() {
  yield takeLatest(AuthTypes.LOGIN_REQUEST, loginRequest);
  yield takeLatest(AuthTypes.SIGNUP_REQUEST, registerRequest);
  yield takeLatest(AuthTypes.LOGOUT_REQUEST, logoutRequest);
}
