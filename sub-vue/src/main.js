import "./public-path";
import { createApp } from "vue";
import { createRouter, createMemoryHistory } from "vue-router";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import routes from "./router";
import App from "./App.vue";

let app = null;
let router = null;
function render(props = {}) {
  const { container, routerBase } = props;
  console.log("render", props);
  router = createRouter({
    history: createMemoryHistory(
      window.__POWERED_BY_QIANKUN__ ? routerBase : "/"
    ),
    routes,
  });

  app = createApp(App);
  app.use(router);
  app.mount(container ? container.querySelector("#app") : "#app");
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__ || window.__POWERED_BY_QIANKUN__) {
  console.log(qiankunWindow.__POWERED_BY_QIANKUN__);
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render(props);
}

export async function unmount() {
  app.unmount();
  app._container.innerHTML = "";
  app = null;
  router = null;
}

renderWithQiankun({
  mount,
  bootstrap,
  unmount,
});
