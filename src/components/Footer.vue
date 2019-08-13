<template>
  <footer class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="left">Left Footer</div>
        <div class="right">Right Footer</div>
      </div>
    </div>
  </footer><!-- end of footer -->
</template>

<style scoped>
.container-fluid {
  width: 100%;
  height: 133px;
}
.container {
  width: 960px;
  margin: auto;
}
.clearfix {
  clear: both;
}
footer {
  background: #2383c8;
  border-top: solid 6px #efefef;
  height: 90px;
  color: #fff;
}
footer .row {
  padding-top: 20px;
}
footer .row .left {
  float: left;
}
footer .row .right {
  float: right;
}
</style>