<template>
  <div>
    <el-form ref="form" label-position="right"  :model="form" label-width="80px" size="small">
      <el-form-item label="姓名"
       :rules="[
      { required: true, message: '姓名不能为空'}
      ]"
                    style="width: 20%;">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄"  style="width: 20%;">
        <el-radio-group v-model="form.gender">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄"  style="width: 20%;">
        <el-input v-model.number="form.age"></el-input>
      </el-form-item>
      <el-form-item label="生日" style="width: 10%;">
        <!--<el-col :span="11">-->
          <el-date-picker type="date" placeholder="选择生日" v-model="form.date" style="width: 325%;">
          </el-date-picker>
        <!--</el-col>-->
      </el-form-item>
      <el-form-item label="邮编"  style="width: 20%;">
        <el-input v-model="form.zip" :maxlength="6"></el-input>
      </el-form-item>
      <el-form-item size="large"  style="width: 20%;">
        <el-button type="primary" @click="onSubmit">立即提交</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "TableUpdate",
    data() {
      return {
        form: {
          name: '',
          gender: '',
          age: '',
          date: '',
          zip: ''
        }
      };
    },
    created() {
      this.form = this.$store.state.obj
    },
    methods: {
      onSubmit() {
        this.$router.push({path: '/tablebase', name: 'tableBase'})
      },
      cancel() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">

</style>
