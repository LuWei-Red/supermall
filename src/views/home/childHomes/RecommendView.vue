<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {}
};
</script>

<style >
.recommend {
  display: flex;
  text-align: center;
  font-size: 16px;
  padding: 15px 5px 15px ;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 100%;
  margin-bottom: 10px;
  padding: 0px 5px 0px;
}
</style>