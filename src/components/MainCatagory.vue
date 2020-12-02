<template>
  <div class="main">
    <ButtonMenu></ButtonMenu>
    <Body></Body>
  </div>
</template>

<script>
import ButtonMenu from "./Menu/ButtonMenu.vue";
import Body from "./Menu/Body.vue";

export default {
  components: {
    ButtonMenu,
    Body,
  },
  data() {
    return {
      //data here
    };
  },
  methods: {},
};
</script>


<style scoped>
@media screen and (max-width: 575px) {
  .main {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (max-width: 420px) {
  .main {
    width: 370px;
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (max-width: 350px) {
  .main {
    width: 310px;
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (min-width: 576px) {
  .main {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (min-width: 768px) {
  .main {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (min-width: 992px) {
  .main {
    width: 720px;
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (min-width: 1200px) {
  .main {
    width: 720px;
    margin-left: auto;
    margin-right: auto;
  }
}

</style>
