<template>
  <div class="mb-4">
    <div class="shadow rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
      <div class="flex items-center justify-between mb-6 container">
        <div class="flex items-center">
          <span class="rounded-xl relative p-2 bg-blue-100" v-html="icon">
          </span>
          <div class="flex flex-col">
            <span class="font-bold text-md text-black dark:text-white ml-2">
              {{ name }}
            </span>
            <span class="text-sm text-gray-500 dark:text-white ml-2">
              {{ description }}
            </span>
          </div>
        </div>
        <div class="flex items-center">
          <button class="border p-1 border-gray-200 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              class="w-4 h-4 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 1792 1792"
            >
              <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
            </svg>
          </button>
          <button class="text-gray-200">
            <svg
              width="25"
              height="25"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z" />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex items-center justify-between mb-4 space-x-12">
        <span class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-gray-500 bg-gray-200">
          PROGRESS
        </span>
        <span class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-red-400 border border-red-400  bg-white">
          HIGHT PRIORITY
        </span>
      </div>
      <div class="block m-auto">
        <div>
          <span class="text-sm inline-block text-gray-500 dark:text-gray-100">
            在线人数
            <span class="text-gray-700 dark:text-white font-bold">
              25
            </span>
          </span>
        </div>
        <div class="w-full h-2 bg-gray-200 rounded-full mt-2">
          <div class="w-1/2 h-full text-center text-xs text-white bg-purple-500 rounded-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeverCard",
  props: {
    icon:String,
    name:String,
    description:String
  }
};
</script>

<style scoped>

</style>