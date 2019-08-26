<template>
  <div class="table-price">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:200,700&display=swap" rel="stylesheet">
    <div class="table-col-1">
      <div class="table-level">
        <div class="price">$99<span class="price-limit">/person</span></div>
        <h2 class="">BASIC</h2>
        <h1 class="">PRICE PLAN</h1>
      </div>
      <div class="table-title">
        <div class="table-title-text">
          <h3>Subtitle goes here</h3>
          <h6>Subtitle second line goes here lorem ipsum *</h6>
        </div>
      </div>
      <div class="table-list">
        <ul>
          <li>&#x2611; Lorem ipsum dolor sit amet</li>
          <li>&#x2611; Consectetur adipisicing elit aed do</li>
          <li>&#x2611; Eiusmod tempor incididunt ut</li>
          <li>&#x2611; Labore et dolore magna</li>
          <li>&#x2611; Enim ad ninim veniam quis nostrud</li>
        </ul>
      </div>
      <div class="table-footer">
        <div class="table-footer-purchase">
          <a href="https://www.w3schools.com/css/default.asp">ORDER</a>
        </div>
      </div>
    </div>
    <div class="table-col-2">
      <div class="table-level">
        <div class="price">
          $199
          <span class="price-limit">/person</span>
          <div class="new">
           NEW
          </div>
        </div>
        <h2 class="">ADVANCED</h2>
        <h1 class="">PRICE PLAN</h1>
        <h6>This is the very best price/quantity advanced plan *</h6>
      </div>
      <div class="table-title">
        <div class="table-title-text">
          <h3>Subtitle goes here</h3>
          <h6>Subtitle second line goes here lorem ipsum *</h6>
        </div>
      </div>
      <div class="table-list">
        <ul>
          <li>&#x2611; Lorem ipsum dolor sit amet</li>
          <li>&#x2611; Consectetur adipisicing elit aed do</li>
          <li>&#x2611; Eiusmod tempor incididunt ut</li>
          <li>&#x2611; Labore et dolore magna</li>
          <li>&#x2611; Enim ad ninim veniam quis nostrud</li>
        </ul>
      </div>
      <div class="table-footer">
        <div class="table-footer-purchase">
          <a href="https://www.w3schools.com/css/default.asp">ORDER</a>
        </div>
      </div>
    </div>
    <div class="table-col-3">
      <div class="table-level">
        <div class="price">$1999<span class="price-limit">/person</span></div>
        <h2 class="">LIFT</h2>
        <h1 class="">TAIFF</h1>
      </div>
      <div class="table-title">
        <div class="table-title-text">
          <h3 class="h33">Subtitle goes here</h3>
          <h6>Subtitle second line goes here lorem ipsum *</h6>
        </div>
      </div>
      <div class="table-list">
        <ul>
          <li>&#x2611; Lorem ipsum dolor sit amet</li>
          <li>&#x2611; Consectetur adipisicing elit aed do</li>
          <li>&#x2611; Eiusmod tempor incididunt ut</li>
          <li>&#x2611; Labore et dolore magna</li>
          <li>&#x2611; Enim ad ninim veniam quis nostrud</li>
        </ul>
      </div>
      <div class="table-footer">
        <div class="table-footer-purchase">
          <a href="https://www.w3schools.com/css/default.asp">ORDER</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.table-price {
  margin-top: 150px;
  margin-bottom: 150px; 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.table-price .table-col-1 {
  width: 391px;
  margin-bottom: 70px;
  border: 0.5px solid #dfe5e8;
}
.table-price .table-col-2 {
  width: 391px;
  margin-bottom: 70px;
  border: 0.5px solid #dfe5e8;
}
.table-price .table-col-3 {
  width: 391px;
   margin-bottom: 70px;
  border: 0.5px solid #dfe5e8;
}
.table-level {
  position: relative;
  padding: 42.43% 0 16.9% 12.53%;
  color: #ffffff;
  background: #00bcd4;
}
.table-col-2 .table-level {
  background: #1c94ca;
  position: relative;
  padding: 36.2% 0 16.9% 12.53%;
}
.table-col-3 .table-level {
  background: #7264bd;
}
.price {
  position: absolute;
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background: #393d50;
  top: -18%;
  text-align: center;
  color: #1b9dd9;
  font-size: 23px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.table-col-2 .price {
    color: #9986ff;
}
span.price-limit {
  display: block;
  color: #93a2ae;
  font-size: 14px;
}
.table-title-text {
  padding: 8% 0 8% 12.53%;;
}
ul {
  list-style-type: none;
  color: #9fa9b0;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 200;
  margin: 0;
  padding: 0;
}
li {
  line-height: 50px;
  padding: 0 0 0 12.53%;
  background: #ffffff;
}
li:nth-child(odd) {
  background: #f4f6f7;
}
.table-footer {
  height: 146px;
}
.table-footer-purchase {
  padding: 12.53% 0 0 12.53%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
a {
  color: #ffffff;
  background: #b6c6c9;
  padding: 4% 9%;
  border-radius: 30px;
}
a:hover {
  color: #ffffff;
  background: #2c2e3d;
  text-decoration: none;
}
h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 32px;
}
h1 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  font-size: 36px;
}
h3 {
  color: #d3d7da;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 24px;
  font-weight: 200;
}
h6 {
  color: #d3d7da;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  font-size: 13px;
}
.table-level h6 {
  color: #ffffff;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 14px;
}
.new {
  position: absolute;
  font-size: 14px;
  color: #ffffff;
  padding-top: 20%;
  width: 66px;
  height: 66px;
  margin: 0 0 0 85%;
  background-image: url("./assets/icon.png");
}
</style>