<template>
  <!-- 概览 -->
  <div>
    <StatHero class="mb-4" />
    <div class="flex flex-col flex-wrap sm:flex-row ">
      <div class="flex sm:w-1/2 xl:w-1/3">
      </div>
      <div class="w-full sm:w-1/2 xl:w-1/3">
      </div>
      <div class="w-full sm:w-1/2 xl:w-1/3">
      </div>
    </div>
  </div>
</template>

<script>
import ServerCard from "@/components/Card/SeverCard.vue";
import StatHero from "@/components/StatHero.vue";
import NumberCard from "@/components/Card/NumberCard.vue";

export default {
  name: "DashBoard",
  components: {ServerCard, StatHero, NumberCard}
}
</script>

<style scoped>

</style>