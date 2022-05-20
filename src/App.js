import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ShowNumber from "./ShowNumbe";

function App() {
  return (
    <>
      <ShowNumber numbers={Number(localStorage.getItem("number"))} />
      {/* <ShowNumber numbers={4} />
      <ShowNumber numbers={7} />
      <ShowNumber numbers={3} />
      <ShowNumber numbers={6} />
      <ShowNumber numbers={1} />
      <ShowNumber numbers={82} />
      <ShowNumber numbers={6} />
      <ShowNumber numbers={9} />
      <ShowNumber numbers={4} /> */}
    </>
  );
}

export default App;
