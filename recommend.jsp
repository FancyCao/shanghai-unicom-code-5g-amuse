<%@page contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=2.0,minimum-scale=1.0,user-scalable=no" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  <link type="text/css" rel="stylesheet" href="${_templatePath}/css/recommend.css" />
  <link type="text/css" rel="stylesheet" href="${_templatePath}/swiper/css/swiper.min.css" />
  <title>5G新玩法-推荐</title>
</head>

<body>
  <section class="carousel" style="background: url('${_templatePath}/images/recommend/carouselBg.png');">
    <div class="bannerShadowMain">
      <img src="${_templatePath}/images/recommend/bannerShadowMain.png" alt="">
    </div>
    <div class="swiper-container-banner">
      <div class="swiper-wrapper">

      </div>
    </div>
  </section>

  <section class="tab">
    <div class="tabShadowLeft">
      <img src="${_templatePath}/images/recommend/tabShadowLeft.png" alt="">
    </div>
    <div class="swiper-container-tab">
      <div class="swiper-wrapper">
        <div class="swiper-slide focus">
          <span class="tabName">今日话题</span>
          <img src="${_templatePath}/images/recommend/bar.png" alt="" class="bar">
        </div>
        <div class="swiper-slide">
          <span class="tabName">沃爱吃瓜</span>
          <img src="${_templatePath}/images/recommend/bar.png" alt="" class="bar">
        </div>
        <div class="swiper-slide">
          <span class="tabName">沃爱健身</span>
          <img src="${_templatePath}/images/recommend/bar.png" alt="" class="bar">
        </div>
        <div class="swiper-slide">
          <span class="tabName">沃爱美食</span>
          <img src="${_templatePath}/images/recommend/bar.png" alt="" class="bar">
        </div>
        <div class="swiper-slide">
          <span class="tabName">VR尝鲜</span>
          <img src="${_templatePath}/images/recommend/bar.png" alt="" class="bar">
        </div>
      </div>
    </div>
    <div class="tabShadowRight">
      <img src="${_templatePath}/images/recommend/tabShadowRight.png" alt="">
    </div>
  </section>

  <section class="page">
    <div class="loading">
      <img src="${_templatePath}/images/loading.gif" alt="">
    </div>
    <div class="swiper-container-page" style="visibility: hidden;">
      <div class="swiper-wrapper">

      </div>
    </div>
  </section>

  <nav style="background: url('${_templatePath}/images/nav/nav_bg.png');">
    <div class="active">
      <a href="javascript: jumpUrlAndRecord('index', 'nav')">
        <img src="${_templatePath}/images/nav/normal/index.png" alt="" class="normalImg">
        <img src="${_templatePath}/images/nav/active/index.png" alt="" class="activeImg">
      </a>
      <p class="title">首页</p>
    </div>
    <div>
      <a href="javascript: jumpUrlAndRecord('hotActivity', 'nav')">
        <img src="${_templatePath}/images/nav/normal/hot.png" alt="" class="normalImg">
        <img src="${_templatePath}/images/nav/active/hot.png" alt="" class="activeImg">
      </a>
      <p class="title">热门活动</p>
    </div>
    <div>
      <a href="javascript: jumpUrlAndRecord('historyRecommend', 'nav')">
        <img src="${_templatePath}/images/nav/normal/history.png" alt="" class="normalImg">
        <img src="${_templatePath}/images/nav/active/history.png" alt="" class="activeImg">
      </a>
      <p class="title">往期推荐</p>
    </div>
    <div>
      <a href="javascript: jumpUrlAndRecord('mine', 'nav')">
        <img src="${_templatePath}/images/nav/normal/mine.png" alt="" class="normalImg">
        <img src="${_templatePath}/images/nav/active/mine.png" alt="" class="activeImg">
      </a>
      <p class="title">我的</p>
    </div>
  </nav>
</body>

<script>
</script>
<script src='${_templatePath}/js/common/jquery.min.js'></script>
<script src='${_templatePath}/js/common/jquery.cookie.js'></script>
<script src='${_templatePath}/js/common/md5.js'></script>
<script src='${_templatePath}/swiper/js/swiper.min.js'></script>
<script src='${_templatePath}/js/common/manifest.js'></script>
<script src='${_templatePath}/js/common/common.js'></script>
<script src='${_templatePath}/js/common/log.js'></script>
<script src="${_templatePath}/js/recommend.js"></script>
<script type='text/javascript'>
  document.body.style.zoom = (window.innerWidth / 750);
  window.onorientationchange = function () {
    setTimeout(function () { //延迟200等待屏幕翻转获取新屏幕宽度
      document.body.style.zoom = (window.innerWidth / 750);
    }, 200);
  }
</script>

</html>