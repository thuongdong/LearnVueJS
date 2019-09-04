<template>
  <div class="table-price">
    <div class="table-col">
      <div class="price">$99<span class="price-limit">/person</span></div>
      <div class="table-level-basic">
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
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipisicing elit aed do</li>
          <li>Eiusmod tempor incididunt ut</li>
          <li>Labore et dolore magna</li>
          <li>Enim ad ninim veniam quis nostrud</li>
        </ul>
      </div>
      <div class="table-footer">
        <div class="table-footer-purchase">
          <a href="https://www.w3schools.com/css/default.asp">ORDER</a>
        </div>
      </div>
    </div>
    <div class="table-col">
      <div class="price">
        $199
        <span class="price-limit">/person</span>
        <div class="new">
          NEW
        </div>
      </div>
      <div class="table-level-advanced">
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
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipisicing elit aed do</li>
          <li>Eiusmod tempor incididunt ut</li>
          <li>Labore et dolore magna</li>
          <li>Enim ad ninim veniam quis nostrud</li>
        </ul>
      </div>
      <div class="table-footer">
        <div class="table-footer-purchase">
          <a href="https://www.w3schools.com/css/default.asp">ORDER</a>
        </div>
      </div>
    </div>
    <div class="table-col">
      <div class="price">$1999<span class="price-limit">/person</span></div>
      <div class="table-level-lift">
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
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipisicing elit aed do</li>
          <li>Eiusmod tempor incididunt ut</li>
          <li>Labore et dolore magna</li>
          <li>Enim ad ninim veniam quis nostrud</li>
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
*, *:before, *:after {
  box-sizing: border-box;
}
.table-price {
  margin-top: 150px;
  margin-bottom: 150px; 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: 'Source Sans Pro', sans-serif;
}
.table-price .table-col {
  position: relative;
  width: 391px;
  margin-bottom: 70px; 
  border: 0.5px solid #dfe5e8;
}
.table-level-basic {
  padding: 42.43% 0 16.9% 12.53%;
  color: #ffffff;
  background: #00bcd4;
}
.table-level-advanced {
  padding: 36.5% 0 16.9% 12.53%;
  color: #ffffff;
  background: #1c94ca;
}
.table-level-lift {
  padding: 42.43% 0 16.9% 12.53%;
  color: #ffffff;
  background: #7264bd;
}
.price {
  position: absolute;
  width: 7.5rem;
  height: 7.5rem;
  transform: translateY(-50%);
  left: 12.53%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 23px;
  color: #1b9dd9;
  text-align: center;
  background: #393d50;
  border-radius: 50%;
}
.table-col-2 .price {
  color: #9986ff;
}
span.price-limit {
  display: block;
  font-size: 14px;
  color: #93a2ae;
}
.table-title-text {
  padding: 8% 0 8% 12.53%;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-weight: 200;
  color: #9fa9b0;
}
li {
  padding: 0 0 0 18%;
  line-height: 50px;
  background: #ffffff;
}
li:before {
  position: absolute;
  content: "\2611";
  left: 12.53%;
}
li:nth-child(odd) {
  background: #f4f6f7;
}
.table-footer-purchase {
  padding: 12.53% 0 14% 12.53%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
a {
  padding: 4% 9%;
  color: #ffffff;
  background: #b6c6c9;
  border-radius: 30px;
}
a:hover {
  text-decoration: none;
  color: #ffffff;
  background: #2c2e3d;
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
  font-size: 24px;
  font-weight: 200;
}
h6 {
  color: #d3d7da;
  font-weight: 400;
  font-size: 13px;
}
.table-level h6 {
  color: #ffffff;
  font-size: 14px;
}
.new {
  position: absolute;
  left: 85%;
  width: 66px;
  height: 66px;
  padding-top: 20%;
  font-size: 14px;
  color: #ffffff;
  background-image: url("./assets/icon.png");
}
</style>