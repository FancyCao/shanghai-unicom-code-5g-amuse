// 用户信息
var userNum = $.cookie('userId');
console.log(userNum);
if (!userNum) {
  userNum = getUuid();
  $.cookie('userId', userNum);
}

// 防止第一次进入页面时参数丢失
var url = window.location.href;
var pathname = window.location.pathname;
var index = pathname.lastIndexOf("\/");
str = pathname.substring(index + 1, pathname.length);
if (!getQueryString('user_id')) {
  history.replaceState(null, null, str + '?user_id=111&return=111');
}

var categoryCode; //首页编排code
if (env == '现网') {
  categoryCode = 'shlt_video_weixin_02';
} else if (env == '测试') {
  categoryCode = 'shlt_video_weixin_02';
}

// banner位swiper组件初始化
function initBannerSwiper() {
  var mySwiperBanner = new Swiper('.swiper-container-banner', {
    autoplay: true, //可选选项，自动滑动
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      modifierClass: 'my-pagination-',
      bulletClass: 'my-bullet',
      bulletActiveClass: 'my-bullet-active'
    },
  })
}

// icon位swiper组件初始化
function initIconSwiper() {
  var mySwiperIcon = new Swiper('.swiper-container-icon', {
    slidesPerView: 4.5,
    spaceBetween: 15,
    freeMode: true,
    resistanceRatio: 0.95,
    watchSlidesProgress: true,
    on: {
      progress: function () {
        if (this.progress > 0) {
          $('.iconShadowLeft').addClass('iconShadowLeftShown');
        } else {
          $('.iconShadowLeft').removeClass('iconShadowLeftShown');
        }
        if (this.progress != 1) {
          $('.iconShadowRight').addClass('iconShadowRightShown');
        } else {
          $('.iconShadowRight').removeClass('iconShadowRightShown');
        }
      }
    }
  })
}

// 热门业务swiper组件初始化
function initBusinessSwiper() {
  var mySwiperBusiness = new Swiper('.swiper-container-business', {
    slidesPerView: 2.7,
    spaceBetween: 24,
    freeMode: true,
    resistanceRatio: 0.95,
  })
}

// 查询子栏目
function getCategoryList() {
  $.ajax({
    url: epgUrl + '/api/categorylist/' + categoryCode + '.json',
    type: 'GET',
    data: {},
    async: true,
    dataType: 'json',
    success: function (data) {
      if (data.status == 200) {
        let { result } = data;
        result.forEach((item, index) => {
          var code = item.code;
          switch (item.title) {
            case '首页banner':
              initBanner(code);
              break;
            case '首页icon':
              initIcon(code);
              break;
            case '首页本周热推':
              initHot(code);
              break;
            case '首页爱尚魔都':
              initlovingSH(code);
              break;
            case '首页热门业务':
              initHotBusiness(code);
              break;
            case '首页猜你喜欢':
              initYouLike(code);
              break;
            case '首页底部icon':
              initNav(code);
              break;
            default:
              break;
          }
        });
        // initPopWindow();
      }
    },
    error: function (xhr, error) {
      console.log(error);
    }
  });
}

// 初始化首页banner
function initBanner(code) {
  console.log('初始化首页banner');
  $.ajax({ //获取编排栏目
    url: epgUrl + '/api/categoryitem/' + code + '.json',
    type: 'GET',
    data: {},
    async: true,
    dataType: 'json',
    success: function (data) {
      if (data.status == 200) {
        let { resultSet } = data;
        resultSet.forEach((item, index) => {
          $('.swiper-container-banner .swiper-wrapper').append(`
          <div class="swiper-slide">
            <a href="javascript: gotoLinkAndRecord('${item.itemCode}', '${sourceUidObj.sourceUidBanner_index[index]}')">
              <img src="${epgUrl + '/resource' + item.itemIcon}" alt="" class="poster">
              <img src="${_templatePath}/images/index/carouselTextShadow.png" alt="" class="carouselTextShadow">
              <p class="title">${item.title}</p>
            </a>
          </div>
          `);
        });
        // TODO
        if (resultSet.length > 1) {
          initBannerSwiper();
        }
      }
    },
    error: function (xhr, error) {
      console.log(error);
    }
  });
}

// 初始化首页icon
function initIcon(code) {
  console.log('初始化首页icon');
  $.ajax({ //获取编排栏目
    url: epgUrl + '/api/categoryitem/' + code + '.json',
    type: 'GET',
    data: {},
    async: true,
    dataType: 'json',
    success: function (data) {
      if (data.status == 200) {
        let { resultSet } = data;
        resultSet.forEach((item, index) => {
          $('.swiper-container-icon .swiper-wrapper').append(`
          <div class="swiper-slide">
            <a href="javascript: gotoLinkAndRecord('${item.itemCode}', '${sourceUidObj.sourceUidIcon_index[index]}')">
              <img src="${epgUrl + '/resource' + item.itemIcon}" alt="" class="iconImg">
            </a>
          </div>
          `);
        });
        // TODO
        if (resultSet.length > 1) {
          initIconSwiper();
        }
      }
    },
    error: function (xhr, error) {
      console.log(error);
    }
  });
}

// 初始化首页本周热推
function initHot(code) {
  console.log('初始化首页本周热推');
  $.ajax({ //获取编排栏目
    url: epgUrl + '/api/categoryitem/' + code + '.json',
    type: 'GET',
    data: {},
    async: true,
    dataType: 'json',
    success: function (data) {
      if (data.status == 200) {
        let { resultSet } = data;
        resultSet.forEach((item, index) => {
          if (index == 0) {
            $('.hotMain').append(`
              <a href="javascript: gotoLinkAndRecord('${item.itemCode}', '${sourceUidObj.sourceUidHot_index[index]}')">
                <img src="${epgUrl + '/resource' + item.itemIcon}" alt="">
              </a>
            `);
          } else if (index <= 3) {
            $('.hotList').append(`
            <div>
              <a href="javascript: gotoLinkAndRecord('${item.itemCode}', '${sourceUidObj.sourceUidHot_index[index]}')">
                <img src="${epgUrl + '/resource' + item.itemIcon}" alt="" class="poster">
              </a>
                <p class="title">${item.title}</p>
            </div>
            `);
          }
        });
      }
    },
    error: function (xhr, error) {
      console.log(error);
    }
  });
}

// 初始化首页爱尚魔都
function initlovingSH(code) {
  console.log('初始化首页爱尚魔都');
  $.ajax({ //获取编排栏目
    url: epgUrl + '/api/categoryitem/' + code + '.json',
    type: 'GET',
    data: {},
    async: true,
    dataType: 'json',
    success: function (data) {
      if (data.status == 200) {
        let { resultSet } = data;
        resultSet.forEach((item, index) => {
          if (index <= 3) {
            $('.lovingSHList').append(`
            <div>
              <a href="javascript: gotoLinkAndRecord('${item.itemCode}', '${sourceUidObj.sourceUidLovingSH_index[index]}')">
                <img src="${epgUrl + '/resource' + item.itemIcon}" alt="" class="poster">
              </a>
                <p class="title">${item.title}</p>
                <p class="desc">${item.subTitle}</p>
            </div>
            `);
          }
        });
      }
    },
    error: function (xhr, error) {
      console.log(error);
    }
  });
}

// 初始化首页热门业务
function initHotBusiness(code) {
  console.log('初始化首页热门业务');
  $.ajax({ //获取编排栏目
    url: epgUrl + '/api/categoryitem/' + code + '.json',
    type: 'GET',
    data: {},
    async: true,
    dataType: 'json',
    success: function (data) {
      if (data.status == 200) {
        let { resultSet } = data;
        resultSet.forEach((item, index) => {
          // TODO(此处为定制开发，IPTV线上办理业务暂未上线)
          if (index == 0) {
            $('.swiper-container-business .swiper-wrapper').append(`
            <div class="swiper-slide">
              <a href="javascript: addButtonClickRecord('${userNum}', '${sourceUidObj.sourceUidHotBusiness_index[index]}')">
                <img src="${epgUrl + '/resource' + item.itemIcon}" alt="" class="businessImg" onclick='initPopWindowDeveloping()'>
              </a>
            </div>
            `);
          } else {
            $('.swiper-container-business .swiper-wrapper').append(`
            <div class="swiper-slide">
              <a href="javascript: gotoLinkAndRecord('${item.itemCode}', '${sourceUidObj.sourceUidHotBusiness_index[index]}')">
                <img src="${epgUrl + '/resource' + item.itemIcon}" alt="" class="businessImg">
              </a>
            </div>
            `);
          }
        });
        // TODO
        if (resultSet.length > 1) {
          initBusinessSwiper();
        }
      }
    },
    error: function (xhr, error) {
      console.log(error);
    }
  });
}

// 初始化首页猜你喜欢
function initYouLike(code) {
  console.log('初始化首页猜你喜欢');
  $.ajax({ //获取编排栏目
    url: epgUrl + '/api/categoryitem/' + code + '.json',
    type: 'GET',
    data: {},
    async: true,
    dataType: 'json',
    success: function (data) {
      if (data.status == 200) {
        let { resultSet } = data;
        resultSet.forEach((item, index) => {
          if (index <= 3) {
            $('.youLikeList').append(`
            <div>
              <a href="javascript: gotoLinkAndRecord('${item.itemCode}', '${sourceUidObj.sourceUidYouLike_index[index]}')">
                <img src="${epgUrl + '/resource' + item.itemIcon}" alt="" class="poster">
              </a>
                <p class="title">${item.title}</p>
                <p class="desc">${item.subTitle}</p>
            </div>
            `);
          }
        });
      }
    },
    error: function (xhr, error) {
      console.log(error);
    }
  });
}

// 初始化首页底部icon
function initNav(code) {
  console.log('初始化首页底部icon');
}

function initPopWindow() {
  var ifShownPopWindow = $.cookie('ifShownPopWindow');
  console.log(ifShownPopWindow);
  if (!ifShownPopWindow) {
    var millisecond = new Date().getTime(); // 当前时间毫秒数
    var expiresTime = new Date(millisecond + 60 * 1000 * 15);
    $.cookie('ifShownPopWindow', 'true', {
      expires: expiresTime,
    });
    $('.bgFilter').css('display', 'block');
    setTimeout(function () {
      $('.bgFilter').css('visibility', 'visible');
      $('.bgFilter').css('opacity', 1);
      $('html').css('overflow', 'hidden');
      $('body').css('overflow', 'hidden');
    }, 1000);
    $('.bgFilter').click(function (e) {
      $('.bgFilter').css('visibility', 'hidden');
      $('.bgFilter').css('opacity', 0);
      $('html').css('overflow', 'visible');
      $('body').css('overflow', 'visible');
    });
    $('.popWindow').click(function (e) {
      e.stopPropagation();
      console.log(222);
    });
  }
}

function bodyScroll(event) {
  event.preventDefault();
}

// TODO(此处为定制开发，IPTV线上办理业务暂未上线)
function initPopWindowDeveloping() {
  var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  console.log(scrollTop);
  $('.bgFilterDeveloping').css('transform', 'translateY(' + scrollTop / document.body.style.zoom + 'px)');
  // $.scrollTo(0, 500);
  $('.bgFilterDeveloping').css('display', 'block');
  $('.bgFilterDeveloping').css('visibility', 'visible');
  $('.bgFilterDeveloping').css('opacity', 1);
  document.body.addEventListener('touchmove', bodyScroll, { passive: false });
  $('.bgFilterDeveloping').click(function (e) {
    $('.bgFilterDeveloping').css('visibility', 'hidden');
    $('.bgFilterDeveloping').css('opacity', 0);
    document.body.removeEventListener('touchmove', bodyScroll, { passive: false });
  });
}

// 添加页面访问埋点
addPageViewRecord(userNum, sourceUidObj.pageSourceUid.index);
getCategoryList();