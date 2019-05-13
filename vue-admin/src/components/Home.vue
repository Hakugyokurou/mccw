<template>
    <el-container>
      <el-aside width="200px"><m-nav></m-nav></el-aside>
      <el-container>
        <el-header><m-header></m-header></el-header>
        <el-main>
          <table-base></table-base>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
</template>

<script>
import mNav from './home/Nav.vue'
import mHeader from './home/Header.vue'
import tableBase from './table/TableBase'

export default {
  name: 'home',
  components: {
    mNav,
    mHeader,
    tableBase
  }
}
</script>

<style lang="less">
</style>
