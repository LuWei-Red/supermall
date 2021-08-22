<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
   <home-swiper :banners="banners" />
   <recommend-view :recommends="recommends"/>
   <tab-control class="tab-control" :titles="['流行','新款','精选']"/>
     <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
   <ul>
     <li>Duck1</li>
     <li>Duck2</li>
     <li>Duck3</li>
     <li>Duck4</li>
     <li>Duck5</li>
     <li>Duck6</li>
     <li>Duck7</li>
     <li>Duck8</li>
     <li>Duck9</li>
     <li>Duck10</li>
     <li>Duck11</li>
     <li>Duck12</li>
     <li>Duck13</li>
     <li>Duck14</li>
     <li>Duck15</li>
     <li>Duck16</li>
     <li>Duck17</li>
     <li>Duck18</li>
     <li>Duck19</li>
     <li>Duck20</li>
     <li>Duck21</li>
     <li>Duck22</li>
     <li>Duck23</li>
     <li>Duck24</li>
     <li>Duck25</li>
     <li>Duck26</li>
     <li>Duck27</li>
     <li>Duck28</li>
     <li>Duck29</li>
     <li>Duck30</li>
     <li>Duck31</li>
     <li>Duck32</li>
     <li>Duck33</li>
     <li>Duck34</li>
     <li>Duck35</li>
     <li>Duck36</li>
     <li>Duck37</li>
     <li>Duck38</li>
     <li>Duck39</li>
     <li>Duck40</li>
     <li>Duck41</li>
     <li>Duck42</li>
     <li>Duck43</li>
     <li>Duck44</li>
     <li>Duck45</li>
     <li>Duck46</li>
     <li>Duck47</li>
     <li>Duck48</li>
     <li>Duck49</li>
     <li>Duck50</li>
     <li>Duck51</li>
     <li>Duck52</li>
     <li>Duck53</li>
     <li>Duck54</li>
     <li>Duck55</li>
     <li>Duck56</li>
     <li>Duck57</li>
     <li>Duck58</li>
     <li>Duck59</li>
     <li>Duck60</li>
     <li>Duck61</li>
     <li>Duck62</li>
     <li>Duck63</li>
     <li>Duck64</li>
     <li>Duck65</li>
     <li>Duck66</li>
     <li>Duck67</li>
     <li>Duck68</li>
     <li>Duck69</li>
     <li>Duck70</li>
     <li>Duck71</li>
     <li>Duck72</li>
     <li>Duck73</li>
     <li>Duck74</li>
     <li>Duck75</li>
     <li>Duck76</li>
     <li>Duck77</li>
     <li>Duck78</li>
     <li>Duck79</li>
     <li>Duck80</li>
     <li>Duck81</li>
     <li>Duck82</li>
     <li>Duck83</li>
     <li>Duck84</li>
     <li>Duck85</li>
     <li>Duck86</li>
     <li>Duck87</li>
     <li>Duck88</li>
     <li>Duck89</li>
     <li>Duck90</li>
     <li>Duck91</li>
     <li>Duck92</li>
     <li>Duck93</li>
     <li>Duck94</li>
     <li>Duck95</li>
     <li>Duck96</li>
     <li>Duck97</li>
     <li>Duck98</li>
     <li>Duck99</li>
     <li>Duck100</li>
   </ul>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import  HomeSwiper  from "./childHomes/HomeSwiper";
import RecommendView from "./childHomes/RecommendView";
import TabControl from "../../components/content/tabControl/TabControl";

import { getHomeMultidata } from "../../network/home";

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    TabControl
  },
  data() {
    return {
      result: null,
      banners: [],
      recommends: [],
      visible: false
    };
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then(res => {
      console.log(res);
      // this.result = res;
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>
<style >
#home{
  padding-top: 44px;
}
.home-nav {
  background-color: rgb(247, 77, 106);
  color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control{
  position: sticky;
  top: 44px;
}
</style>
