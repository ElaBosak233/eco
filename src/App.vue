<template>
  <div id="app">
    <component :is="layout">
      <router-view v-if="isRouterAlive"/>
    </component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "./store";

export default defineComponent({
  name: "App",
  data() {
    return {
      isRouterAlive: true
    }
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "default") + '-layout'
    }
  },
  watch: {
    $route(to, from) {
      document.title = to.meta.title || 'eco'
    }
  },
  created: () => {
    console.log(store.state.sidebar);
  }
})
</script>

<style>
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}
@font-face {
  font-family: PingFangSC;
  src: url('./src/assets/PingFang-SC.otf');
}
</style>