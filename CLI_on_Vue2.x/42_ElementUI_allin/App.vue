<template>
  <div id="app">
    <input type="text" />
    <button>原生按钮</button>

    <el-row>
      <el-button type="primary">主要按钮</el-button>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </el-row>
    
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      input: '',
      pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: ''
    }
  }
};
</script>

<style>
</style>
