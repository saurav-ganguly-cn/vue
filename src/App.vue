<template>
  <div id="app">
    {{ title }}
    {{ body }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      body: "",
    };
  },
  mounted() {
    this.$fcm
      .getToken({
        vapidKey:
          "BKREHaDBPextKos2eDfzRmd-n3eAKRTHQP6DaeEmDY94O0eeDCdQ5dfeuMGSRXo-4fNcNg7u8LZswm5LP-VvHT4",
      })
      .then((currentToken) => {
        if (currentToken) {
          console.log("client token", currentToken);
        } else {
          console.log(
            "No registration token available. Request permission to generate one."
          );
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });

    this.$fcm.onMessage((payload) => {
      console.log("app Message received. ", payload);
    });
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
