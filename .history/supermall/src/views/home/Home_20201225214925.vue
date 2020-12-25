<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <home-feature></home-feature>
    <ul>
      <li>list1</li>
      <li>list2</li>
      <li>list3</li>
      <li>list4</li>
      <li>list5</li>
      <li>list6</li>
      <li>list7</li>
      <li>list8</li>
      <li>list9</li>
      <li>list10</li>
      <li>list11</li>
      <li>list12</li>
      <li>list13</li>
      <li>list14</li>
      <li>list15</li>
      <li>list16</li>
      <li>list17</li>
      <li>list18</li>
      <li>list19</li>
      <li>list20</li>
      <li>list21</li>
      <li>list22</li>
      <li>list23</li>
      <li>list24</li>
      <li>list25</li>
      <li>list26</li>
      <li>list27</li>
      <li>list28</li>
      <li>list29</li>
      <li>list30</li>
      <li>list31</li>
      <li>list32</li>
      <li>list33</li>
      <li>list34</li>
      <li>list35</li>
      <li>list36</li>
      <li>list37</li>
      <li>list38</li>
      <li>list39</li>
      <li>list40</li>
      <li>list41</li>
      <li>list42</li>
      <li>list43</li>
      <li>list44</li>
      <li>list45</li>
      <li>list46</li>
      <li>list47</li>
      <li>list48</li>
      <li>list49</li>
      <li>list50</li>
    </ul>
  </div>
</template>

<script>
// home自己的子组件
import HomeSwiper from "./childCpns/HomeSwiper";
import HomeRecommend from "./childCpns/HomeRecommend";
import HomeFeature from "./childCpns/HomeFeature";
// 公共的组件
import NavBar from "@/components/common/navBar/NavBar";
import TabControl from '@/components/content/tabControl/TabControl'

// 导入的方法
import { getHomeMultiData } from "@/network/home";

export default {
  name: "Home",
  components: {
    // home自己的子组件
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    // 公共的组件
    NavBar,
    TabControl
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
#home {
  padding-top: 44px;
  padding-bottom: 49px;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 20px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>