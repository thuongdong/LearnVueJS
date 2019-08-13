<template>
  <header class="container-fluid">
    <div class="container">
      <div class="top-header">
        <div class="logo">
          <img src="../assets/1.png">
        </div>
        <div class="form">
          <form action="">
            <input type="text" placeholder="Search">
            <input type="submit">
          </form>
        </div>
      </div>

      <div class="menu clearfix">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#" class="current">Services</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </div>
    </div>
  </header><!-- end of header -->
</template>

<style scoped>
body {
  background: #fff;
  color: #5f5f5f;
  font-family: Arial;
  font-size: 12px;
}
a {
  color: #0092dd;
}
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
header {
  height: 120px;
  border-top: solid 10px #15aae6;
  border-bottom: solid 1px #e1e1e1;
}
header .top-header {
  margin-top: 20px;
}
header .top-header .logo {
  float: left;
}
header .top-header .form {
  float: right;
  border: solid 1px #e1e1e1;
  padding: 5px;
  border-radius: 5px
}
header .top-header .form input {
  border: none;
}
header .top-header .form input[type="submit"] {
  text-indent: -9999px;
  background: url(../assets/search.png) no-repeat;
  width: 38px;
  height: 34px;
}
header .menu {
  float: right;
  margin-top: 22px; 
}
header .menu ul li {
  float: left;
  list-style-type: none;
}
header .menu ul li a {
  color: #5f5f5f;
  text-decoration: none;
  padding: 14px;
}
header .menu ul li a:hover, header .menu ul li a.current {
  border: solid 1px #e1e1e1;
  border-bottom: none;
  border-radius: 5px 5px 0 0;
  background: #efefef;
}
</style>
