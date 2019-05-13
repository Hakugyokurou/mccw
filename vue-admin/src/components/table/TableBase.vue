<template>
  <div style="width: 90%">
  <el-table
    ref="multipleTable"
    :data="tableData.slice((currentPage-1)*pageSize, currentPage*pageSize)"
    tooltip-effect="dark"
    border
    style="width: 100%"
    :header-cell-style="{background:'#EEF1F6'}"
    @select="handleSelectionChange">
    <!--@select="handleSelectionChange">-->
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      fixed
      prop="id"
      label="id"
      width="60">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="80">
    </el-table-column>
    <el-table-column
      prop="gender"
      label="性别"
      width="80">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄"
      width="80">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="100">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="160">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="primary" class="el-button--small"><i class="el-icon-edit"></i>修改</el-button>
        <el-button type="danger" class="el-button--small"><i class="el-icon-delete"></i>删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <div class="clearfix v-table-footer">
      <div class="fl">
        <el-row>
          <el-button type="danger" class="el-button--small" :disabled="isDisabled" ><i class="el-icon-delete"></i>批量删除</el-button>
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
    name: "TableBase",
    methods: {
      handleClick(row) {
        this.$router.push({path: '/tableupdate/'+row.id})
        this.$store.commit('incrment', {id: row.id, name: row.name, gender: row.gender, age: row.age, date: row.date, zip: row.zip, address: row.address})
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.isDisabled = !Boolean(val.length)
        // this.multipleSelection = val;
      },
      loadData() {
        this.total = this.tableData.length
      },
      current_change(currentPage) {
        this.currentPage = currentPage
      }
    },
    mounted() {
      let obj = this.$store.state.obj
      if (obj) {
        this.tableData.forEach((el,index)=>{
          if (el.id===obj.id) {
            this.tableData[index]=obj
          }
        })
      }
    },
    data() {
      return {
        total: 0,      //默认数据总数
        pageSize: 10,  //默认每页条数
        currentPage: 1,  //默认开始页面
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
        },{
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
  .cell {
    .el-button {
      width: 61px;
      height: 28px;
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
