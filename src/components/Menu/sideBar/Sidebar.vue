<template>
  <div class="sidebar">
    <div
      class="sidebar-backdrop"
      @click="closeSidebarPanel"
      v-if="isPanelOpen"
    ></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel pl-1 pr-2">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import { store, mutations } from "@/store.js";

export default {
  methods: {
    closeSidebarPanel: mutations.toggleNav,
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    },
  },
};
</script>
<style >
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

@media only screen and (max-width: 600px) {
  .sidebar-backdrop {
    background-color: rgba(19, 15, 64, 0.4);
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
  }
  .sidebar-panel {
    overflow-y: auto;
    background-color: white;
    position: fixed;
    left: 0;
     z-index: 9;
    top: 0;
    height: 100vh;
    padding: 3rem 20px 2rem 20px;
    width: 60%;
  }
}
@media only screen and (max-width: 450px) {
  .sidebar-backdrop {
    z-index: 8;
    background-color: rgba(19, 15, 64, 0.4);
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
  }
  .sidebar-panel {
    overflow-y: auto;
    background-color: white;
    position: fixed;
    left: 0;
   z-index: 9;
    top: 0;
    height: 100vh;
    padding: 3rem 20px 2rem 20px;
    width: 70%;
  }
}
@media only screen and (min-width: 600px) {
  .sidebar-backdrop {
    z-index: 8;
    background-color:  rgba(19, 15, 64, 0.4);
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
  }
  .sidebar-panel {
    overflow-y: auto;
    background-color: white;
    position: fixed;
    /* left: 0; */
   z-index: 9;
    top: 0;
    height: 100vh;

    padding: 3rem 20px 2rem 20px;
    width: 60%;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .sidebar-backdrop {
    z-index: 8;
    background-color: rgba(19, 15, 64, 0.4);
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
  }
  .sidebar-panel {
  overflow-y: auto;
  background-color: white;
  position: fixed;
   /* left: 0; */
   z-index: 9;
  top: 0;
  height: 100vh;

  padding: 3rem 20px 2rem 20px;
  width: 60%;
}
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 1200px) {
  .sidebar-backdrop {
    z-index: 8;
    background-color: rgba(19, 15, 64, 0.4);
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
  }
  .sidebar-panel {
  overflow-y: auto;
  background-color: white;
  position: fixed;
  /* left: 0; */
   z-index: 9;
  top: 0;
  height: 100vh;
  padding: 3rem 20px 2rem 20px;
  width: 40%;
}


}
@media only screen and (min-width: 992px) {
  .sidebar-backdrop {
    z-index: 8;
    background-color: rgba(19, 15, 64, 0.4);
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
  }
  .sidebar-panel {
  overflow-y: auto;
  background-color: white;
  position: fixed;
  /* left: 0; */
   z-index: 9;
  top: 0;
  height: 100vh;
  padding: 3rem 20px 2rem 20px;
  width: 40%;
}


}


/* Extra large devices (large laptops and desktops, 1200px and up) */


</style>
