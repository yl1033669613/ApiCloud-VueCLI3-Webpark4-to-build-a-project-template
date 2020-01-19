<template>
  <div class="container" v-cloak>
    <p class="txt">这是一个使用普通header 的 window</p>
    <p>使用的是公共header页</p>
    <input type="text" class="input-row" placeholder="请输入内容">
  </div>
</template>

<script>
export default {
  name: 'normal_header_win'
}
</script>

<style lang="scss">
.container {
  text-align: center;
}

p {
  font-size: 0.28rem;
}

.txt {
  font-size: 0.3rem;
  font-weight: bold;
  padding: 1rem 0;
}

.input-row {
  background: #f5f5f5;
  width: 5rem;
  display: block;
  height: 0.8rem;
  margin: 0.3rem auto;
  box-sizing: border-box;
  padding: 0.15rem;
  border-radius: 5px;
}
</style>
