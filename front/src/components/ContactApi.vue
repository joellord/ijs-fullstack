<template>
  <div class="contactapi">
    <button v-on:click="() => contactApi()">Contact API</button><br/>
    <br/><br/>
    <pre>
      <code class="code">
      {{ apiResponse }}
      </code>
    </pre>
  </div>
</template>

<script>
import Config from "../config.json";

export default {
  name: "ContactApi",
  data: function() {
    return {
      apiResponse: "API Response Here"
    };
  },
  methods: {
    contactApi: function() {
      let url = Config.API_URL;
      this.apiResponse = `Request sent to ${url}`;
      fetch(url)
        .then(resp => resp.json())
        .then(data => {
          this.apiResponse = JSON.stringify(data, null, 4);
        })
        .catch(err => this.apiResponse = err);
    }
  }
}
</script>

<style scoped>
pre {
  text-align: left; 
  display: inline-block;
}
</style>