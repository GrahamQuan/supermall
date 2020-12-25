<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="icon" src="~assets/img/tabbar/home.svg" />
        <img slot="icon-active" src="~assets/img/tabbar/home_active.svg" />
        <div slot="text">主页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="orange">
        <img slot="icon" src="~assets/img/tabbar/category.svg" />
        <img slot="icon-active" src="~assets/img/tabbar/category_active.svg" />
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="pink">
        <img slot="icon" src="~assets/img/tabbar/shopcart.svg" />
        <img slot="icon-active" src="~assets/img/tabbar/shopcart_active.svg" />
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="icon" src="~assets/img/tabbar/profile.svg" />
        <img slot="icon-active" src="~assets/img/tabbar/profile_active.svg" />
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
}
</script>

<style>

</style>