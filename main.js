Vue.component("task", {
  template: "<li><slot></slot> </li>",
  data() {
    return {
        message:"Some Data"
    };
  },
});

new Vue({
  el: "#root",
});
