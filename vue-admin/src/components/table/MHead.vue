<template>
    <div class="m-head">{{title}}</div>
</template>

<script>
export default {
  name: 'mHead',
  props: ['title']
}
</script>

<style lang="less">
  .m-head{
    height: 100%;
    line-height: 50px;
  }
</style>
