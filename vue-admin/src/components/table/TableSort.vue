<template>
  <el-container>
    <el-header height="50px"><m-head title="排序表格"></m-head></el-header>
    <el-main>
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
          sortable
          width="80">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          sortable
          width="120">
        </el-table-column>
        <el-table-column
          prop="gender"
          label="性别"
          sortable
          width="100">
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
          sortable
          width="100">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          sortable
          width="120">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          sortable
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          sortable
          width="auto">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="180">
          <template slot-scope="scope">
            <el-button @click="updateClick(scope.row, scope.$index)" type="primary" size="mini">
              <i class="el-icon-edit">修改</i>
            </el-button>
            <el-button @click="deleteClick(scope.row)" type="danger" size="mini">
              <i class="el-icon-delete">删除</i>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="clearfix v-table-footer">
        <div class="fl">
          <el-row>
            <el-button @click="deleteAll" type="danger" class="el-button--small" :disabled="isDisabled"><i
              class="el-icon-delete"></i>批量删除
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
    </el-main>
  </el-container>
</template>

<script>
import mHead from './MHead.vue'
export default {
  name: 'TableSort',
  methods: {
    // 修改记录
    updateClick (row, index) {
      this.$router.push({ path: '/home/tableupdate/*' + row.id })
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
    // 删除记录
    deleteClick (row) {
      let arr = this.tableData
      this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        arr.forEach((el, index) => {
          // 找到数组里的这个对象,然后删除
          if (el.id === row.id) {
            arr.splice(index, 1)
          }
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 批量删除
    deleteAll () {
      let arr = this.multipleSelection
      let tableArr = this.tableData
      this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData = tableArr.filter((el, index) => {
          return arr.indexOf(el) < 0
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    Change (val) {
      console.log(val)
      console.log(Boolean(val.length))
      // console.log(this);
      this.isDisabled = !val.length
      this.selection = val
    },

    // 分页
    loadData () {
      this.total = this.tableData.length
    },
    current_change (currentPage) {
      this.currentPage = currentPage
    }
  },
  // 获取修改后记录
  // 获取修改后记录
  mounted () {
    let obj = this.$store.state.obj
    if (obj) {
      this.tableData.forEach((el, index) => {
        if (el.id === obj.id) {
          this.tableData[index] = obj
        }
      })
    }
  },
  data () {
    return {
      // 请求时的loading效果
      load_data: false,
      // 勾选的记录
      selection: [],
      total: 0, // 默认数据总数
      pageSize: 10, // 默认每页条数
      currentPage: 1, // 默认开始页面
      isDisabled: true,
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
  },
  components: {
    mHead
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
  .el-header{
    border-bottom: 1px dotted #909399;
    border-radius: 7px 7px 0 0;
  }
  .el-main{
    background: #ffffff;
    border-radius: 0 0 7px 7px;
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
  .v-table-footer {
    margin-top: 20px;
  }
</style>
