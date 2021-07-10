<template>
  <div class="h-screen rounded-2xl hidden lg:block my-4 ml-4 shadow relative w-60">
    <div class="bg-white h-full rounded-2xl dark:bg-gray-700">
      <div class="container flex items-center justify-center pt-4 pb-4 bg-green-500 rounded-t-2xl" @click="$router.push('/')">
        <img src="../assets/favicon.svg" alt="" class="max-h-10"/>
      </div>
      <nav class="mt-6">
        <div>
          <a
            :class="{'w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-green-500': $route.path !== item.router, 'w-full font-thin uppercase text-green-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-green-100 border-r-4 border-green-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-green-500': $route.path === item.router}"
            @click="$router.push(item.router)"
            v-for="item in items"
          >
            <span class="text-left" v-html="item.icon" />
            <span class="mx-4 text-sm font-normal" v-html="item.label" />
          </a>
          <a
            class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            href="#"
          >
            <span class="text-left">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="m-auto"
                viewBox="0 0 2048 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z" />
              </svg>
            </span>
            <span class="mx-4 text-sm font-normal">
              Pro
            </span>
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      items: [
        {
          label: "控制台",
          icon: "<span class=\"iconify\" data-icon=\"ant-design:dashboard-twotone\" data-inline=\"false\"></span>",
          router: "/dashboard"
        },
        {
          label: "服务器",
          icon: "<span class=\"iconify\" data-icon=\"mdi:server-network\" data-inline=\"false\"></span>",
          router: "/server"
        }
      ]
    }
  }
};
</script>

<style scoped>

</style>