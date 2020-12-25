<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" class="tab-control-item">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 18px;
  height: 25px;
  line-height: 25px;
  background-color: #fff;
}

.tab-control-item{
  flex: 1;
}

.tab-control-item span{
  padding: 20px;
}
</style>