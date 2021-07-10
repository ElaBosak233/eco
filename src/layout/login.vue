<template>
  <!-- component -->
  <section class="flex flex-col md:flex-row h-screen items-center">

    <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <img :src="img" alt="" class="w-full h-full object-cover">
    </div>

    <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

      <div class="w-full h-100">


        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12 inline-block"><span class="iconify" data-icon="entypo:login" data-inline="false" /></h1>
        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12 inline-block mx-2">登录</h1>

        <form class="mt-6" action="#" method="POST">
          <div>
            <label class="block text-gray-700">用户名</label>
            <input type="email" name="" id="email" placeholder="请输入 email 地址" class="w-full px-4 py-3 shadow rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus required>
          </div>

          <div class="mt-4">
            <label class="block text-gray-700">密码</label>
            <input type="password" name="" id="passwd" placeholder="请输入密码" minlength="6" class="w-full shadow px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required>
          </div>

          <div class="text-right mt-2">
            <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">忘记密码？</a>
          </div>

          <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6 shadow">登录</button>
        </form>

        <hr class="my-6 border-gray-300 w-full">

        <p class="mt-8">还没有账号？ <a href="#" class="text-blue-500 hover:text-blue-700 font-semibold">点我注册！</a></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginLayout",
  data() {
    return {
      img: "./src/assets/login_hero.jpg"
    }
  }
}
</script>

<style scoped>

</style>