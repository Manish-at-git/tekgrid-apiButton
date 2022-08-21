import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import { LOAD_DATA } from "../actionTypes";
import { setData, setErrorData } from "../actions/index";

export function* handleLoadData() {
  try {
    const res = yield call(
      axios.get,
      "https://api.chucknorris.io/jokes/random"
    );

    yield put(setData(res.data));
    console.log(res.data, " second");
  } catch (error) {
    yield put(setErrorData(error.toString()));
  }
}

export default function* watchImagesLoad() {
  yield takeLatest(LOAD_DATA, handleLoadData);
}
