<template>
  <div>
    <Nav-Bar class="home-nav">
      <div slot="center">购物街</div>
    </Nav-Bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
import { HomeSwiper } from "./childCpns/HomeSwiper";

import { getHomeMultiData } from "@/network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    // 1.请求多个数据
    getHomeMultiData().then((res) => {
      // 将数据存到data的变量中
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>
  
<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>