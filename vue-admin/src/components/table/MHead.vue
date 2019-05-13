<template>
    <div class="m-head">{{title}}</div>
</template>

<script>
export default {
  name: 'mHead',
  data () {
    return {
      title: '主页'
    }
  }
}
</script>

<style lang="less">
  .m-head{
    height: 100%;
    line-height: 40px;
  }
</style>
