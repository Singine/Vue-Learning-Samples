<template>
  <div>
    <button @click="getStudentInfo">获取学生信息</button>
    <br>
    <br>
    <button @click="getCarInfo">获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  methods:{
    getStudentInfo(){
      axios.get('http://localhost:8080/api_students/students').then(
        response => {
          console.log('请求成功,',response.data)
        },
        error =>{
          console.log('请求失败,',error)
          console.log('message:',error.message)
        }
      );

    },
    getCarInfo(){
       axios.get('http://localhost:8080/api_cars/cars').then(
        response => {
          console.log('请求成功,',response.data)
        },
        error =>{
          console.log('请求失败,',error)
          console.log('message:',error.message)
        }
      );
    }
  }
};
</script>

<style>
</style>
