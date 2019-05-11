<template>
  <el-row>
    <el-col :span="4"><el-input v-model="input" placeholder="Search here..."></el-input></el-col>
  </el-row>
</template>

<script>
export default {
  name: 'mHeader',
  data () {
    return {
      input: null
    }
  }
}
</script>

<style lang="less">
  .el-row{
    padding-top: 10px;
  }
</style>
