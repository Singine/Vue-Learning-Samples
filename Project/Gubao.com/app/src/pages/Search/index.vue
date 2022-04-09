<template>
<div>
  <h2>search</h2>
  <h3>params: {{$route.params.keyword}}</h3>
  <h3>query: {{$route.query.k}}</h3>
</div>
</template>

<script>
export default {
    name:'Search',
    props:['keyword']
}
</script>

<style>

</style>