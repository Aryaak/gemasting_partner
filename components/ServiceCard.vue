<template>
  <div class="border-1 border-netral-50 rounded-2xl p-5 relative w-full">
    <img
      class="absolute right-5"
      src="~/assets/img/icons/info-disable.svg"
      alt="Info Icon"
    />
    <div class="flex gap-x-3 items-center mb-8">
      <img :src="icon" alt="Doctor Icon" />
      <p class="text-netral-90">{{ title }}</p>
    </div>
    <div class="flex items-center justify-between">
      <p class="text-netral-50">{{ text }}</p>
      <p class="text-netral-150 text-lg font-bold">{{ count }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["icon", "title", "text", "count"],
};
</script>

