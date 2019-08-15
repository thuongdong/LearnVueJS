<template>
  <div class="content">
    <div class="box-row">
      <div class="circle">
        <p class="price">$99</p>
        <p class="person">/person</p>
      </div>
      <div class="app">
        <div class="app1">
          <p class="p1">BASIC</p>
          <p class="p2">PRICE PLAN</p>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>     
              <p class="p3">Subtitle goes here</p>
              <p class="p4">Subtitle second line goes here lorem ipsum *</p>
            </tr>
          </thead>
          <tbody>
            <tr>
              <p class="row">&#x2611; Lorem ipsum dolor sit amet</p>
            </tr>
            <tr>
              <p class="row">&#x2611; Consectetur adipisicing elit aed do</p>
            </tr>
            <tr>
              <p class="row">&#x2611; Eiusmod tempor incididunt ut</p>
            </tr>
            <tr>
              <p class="row">&#x2611; Labore et dolore magna</p>
            </tr>
            <tr>
              <p class="row">&#x2611; Enim ad ninim veniam quis nostrud</p>
            </tr>
            <tr class="trorder">
              <p class="order">ORDER</p>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="box-row">
      <div>
        <div class="circle">
          <p class="price">$199</p>
          <p class="person">/person</p>
        </div>
        <div class="new">
          <img src="./assets/icon.png" alt="">
          <p class="text-new">NEW</p>
        </div>
      </div>
      <div class="app">
        <div class="app2">
          <p class="p21">ADVANCED</p>
          <p class="p22">PRICE PLAN</p>
          <p class="p23">This is the very best price/quantity advanced plan *</p>
        </div>
        <table class="table table-striped" id="table">
          <thead>
            <tr>     
              <p class="p3">Subtitle goes here</p>
              <p class="p4">Subtitle second line goes here lorem ipsum *</p>
            </tr>
          </thead>
          <tbody>
            <tr>
              <p class="row">&#x2611; Lorem ipsum dolor sit amet</p>
            </tr>
            <tr>
              <p class="row">&#x2611; Consectetur adipisicing elit aed do</p>
            </tr>
            <tr>
              <p class="row">&#x2611; Eiusmod tempor incididunt ut</p>
            </tr>
            <tr>
              <p class="row">&#x2611; Labore et dolore magna</p>
            </tr>
            <tr>
              <p class="row">&#x2611; Enim ad ninim veniam quis nostrud</p>
            </tr>
            <tr class="trorder">
              <p class="order1">ORDER</p>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="box-row">
      <div class="circle">
        <p class="price3">$1999</p>
        <p class="person">/person</p>
      </div>
      <div class="app">
        <div class="app3">
          <p class="p1">LIFE</p>
          <p class="p2">TARIFE</p>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>     
              <p class="p3">Subtitle goes here</p>
              <p class="p4">Subtitle second line goes here lorem ipsum *</p>
            </tr>
          </thead>
          <tbody>
            <tr>
              <p class="row">&#x2611; Lorem ipsum dolor sit amet</p>
            </tr>
            <tr>
              <p class="row">&#x2611; Consectetur adipisicing elit aed do</p>
            </tr>
            <tr>
              <p class="row">&#x2611; Eiusmod tempor incididunt ut</p>
            </tr>
            <tr>
              <p class="row">&#x2611; Labore et dolore magna</p>
            </tr>
            <tr>
              <p class="row">&#x2611; Enim ad ninim veniam quis nostrud</p>
            </tr>
            <tr class="trorder">
              <p class="order">ORDER</p>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
.content {
  width: 1170px;
  margin: auto;
}
.box-row {
  float: left;
  width: 390px;
  height: 830px;
}
.circle {
  margin: 76px 0 0 42px;
  position: relative;
  width: 124px;
  height: 124px;
  background: #393d50;
  -moz-border-radius: 62px;
  -webkit-border-radius: 62px;
  --border-radius: 62px;
  border-radius: 62px;
}
.new {
  float: left;
  position: relative;
  margin: -100px 0 0 148px;
}
.text-new {
  margin: -41px 0 0 18px;
  color: #ffffff;
  font-size: 14px;
}
.price {
  text-align: center;
  color: #0bc2dc;
  font-size: 23px;
  padding-top: 38px;
  margin-bottom: 0;
}
.price3 {
  text-align: center;
  color: #9986ff;
  font-size: 23px;
  padding-top: 38px;
  margin-bottom: 0;
}
.person {
  text-align: center;
  color: #93a2ae;
  font-size: 14px;
  margin-bottom: 0;
}
.app {
  margin: -62px 0 0 0;
  color: #f23665;
}
.app1 {
  width: 390px;
  height: 272px;
  background: #00bcd4;
}
.app2 {
  width: 390px;
  height: 272px;
  background: #1c94ca;
}
.app3 {
  width: 390px;
  height: 272px;
  background: #7264bd;
}
.p1 {
  margin: 0;
  padding: 143px 0 0 48px;
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
  font-family: Arial;
}
.p21 {
  margin: 0;
  padding: 108px 0 0 48px;
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
  font-family: Arial;
}
.p2 {
  margin: 0;
  padding: 16px 0 50px 48px;
  font-size: 26px;
  color: #ffffff;
  font-family: Arial;
}
.p22 {
  margin: 0;
  padding: 16px 0 0 48px;
  font-size: 26px;
  color: #ffffff;
  font-family: Arial;
}
.p23 {
  margin: 0;
  padding: 15px 0 0 48px;
  font-size: 10px;
  color: #ffffff;
  font-family: Arial;
}
.p3 {
  margin: 0;
  padding: 31px 0 0 48px;
  font-size: 12px;
  color: #5f727f;
  font-family: Arial;
}
.p4 {
  margin: 0;
  padding: 14px 0 28px 48px;
  font-size: 10px;
  color: #99a9b5;
  font-family: Arial;
}
.row {
  padding: 18px 0 21px 48px;
  margin: 0px;
  font-family: Arial;
}
.table-striped {
  border-top-style: none;
  border-right-style: ridge;
  border-left-style: ridge;
  border-bottom-style: ridge;
  border-color: #dfe5e8;
  width: 390px;
}
#table {
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  border-bottom-style: ridge;
  border-color: #dfe5e8;
  width: 390px;
}
.trorder {
  height: 146px;
}
.order {
  margin: 48px 0 0 48px;
  background: #b6c6c9;
  width: 150px;
  height: 50px;
  border-radius: 50px;
  text-align: center;
  color: #ffffff;
  font-size: 13px;
  padding-top: 17px;
  font-weight: bold;
  font-family: Arial;
}
.order1 {
  margin: 48px 0 0 48px;
  background: #2c2e3d;
  width: 150px;
  height: 50px;
  border-radius: 50px;
  text-align: center;
  color: #ffffff;
  font-size: 13px;
  padding-top: 17px;
  font-weight: bold;
  font-family: Arial;
}
</style>
