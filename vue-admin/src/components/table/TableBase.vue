<template>
  <div>
    <el-table
      :data="tableData.slice((currentPage-1)*pageSize, currentPage*pageSize)"
      tooltip-effect="dark"
      v-loading="load_data"
      element-loading-text="拼命加载中"
      border
      style="width: 100%"
      :header-cell-style="{background:'#EEF1F6'}"
      @select="Change">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        fixed
        prop="id"
        label="id"
        width="80">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        width="100">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="120">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="auto">
      </el-table-column>
      <el-table-column
        label="操作"
        width="180">
        <template slot-scope="scope">
          <el-button @click="updateClick(scope.row, scope.$index)" type="primary" size="mini"><i
            class="el-icon-edit">修改</i>
          </el-button>
          <el-button @click="deleteClick(scope.row)" type="danger" size="mini"><i class="el-icon-delete">删除</i></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="clearfix v-table-footer">
      <div class="fl">
        <el-row>
          <el-button @click="deleteAll" type="danger" class="el-button--small" :disabled="isDisabled"><i class="el-icon-delete"></i>批量删除
          </el-button>
        </el-row>
      </div>

      <div class="fr">
        <el-pagination
          small
          background
          layout="total, prev, pager, next"
          :total="200"
          @current-change="current_change">
        </el-pagination>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TableBase',
  methods: {
    Change (val, row) {
      // console.log(val, row)
      this.selection = val
    },

    //修改记录
    updateClick(row, index) {
      this.$router.push({path: '/home/tableupdate/*' + row.id})
      this.$store.commit('incrment', {
        id: row.id,
        name: row.name,
        gender: row.gender,
        age: row.age,
        date: row.date,
        zip: row.zip,
        address: row.address,
        index: index
      })
    },
    //删除记录
    deleteClick(row){
      let arr =  this.tableData
      this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        arr.forEach((el, index)=>{
          //找到数组里的这个对象,然后删除
          if (el.id === row.id) {
            arr.splice(index, 1)
          }
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    //批量删除
    deleteAll(){
      let arr =  this.multipleSelection
      let tableArr =  this.tableData
      this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData = tableArr.filter((el, index)=>{
          return arr.indexOf(el) < 0
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },

    //分页
    loadData () {
      this.total = this.tableData.length
    },
    current_change (currentPage) {
      this.currentPage = currentPage
    }
  },
  mounted() {
    if (this.$route.params.obj) {
      this.obj = this.$route.params.obj
      this.tableData[this.$store.state.obj.index] = this.obj
    }
  },
  data () {
    return {
      total: 0, // 默认数据总数
      pageSize: 10, // 默认每页条数
      currentPage: 1, // 默认开始页面
      selection: [],
      obj: {},
      // index: 0,
      isDisabled: true,
      load_data: false,
      tableData: [{
        id: '1',
        name: '王小虎',
        gender: '男',
        age: '24',
        date: '2016-05-02',
        address: '上海市普陀区金沙江路1518弄',
        zip: 200333
      }, {
        id: '21',
        name: '王小虎',
        gender: '男',
        age: '24',
        date: '2016-05-02',
        address: '上海市普陀区金沙江路1518弄',
        zip: 200333
      }, {
        id: '31',
        name: '王小虎',
        gender: '男',
        age: '24',
        date: '2016-05-02',
        address: '上海市普陀区金沙江路1518弄',
        zip: 200333
      }, {
        id: '41',
        name: '王小虎',
        gender: '男',
        age: '24',
        date: '2016-05-02',
        address: '上海市普陀区金沙江路1518弄',
        zip: 200333
      }, {
        id: '51',
        name: '王小虎',
        gender: '男',
        age: '24',
        date: '2016-05-02',
        address: '上海市普陀区金沙江路1518弄',
        zip: 200333
      }, {
        id: '61',
        name: '王小虎',
        gender: '男',
        age: '24',
        date: '2016-05-02',
        address: '上海市普陀区金沙江路1518弄',
        zip: 200333
      }, {
        id: '71',
        name: '王小虎',
        gender: '男',
        age: '24',
        date: '2016-05-02',
        address: '上海市普陀区金沙江路1518弄',
        zip: 200333
      }, {
        id: '81',
        name: '王小虎',
        gender: '男',
        age: '24',
        date: '2016-05-02',
        address: '上海市普陀区金沙江路1518弄',
        zip: 200333
      }, {
        id: '12',
        name: '王小虎',
        gender: '男',
        age: '24',
        date: '2016-05-02',
        address: '上海市普陀区金沙江路1518弄',
        zip: 200333
      }, {
        id: '13',
        name: '王小虎',
        gender: '男',
        age: '24',
        date: '2016-05-02',
        address: '上海市普陀区金沙江路1518弄',
        zip: 200333
      }, {
        id: '14',
        name: '王小虎',
        gender: '男',
        age: '24',
        date: '2016-05-02',
        address: '上海市普陀区金沙江路1518弄',
        zip: 200333
      }, {
        id: '15',
        name: '王小虎',
        gender: '男',
        age: '24',
        date: '2016-05-02',
        address: '上海市普陀区金沙江路1518弄',
        zip: 200333
      }, {
        id: '16',
        name: '王小虎',
        gender: '男',
        age: '24',
        date: '2016-05-02',
        address: '上海市普陀区金沙江路1518弄',
        zip: 200333
      }, {
        id: '17',
        name: '王小虎',
        gender: '男',
        age: '24',
        date: '2016-05-02',
        address: '上海市普陀区金沙江路1518弄',
        zip: 200333
      }, {
        id: '18',
        name: '王小虎',
        gender: '男',
        age: '24',
        date: '2016-05-02',
        address: '上海市普陀区金沙江路1518弄',
        zip: 200333
      }, {
        id: '19',
        name: '王小虎',
        gender: '男',
        age: '24',
        date: '2016-05-02',
        address: '上海市普陀区金沙江路1518弄',
        zip: 200333
      }]
    }
  }
}
</script>

<style scoped lang="less">
  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .clearfix:after {
    content: '';
    height: 0;
    clear: both;
    display: block;
    visibility: hidden;
  }
  .cell{
    .el-button{
      padding: 7px 14px;
    }
  }
  .el-icon-delete,
  .el-icon-edit {
    margin-right: 5px;
    margin-left: -3px;
  }

  .v-table-footer {
    margin-top: 20px;
  }
</style>
