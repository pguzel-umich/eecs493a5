/* ------------------- EECS 493 Assignment 5 Starter Code ------------------ */
const { createApp } = Vue

createApp({
  data() {
    return {
      artist1: './img/1.jpg',
      artist2: './img/2.jpg',

      search_entry: "",
      search_results: [],
      search_count: 0,
    }
  },

  methods: {
    searchBar() {
      let search_val = this.search_entry.trim();

      /* if (!search_val) {
        console.log("no value entered");
        return;
      }*/

      // console.log("search:", search_val);

      search_val = encodeURIComponent(search_val);

      let url_request = `https://itunes.apple.com/search?term=${search_val}&media=music`;

      // console.log(url_request);

      fetch(url_request).then(x => x.json()).then(y => {
        console.log(y);

        if (y.resultCount === 0) {
          alert("No artist found.");
          return;
        }

        this.search_results = y.results;
        this.search_count = y.resultCount;
      }
      );
    }

  }
}).mount('#app')
