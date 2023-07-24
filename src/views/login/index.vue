<template>

  <div class='login'>
     我是login
     <span class="sp">还好哈哈哈</span>
     <h1>token:{{ globalStore.token }}</h1>
     <el-button type="prymary" @click="updataToken"></el-button>
  </div>

</template>

<script setup lang='ts'>
import {ref, reactive} from 'vue'
import {GlobalStore} from '@/stores/index'
const globalStore = GlobalStore()
const updataToken = () => {
  globalStore.token = '1111'
}
</script>

<style scoped lang="scss">
@import './index.scss';
.login{
  font-size: 30px;
  .sp{
    color: #bfc;
  }
}

</style>
