import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";

function* signIn(action) {
  console.log("TO DENTRO DO SAGA", action);
}

export default all([takeEvery("user/signInStart", signIn)]);
