<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <home-feature></home-feature>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
import HomeSwiper from "./childCpns/HomeSwiper";
import HomeRecommend from "./childCpns/HomeRecommend";
import HomeFeature from './childCpns/HomeFeature'

import { getHomeMultiData } from "@/network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature
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
  font-size: 20px;
}
</style>