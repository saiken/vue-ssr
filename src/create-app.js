/**
 * config/server.js で指定し、npm build時に利用
 */
import Vue from "vue"
import Hello from "./Hello.vue"

export function createApp() {
  return new Vue({
    el: "#app",
    render: h => h(Hello)
  })
}
