<template>
  <div id="app">
    <h2>分类</h2>
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </div>
</template>
<script>
export default {
  components: {

  },
  data: function() {
    return {     
      visible: false
    }
  }
}
</script>