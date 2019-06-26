import Vue from "vue";

import App from "./App";

import designsystem from "../src";

// Our designsystem is a Vue plugin
Vue.use(designsystem);

new Vue({
  el: "#app",
  render: h => h(App)
});
