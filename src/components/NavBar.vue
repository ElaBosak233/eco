<template>
  <header class="w-full shadow bg-gradient-to-r from-green-400 to-blue-500 dark:bg-gray-700 items-center h-16 rounded-xl z-40">
    <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
      <div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
        <div class="relative mb-1 left-0 z-50 flex w-3/4 h-full">
          <button type="button" class="flex justify-center items-center mt-2 w-8 h-8 bg-green-100 hover:bg-green-200 focus:ring-green-300 focus:ring-offset-green-300 text-green-500 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" @click="store.state.sidebar=!store.state.sidebar">
            <span class="iconify" data-icon="eva:menu-outline" data-inline="false"></span>
          </button>
        </div>
        <div class="absolute right-1">
          <div
              @click="dropdown=!dropdown"
              class="rounded-full h-10 w-10"
          >
            <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/ElaBosak233/PicRepo/Profile/avatar.png"
                class="rounded-full h-10 w-10"
            >
          </div>
          <div v-show="dropdown" class="absolute top-2 w-32 py-2 mt-10 -ml-20 bg-white rounded-md shadow-xl dark:bg-gray-800">
            <a v-for="item in dropdown_items" @click="$router.push(item.router); dropdown=false" class="flex flex-row px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform hover:bg-blue-500 hover:text-white">
              <span class="text-left text-xl" v-html="item.icon" />
              <span class="mx-2" v-html="item.label" />
            </a>
            <a class="flex flex-row px-4 py-2 text-sm text-white bg-red-700 capitalize transition-colors duration-200 transform hover:bg-red-500 hover:text-white">
              <span class="text-left text-xl">
                <span class="iconify" data-icon="bx:bxs-exit" data-inline="false"></span>
              </span>
              <span class="mx-2">注销</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import store from "../store";

export default {
  name: "NavBar",
  data() {
    return {
      store: store,
      dropdown: false,
      dropdown_items: [
        {
          label: "个人资料",
          icon: "<span class=\"iconify\" data-icon=\"ic:sharp-account-circle\" data-inline=\"false\"></span>",
          router: "/account"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>