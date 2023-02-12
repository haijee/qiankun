const microApps = [
  {
    name: "sub-vue",
    entry: "//localhost:7777",
    activeRule: "/sub-vue",
  },
  {
    name: "sub-react",
    entry: "//localhost:7788",
    activeRule: "/sub-react",
  },
];

const apps = microApps.map((item) => {
  return {
    ...item,
    container: "#subapp", // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
    },
  };
});

export default apps;
