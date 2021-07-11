<template>
  <div :class="{'h-screen lg:block shadow relative w-60': store.state.sidebar, 'h-screen hidden shadow relative w-60': !store.state.sidebar}">
    <div class="bg-white h-full dark:bg-gray-700">
      <div class="container flex items-center justify-center pt-4 pb-4 bg-green-500" @click="$router.push('/')">
        <img src="../assets/favicon.svg" alt="" class="max-h-10"/>
      </div>
      <nav class="mt-3">
        <div>
          <a
              :class="{'w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-2 my-2 ml-1 transition-colors duration-200 justify-start hover:text-green-500': $route.path !== item.router, 'w-full font-thin uppercase text-green-500 flex items-center p-2 my-2 ml-1 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-green-100 border-r-4 border-green-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-green-500': $route.path === item.router}"
              @click="$router.push(item.router)"
              v-for="item in items"
          >
            <span class="text-left text-xl" v-html="item.icon" />
            <span :class="{'mx-3 text-sm font-sidebar font-normals': true, 'mx-3 text-sm font-sidebar font-extrabold': $route.path === item.router}" v-html="item.label" />
          </a>
        </div>
        <div>
          <a
              class="w-full font-thin absolute bottom-0 uppercase text-gray-500 dark:text-gray-200 flex items-center p-2 my-2 ml-1 transition-colors duration-200 justify-start hover:text-green-500"
              href="https://github.com/ElaBosak233/eco.git"
              target="_blank"
          >
            <span class="text-left text-xl">
              <span class="iconify" data-icon="ic:outline-support" data-inline="false"></span>
            </span>
            <span class="mx-3 text-sm font-sidebar font-normals">
              获取帮助
            </span>
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "SideBar",
  data() {
    return {
      store: store,
      items: [
        {
          label: "概览",
          icon: "<span class=\"iconify\" data-icon=\"ant-design:dashboard-twotone\" data-inline=\"false\"></span>",
          router: "/dashboard"
        },
        {
          label: "服务器",
          icon: "<span class=\"iconify\" data-icon=\"mdi:server-network\" data-inline=\"false\"></span>",
          router: "/server"
        },
        {
          label: "插件市场",
          icon: "<span class=\"iconify\" data-icon=\"zondicons:plugin\" data-inline=\"false\"></span>",
          router: "/plugins"
        },
        {
          label: "全局设置",
          icon: "<span class=\"iconify\" data-icon=\"clarity:network-settings-solid\" data-inline=\"false\"></span>",
          router: "/settings"
        }
      ]
    }
  }
};
</script>

<style scoped>

</style>