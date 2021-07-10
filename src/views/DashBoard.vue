<template>
  <div class="flex flex-col flex-wrap sm:flex-row ">
    <div class="w-full sm:w-1/2 xl:w-1/3">
      <ServerCard icon="<span class='iconify' data-icon='vscode-icons:file-type-vue' data-inline='false'></span>" name="视图" description="尤大的眼睛" />
    </div>
    <div class="w-full sm:w-1/2 xl:w-1/3">
    </div>
    <div class="w-full sm:w-1/2 xl:w-1/3">
    </div>
  </div>
</template>

<script>
import ServerCard from "@/components/Card/SeverCard.vue"

export default {
  name: "DashBoard",
  components: {ServerCard}
}
</script>

<style scoped>

</style>