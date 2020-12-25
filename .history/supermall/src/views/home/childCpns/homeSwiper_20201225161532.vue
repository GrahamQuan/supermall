<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index"></swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props:{
    banners:{
      type: Array,
      default(){
        return banners
      }
    }
  }
};
</script>

<style>
</style>