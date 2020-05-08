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
  <link type="text/css" rel="stylesheet" href="${_templatePath}/css/index.css" />
  <link type="text/css" rel="stylesheet" href="${_templatePath}/swiper/css/swiper.min.css" />
  <title>5G新玩法专区</title>
</head>

<body>
  <div class="bgFilter" style="display: none;">
    <div class="popWindow">
      <a href="javascript: jumpUrlAndRecord('${_templateParams.popUrl}', 'popWindow')">
        <img src="/iptv_epg/resource${_templateParams['popImg']}" alt="" class="popImg">
      </a>
    </div>
  </div>
  <div class="bgFilterDeveloping">
    <div class="popWindowDeveloping">
        <img src="/iptv_epg/resource${_templateParams['popDevelopingImg']}" alt="" class="popImg">
    </div>
  </div>
  <section class="carousel">
    <div class="swiper-container-banner">
      <div class="swiper-wrapper">

      </div>
      <div class="swiper-pagination"></div>
    </div>
  </section>

  <div class="mainContent" style="background: url('${_templatePath}/images/index/index_bg.png');background-size: 100%;">
    <section class="icon">
      <div class="iconShadowLeft">
        <img src="${_templatePath}/images/index/iconShadowLeft.png" alt="">
      </div>
      <div class="swiper-container-icon">
        <div class="swiper-wrapper">

        </div>
      </div>
      <div class="iconShadowRight">
        <img src="${_templatePath}/images/index/iconShadowRight.png" alt="">
      </div>
    </section>
    <section class="hot">
      <p class="channelName">本周热推</p>
      <div class="hotMain">

      </div>
      <div class="hotList">

      </div>
    </section>
    <section class="lovingSH">
      <p class="channelName">爱尚魔都</p>
      <div class="iconMore">
        <a href="javascript: jumpUrlAndRecord('lovingSHMore', 'more')">
          <img src="${_templatePath}/images/index/iconMore.png" alt="">
        </a>
      </div>
      <div class="lovingSHList">

      </div>
    </section>
    <section class="hotBusiness">
      <p class="channelName">热门业务</p>
      <div class="swiper-container-business">
        <div class="swiper-wrapper">

        </div>
    </section>
    <section class="youLike">
      <p class="channelName">猜你喜欢</p>
      <div class="iconMore">
        <a href="javascript: jumpUrlAndRecord('youLikeMore', 'more')">
          <img src="${_templatePath}/images/index/iconMore.png" alt="">
        </a>
      </div>
      <div class="youLikeList">

      </div>
    </section>
  </div>
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
  var _templatePath = '${_templatePath}';
</script>
<script src='${_templatePath}/js/common/jquery.min.js'></script>
<script src='${_templatePath}/js/common/jquery.cookie.js'></script>
<script src="${_templatePath}/js/common/jquery.scrollTo.min.js"></script>
<script src='${_templatePath}/js/common/md5.js'></script>
<script src='${_templatePath}/swiper/js/swiper.min.js'></script>
<script src='${_templatePath}/js/common/manifest.js'></script>
<script src='${_templatePath}/js/common/common.js'></script>
<script src='${_templatePath}/js/common/log.js'></script>
<script src='${_templatePath}/js/index.js'></script>
<script type='text/javascript'>
  document.body.style.zoom = (window.innerWidth / 750);
  window.onorientationchange = function () {
    setTimeout(function () { //延迟200等待屏幕翻转获取新屏幕宽度
      document.body.style.zoom = (window.innerWidth / 750);
    }, 200);
  }
</script>

</html>