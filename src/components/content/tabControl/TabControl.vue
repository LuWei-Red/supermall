<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" 
    :key="index" 
    class="tab-control-item"
    :class="{active : index ===currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      defalut() {
        return [];
      }
    }
  },
  data() {
      return {
          currentIndex:0
        }
  },
  methods:{
      itemClick(index){
          this.currentIndex=index;
      }
  }
};
</script>

<style >
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
}
.active{
    color: #FF5151;
}
.active span{
    border-bottom: 3px solid #FF5151;
}
</style>