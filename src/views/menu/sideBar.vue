<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" router>
    <div class="title">管理系统</div>
    <el-menu-item index="home"
      ><el-icon><House></House></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2"
      ><el-icon><Document></Document></el-icon>
      <span>系统</span>
    </el-menu-item>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><User /></el-icon><span>用户管理</span></template
      ><el-menu-item index="1-1">item one</el-menu-item>
      <el-menu-item index="1-2">item two</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

onMounted(() => {});
</script>

<style scoped lang="scss">
.title {
  width: 200px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: #2c2c2c;
  color: aliceblue;
}
.el-menu {
  background-color: #2b303b;
  width: 200px;
  height: 100vh;
  border-right: 0px;
  .el-menu-item,
  :deep(.el-sub-menu__title),
  :deep(.el-menu-item) {
    color: aliceblue;
    background-color: #2b303b;
    &:hover {
      background-color: #006eff;
      color: #fff;
    }
  }
  //   :deep(.el-sub-menu__title) {
  //     color: aliceblue;
  //     background-color: #2b303b;
  //     &:hover {
  //       background-color: #006eff;
  //       color: #fff;
  //     }
  //   }
  //   :deep(.el-menu-item) {
  //     background-color: #2b303b;
  //     color: aliceblue;
  //     &:hover {
  //       background-color: #006eff;
  //       color: #fff;
  //     }
  //   }
}
</style>
