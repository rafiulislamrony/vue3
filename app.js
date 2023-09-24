var app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    increse() {
      this.count++; 
    },

    decrese() {
      this.count--;
    },
  },
});

app.mount("#app");
