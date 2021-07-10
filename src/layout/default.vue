<template>
  <main class="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
    <div class="flex items-start justify-between">
      <SideBar />
      <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
        <NavBar />
        <div class="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";
import ServerCard from "../components/Card/SeverCard.vue";

export default {
  name: "DefaultLayout",
  components: {SideBar, NavBar, ServerCard}
};
</script>

<style scoped>

</style>