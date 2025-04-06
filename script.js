/* ------------------- EECS 493 Assignment 5 Starter Code ------------------ */
const { createApp } = Vue

createApp({
  data() {
    return {
      artist1: './img/1.jpg',
      artist2: './img/2.jpg',

      searchQuery: "",
    }
  },

  methods: {
    searchArtist() {
      console.log("search:", this.searchQuery);
    }

  }
}).mount('#app')
