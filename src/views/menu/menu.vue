<template>
  <div class="menu-container">
    <el-container>
      <el-aside width="200px">
        <SideBar></SideBar>
      </el-aside>
      <el-container>
        <el-header>
          <HeaderVue></HeaderVue>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
//引入组件首字母需大写且用驼峰
import SideBar from "./sideBar.vue";
//引入组件
import HeaderVue from "./Header.vue";
import { ref } from "vue";
</script>

<style scoped lang="scss">
.menu-container {
  .el-aside {
    height: 100vh;
    background-color: #2b303b;
  }
  .el-header {
    height: 60px;
    background-color: #2c2c2c;
    color: aliceblue;
  }
}
</style>
