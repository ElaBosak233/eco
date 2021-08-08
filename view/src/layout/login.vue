<template>
  <!-- component -->
  <section class="flex flex-col items-center h-screen md:flex-row">
    <div class="hidden w-full h-screen bg-indigo-600 lg:block md:w-1/2 xl:w-2/3">
      <img :src="img" alt="" class="object-cover w-full h-full">
    </div>
    <div class="flex items-center justify-center w-full h-screen px-6 bg-white md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12">
      <div class="w-full h-100">
        <h1 class="inline-block mt-12 text-2xl font-bold leading-tight md:text-2xl"><img src="@/assets/favicon.svg" alt="" width=50></h1>
        <h1 class="inline-block mx-1 mt-12 text-3xl font-bold leading-tight md:text-3xl">登录</h1>
        <form class="mt-6" action="#" method="POST">
          <div>
            <label class="block text-gray-700">用户名</label>
            <input v-model="username" type="username" name="" placeholder="请输入用户名" class="w-full px-4 py-3 mt-2 bg-gray-200 border rounded-lg shadow focus:border-blue-500 focus:bg-white focus:outline-none" autofocus required>
          </div>
          <div class="mt-4">
            <label class="block text-gray-700">密码</label>
            <input v-model="passwd" type="password" name="" placeholder="请输入密码" minlength="6" class="w-full px-4 py-3 mt-2 bg-gray-200 border rounded-lg shadow focus:border-blue-500 focus:bg-white focus:outline-none" required>
          </div>
          <div class="mt-2 text-right">
            <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">忘记密码？</a>
          </div>
          <a type="submit" class="block w-full px-4 py-3 mt-6 font-semibold text-center text-white bg-indigo-500 rounded-lg shadow hover:bg-indigo-400 focus:bg-indigo-400" @click="login">登录</a>
        </form>
        <hr class="w-full my-6 border-gray-300">
        <p class="mt-8">还没有账号？ <a href="#" class="font-semibold text-blue-500 hover:text-blue-700">点我注册！</a></p>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import store from "../store";
import { useRoute, useRouter } from "vue-router";

const img = "./src/assets/login_hero.jpg";

const username = ref();
const passwd = ref();

const route = useRoute();
const router = useRouter();

// 如果此人已经登录，那么跳转回主页
if (store.state.token !== "") {
  router.push("/");
}

function login() {
  axios.post("/api/user/login", JSON.stringify({
    name: username.value,
    passwd: passwd.value
  }),{
    headers: {
      "Content-Type": "application/json"
    }}).then(function(res){
    const { code, token } = res.data;
    if (code === 200) {
      store.commit("setToken", token);
      localStorage.setItem("token", token);
      const redirect = route.query.redirect.toString() || "/";
      router.push(redirect);
      console.log("已传送");
    } else {
      // const toast = this.$createToast({
      //   time: 2000,
      //   txt: massage || "登录失败",
      //   type: "error"
      // });
      // toast.show();
      console.log("登陆失败");
    }
  });
}
</script>

<style scoped>

</style>
