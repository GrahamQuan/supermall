<template>
  <div>
    <swiper>
      <swiper-item></swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index";
import Swiper from '../../../components/common/swiper/Swiper.vue';
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
};
</script>

<style>
</style>