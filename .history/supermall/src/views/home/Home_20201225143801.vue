<template>
  <div>
    <Nav-Bar class="home-nav">
      <div slot="center">购物街</div>
    </Nav-Bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>
  
<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>