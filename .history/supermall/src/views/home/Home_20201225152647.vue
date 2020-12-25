<template>
  <div>
    <Nav-Bar class="home-nav">
      <div slot="center">购物街</div>
    </Nav-Bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
import { getHomeMultiData } from "@/network/home";

export default {
  name: "Home",
  components: {
    NavBar,
  },
  data(){
    return {
      banners: []
    }
  },
  created() {
    getHomeMultiData().then(res=>{
      this.banners = res.data.banner
    })
  }
};
</script>
  
<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>