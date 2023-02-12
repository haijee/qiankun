import { registerMicroApps, start, setDefaultMountApp } from "qiankun";
import React from "react";
import ReactDOM from "react-dom/client";
import apps from "./micro-app";
import App from "./App";

registerMicroApps(apps, {
  beforeLoad: (app) => {
    console.log("before load app.name====>>>>>", app.name);
  },
  beforeMount: [
    (app) => {
      console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
    },
  ],
  afterMount: [
    (app) => {
      console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
    },
  ],
  afterUnmount: [
    (app) => {
      console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
    },
  ],
});
// setDefaultMountApp("/sub-vue");
start();

const rootDom = document.getElementById("root");
const root = ReactDOM.createRoot(rootDom);
root.render(<App />);
