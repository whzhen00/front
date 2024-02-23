<template>
  <div class="container">
    <div class="header-left"><span>欢迎</span></div>
    <div class="header-right">
      <el-icon><ChatDotRound /></el-icon>
      <el-icon><Avatar /></el-icon>
      <el-dropdown>
        <span
          >设置
          <el-icon>
            <arrow-down></arrow-down>
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>账号信息</el-dropdown-item>
            <el-dropdown-item>变换主题</el-dropdown-item>
            <el-dropdown-item>推出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.container {
  padding: 0;
  height: 60px;
  background-color: #2c2c2c;
  color: aliceblue;
  display: flex;
  justify-content: space-between;
  .header-left {
    line-height: 60px;
  }
  .header-right {
    width: 200px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>
