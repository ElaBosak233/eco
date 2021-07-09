<template>
  <div id="app">
    <component :is="layout">
      <router-view v-if="isRouterAlive"/>
    </component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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

})
</script>

<style>
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}
</style>