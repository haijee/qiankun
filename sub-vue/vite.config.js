const { name } = require("./package.json");
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";
// https://vitejs.dev/config/

export default defineConfig({
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  server: {
    port: 7777,
    host: "localhost",
    // 关闭主机检查，使微应用可以被 fetch
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  plugins: [
    vue(),
    qiankun("sub-vue", {
      // 微应用名字，与主应用注册的微应用名字保持一致
      useDevMode: true,
    }),
  ],
});
