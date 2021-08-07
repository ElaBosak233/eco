<template>
  <div class="shadow rounded-2xl w-36 p-4 bg-white dark:bg-gray-800">
    <div class="flex items-center">
      <span :class="icon_class" v-html="icon_tag">
      </span>
      <p class="text-md text-gray-700 dark:text-gray-50 ml-2" v-html="label" />
    </div>
    <div class="flex flex-col justify-start">
      <p class="text-gray-800 text-4xl text-left dark:text-white font-bold my-4">
        {{ num }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "NumberCard",
  props: {
    icon_tag: String,
    icon_class: String,
    num: String,
    label: String
  }
}
</script>

<style scoped>

</style>