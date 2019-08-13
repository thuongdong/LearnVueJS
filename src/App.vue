<template>
  <div id="container">
    <div id="app1">
      <p id="p1">BASIC</p>
      <p id="p2">PRICE PLAN</p>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <td>
            <p id="p3">Subtitle goes here</p>
            <p id="p4">Subtitle second line goes here lorem ipsum *</p>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>&#x2611; Lorem ipsum dolor sit amet</td>
        </tr>
        <tr>
          <td>&#x2611; Consectetur adipisicing elit aed do</td>
        </tr>
        <tr>
          <td>&#x2611; Eiusmod tempor incididunt ut</td>
        </tr>
        <tr>
          <td>&#x2611; Labore et dolore magna</td>
        </tr>
        <tr>
          <td>&#x2611; Enim ad ninim veniam quis nostrud</td>
        </tr>
        <tr>
          <td>Order</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<style>
#container {
  width: 1170px;
	margin: auto;
}
#app1 {
  margin: 138px 0 0 0;
  width: 390px;
  height: 272px;
  background: #00bcd4;
}
#p1 {
  margin: none;
  padding: 143px 0 0 48px;
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
}
#p2 {
  margin: none;
  padding: 0 0 0 48px;
  font-size: 26px;
  color: #ffffff;
}
#p3 {
  margin: 0;
  padding: 31px 0 0 48px;
  font-size: 12px;
  color: #5f727f;
}
#p4 {
  margin: 0;
  padding: 14px 0 28px 48px;
  font-size: 7px;
  color: #99a9b5;
}
td {
  padding: none;
  color: #5f727f;
}
th {
  padding: none;
}
.table-striped {
  padding: none;
  border-top-style: none;
  border-right-style: ridge;
  border-left-style: ridge;
  border-bottom-style: ridge;
  border-color: #dfe5e8;
  width: 390px;
}
</style>
