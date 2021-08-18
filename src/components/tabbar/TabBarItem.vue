<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :style="activeStyle">
      <slot name="item-icon"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(err => err);
      console.log(this.$route.path.indexOf(this.path) !== -1);
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  line-height: 49px;
}

</style>