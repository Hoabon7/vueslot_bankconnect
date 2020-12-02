<template>
  <div id="main">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <ButtonMenu></ButtonMenu>
    <Body></Body>
    <router-view />
  </div>
</template>

<script>
import ButtonMenu from "./Menu/ButtonMenu.vue";
import Body from "./Menu/Body.vue";
export default {
  name: "Main",
  components: {
     ButtonMenu,
     Body
    //MainCatagory
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
</style>
