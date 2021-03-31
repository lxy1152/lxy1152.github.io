---
title: 收藏
date: 2021-03-22 22:00:17
---

## 导航/聚合类网站

<div><div class="links-content"><div class="link-navigation aggregation"></div></div></div>

## 工具网站

<div><div class="links-content"><div class="link-navigation useful"></div></div></div>

## 文档

<div><div class="links-content"><div class="link-navigation docs"></div></div></div>

<script src="https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js"></script>
<script src="./favorites.js"></script>

<style>
.links-content {
  margin-top: 1rem;
}

.link-navigation::after {
  content: " ";
  display: block;
  clear: both
}

.card {
  position: relative;
  width: 25%;
  padding: 0;
  border-radius: 10px;
  transition-duration: .3s;
  margin-bottom: 1rem;
  margin-left: 16px;
  display: block;
  float: left;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,.12);
  background: transparent;
  overflow: hidden;
}

.card:hover:before, .card:focus:before, .card:active:before {
  -webkit-transform: scale(1);
  transform: scale(1);
}

.card:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid #5cb85c;
  border-radius: 15px;
  -webkit-transform: scale(0);
  transform: scale(0);
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.15s;
  transition-duration: all 0.15s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.card:hover,.card:hover > .card-header a,.card:hover > .card-content a{
    cursor: pointer;
    transform: scale(1);
}

@media(max-width:567px) {
  .card{
      margin-left: 16px;
      width: calc((100% - 16px)/2)
  }
  .card:nth-child(2n+1) {
      margin-left: 0
  }
  .card:not(:nth-child(2n+1)) {
      margin-left: 16px
  }
}

@media(min-width:567px) {
  .card {
    margin-left: 16px;
    width: calc((100% - 32px)/3)
  }

  .card:nth-child(3n+1) {
    margin-left: 0
  }

  .card:not(:nth-child(3n+1)) {
    margin-left: 16px
  }
}

@media(min-width:768px) {
  .card {
    margin-left:16px;
    width:calc((100% - 48px)/4)
  }

  .card:nth-child(4n+1) {
    margin-left:0
  }

  .card:not(:nth-child(4n+1)) {
    margin-left:16px
  }
}

.posts-expand .post-body img {
  margin: 0;
  padding: 0;
  border: 0
}

.card .card-header {
  display: block;
  text-align: center;
  padding: .25rem .25rem;
  font-weight: 500;
  color: #222222;
  white-space: nowrap;
}

.card .card-header a {
  font-style: normal;
  color: #222222;
  font-weight: 700;
  text-decoration: none;
  border: 0;
  overflow: hidden
}

.card .card-header a:hover {
  color: #222222;
  text-decoration: none;
  border: 0
}

.card .card-content {
  display: block;
  text-align: center;
  padding: 0 .25rem .25rem .25rem;
  font-weight: 500;
  font-size: smaller;
  color: #222222;
  white-space: nowrap;
}

.card .card-content div {
  overflow: hidden
}

.card .card-content a {
  font-style: normal;
  color: #222222;
  font-weight: 500;
  text-decoration: none;
  border: 0;
  overflow: hidden
}
</style>

