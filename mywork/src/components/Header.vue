<template>
  <el-header class="header boder">
      <div class="header-menu boder">
        <div class="header-left boder">
          <el-image
            style="width: 80px; height: 30px"
            :src="url"
            fit="fill"></el-image>
        </div>
        <div class="header-right boder">
          <el-menu
            :default-active="activeIndex2"
            class=""
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">

            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="#" target="_blank">订单管理</a></el-menu-item>
          </el-menu>
        </div>
      </div>

  </el-header>


</template>

<script>
import imgUrl from '../assets/logo.png';
export default {
  name: 'Header',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      url:imgUrl,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.boder{
  border: aqua solid 1px;
}
.header {
  position: absolute;
  top: 0;
  left: 0;
  background: #2c3e50;
  width: 100%;
  height: 80px;
}
.header-menu{
  height: 60px;
}
.header-right{
  float: right;
}
.header-left{
  float: left;
}
</style>
