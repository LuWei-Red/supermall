<template>
  <div id="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'TabBar',
    components:{

    }
};
</script>

<style>

#tab-bar {
  display: flex;
  background-color: #dadada;
  position: fixed;
  width: 100%;
  bottom: 0px;
  left: 0px;
  right: 0px;
  box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.2);
}


</style>