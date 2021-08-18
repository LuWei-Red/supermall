<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="yellow">
        <div slot="item-icon">
          <span class="icon iconfont">&#xe7d4;</span>首页
        </div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <div slot="item-icon">
          <span class="icon iconfont">&#xe7d7;</span>分类
        </div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <div slot="item-icon">
          <div>
            <span class="icon iconfont">&#xe7d6;</span>购物
          </div>
        </div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <div slot="item-icon">
          <div>
            <span class="icon iconfont">&#xe7d5;</span>我的
          </div>
        </div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style>
@import './assets/img/tabbar/iconfont.css';
@import "./assets/css/base.css";
</style>
