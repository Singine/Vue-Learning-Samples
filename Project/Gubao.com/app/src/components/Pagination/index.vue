<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">
      上一页
    </button>
    <button
      :class="{ active: pageNo == 1 }"
      @click="$emit('getPageNo', 1)"
      v-if="startNumEndNum.start > 1"
    >
      1
    </button>
    <button v-if="startNumEndNum.start > 2">···</button>

    <button
      @click="$emit('getPageNo', page)"
      v-for="(page, index) in startNumEndNum.end"
      :key="index"
      v-if="page >= startNumEndNum.start"
      :class="{ active: pageNo == page }"
    >
      {{ page }}
    </button>

    <button v-if="startNumEndNum.end < totalPage - 1">···</button>
    <button
      @click="$emit('getPageNo', totalPage)"
      v-if="startNumEndNum.end < totalPage"
    >
      {{ totalPage }}
    </button>
    <button
      :class="{ active: pageNo == totalPage }"
      :disabled="pageNo == totalPage"
      @click="$emit('getPageNo', pageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    totalPage() {
      let totalpage = Math.ceil(this.total / this.pageSize);
      return totalpage;
    },
    startNumEndNum() {
      let start,
        end = 0;

      if (this.continues > this.totalPage) {
        start = 1;
        end = this.totalPage;
      } else {
        if (this.pageNo < Math.ceil(this.continues / 2)) {
          start = 1;
          end = start + this.continues - 1;
        } else if (
          this.pageNo >
          this.totalPage - Math.ceil(this.continues / 2)
        ) {
          start = this.totalPage - this.continues + 1;
          end = this.totalPage;
        } else {
          start = this.pageNo - Math.floor(this.continues / 2);
          end = this.pageNo + Math.floor(this.continues / 2);
        }
      }
      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #333;
      color: #fff;
    }
  }
 
}
</style>