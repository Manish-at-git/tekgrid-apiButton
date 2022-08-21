import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getData } from "../redux/actions/index";

import { wrapper } from "../redux/store";
import { END } from "redux-saga";
import React from "react";

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.state.data);
  // // setInterval(() => {
  // dispatch(getData());
  // // }, 10000);
  // while (1) {
  //   setTimeout(() => {
  //     // dispatch(getData());
  //     console.log("fhhhhhhhhhhirst");
  //   }, 10000);

  // }

  // if (typeof document === "undefined") {
  // } else {
  //   document.getElementById("button");
  //   // during client's browser evaluation
  // }

  // // document.getElementById("button").style.color = "red";
  // // setInterval(() => {
  // //   btn.click();
  // // }, 5000);

  return (
    <div style={{ margin: "30px" }}>
      <button onClick={() => dispatch(getData())} style={{ margin: "20px" }}>
        button
      </button>
      {data}
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    // setInterval(async () => {
    //   store.dispatch(getData());
    //   store.dispatch(END);
    //   await store.sagaTask.toPromise();
    // }, 20000);
    store.dispatch(getData());
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);
