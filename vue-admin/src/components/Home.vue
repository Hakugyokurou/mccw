<template>
  <el-container>
    <el-aside width="200px">
      <m-nav @fun="fun"></m-nav>
    </el-aside>
    <el-container class="el-container-demo">
      <el-header height="50px">
        <m-header></m-header>
      </el-header>
      <el-main>
        <el-container class="el-container-nd">
          <el-header height="40px"><m-head></m-head></el-header>
          <el-main v-if="show">home page</el-main>
          <el-main v-else><router-view/></el-main>
        </el-container>
      </el-main>
      <el-footer height="40px">Copyright © 2019 zzmhot All Rights Reserved</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import mNav from './home/Nav.vue'
import mHeader from './home/Header.vue'
import mHead from './table/MHead.vue'

export default {
  name: 'home',
  data () {
    return {
      show: true
    }
  },
  methods: {
    fun (e) {
      this.show = e
    }
  },
  components: {
    mNav,
    mHeader,
    mHead
  },
}
</script>

<style lang="less">
  .el-container{
    background: #eff0f4;
    .el-container-demo{
      display: block;
      .el-container-nd{
        .el-header{
          border-radius: 8px 8px 0 0;
          border-bottom: 1px dotted #909399;
        }
        .el-main{
          background: #ffffff;
          border-radius: 0 0 8px 8px;
        }
      }
      .el-header, .el-footer{
        background: #ffffff;
      }
      .el-footer{
        color: #909399;
        font-size: 14px;
        line-height: 40px;
      }
    }
  }
</style>
