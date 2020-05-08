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
var str = pathname.substring(index + 1, pathname.length);
if (!getQueryString('user_id')) {
  history.replaceState(null, null, str + '?user_id=111&return=111&currentFocusTab=0');
}

var currentFocusTab = getQueryString('currentFocusTab') ? getQueryString('currentFocusTab') : 0; // 当前聚焦的tab
var tabChangeSpeed = 300 // tab的切换速度
var tabCounts = 5; // tab的个数
var tabSwiper; //tabSwiper组件
var pageSwiper; //pageSwiper组件

// banner位swiper组件初始化
function initBannerSwiper() {
  var bannerSwiper = new Swiper('.swiper-container-banner', {
    loop: true,
    loopAdditionalSlides: 2,
    autoplay: true, // 可选选项，自动滑动
    slidesPerView: 1.6,
    centeredSlides: true, // 活动块居中 
  });
}

// 初始化swiper，tab位以及page位
function initSwiper() {
  tabSwiper = new Swiper('.swiper-container-tab', {
    slidesPerView: "auto",
    freeMode: true,
    on: {
      init: function () {
        clientWidth = parseInt(this.$wrapperEl.css('width')); // tab的可视宽度
        tabWidthTotal = 0 // tab标签栏的总长度
        for (i = 0; i < this.slides.length; i++) {
          tabWidthTotal += parseInt(this.slides.eq(i).css('width'))
        }
        console.log('tab的可视宽度：', clientWidth);
        console.log('tab的总宽度：', tabWidthTotal);
      },
      tap: function () {
        pageSwiper.slideTo(this.clickedIndex, 0);
        history.replaceState(null, null, str + '?user_id=111&return=111&currentFocusTab=' + currentFocusTab);
        addButtonClickRecord(userNum, sourceUidObj.sourceUidTab_recommend[this.clickedIndex]);
      },
      progress: function () {
        if (this.progress > 0) {
          $('.tabShadowLeft').addClass('tabShadowLeftShown');
        } else {
          $('.tabShadowLeft').removeClass('tabShadowLeftShown');
        }
        if (this.progress != 1) {
          $('.tabShadowRight').addClass('tabShadowRightShown');
        } else {
          $('.tabShadowRight').removeClass('tabShadowRightShown');
        }
      }
    }
  });
  pageSwiper = new Swiper('.swiper-container-page', {
    resistanceRatio: 0,
    autoHeight: true,
    on: {
      init: function () {
        this.slideTo(currentFocusTab);
        if (currentFocusTab != 0) { 
          $('.swiper-container-tab .swiper-slide:eq(0)').removeClass('focus');
        }
      },
      transitionEnd: function () {
        tabSwiper.setTransition(tabChangeSpeed);
        // 聚焦选择
        tabSwiper.activeIndex = this.activeIndex;
        $('.swiper-container-tab .swiper-slide:eq(' + currentFocusTab + ')').removeClass('focus');
        currentFocusTab = this.activeIndex;
        $('.swiper-container-tab .swiper-slide:eq(' + this.activeIndex + ')').addClass('focus');
        // 导航居中
        var tabOffsetLeft = tabSwiper.slides[this.activeIndex].offsetLeft;
        var tabWidth = tabSwiper.slides[this.activeIndex].clientWidth;
        if (tabOffsetLeft < (clientWidth - tabWidth) / 2) {
          tabSwiper.setTranslate(0);
        } else if (tabOffsetLeft > tabWidthTotal - (clientWidth + tabWidth) / 2) {
          tabSwiper.setTranslate(clientWidth - tabWidthTotal);
        } else {
          tabSwiper.setTranslate(tabOffsetLeft * (-1) + (clientWidth - tabWidth) / 2);
          console.log('需要居中');
        }
      },
    }
  });
}

function initData() {
  var categoryCode = 'shlt_video_weixin_02_recommend';
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
          // 使用index != 0 来判断当前栏目是否失效
          if (item.seqNo != 0) { 
            if (item.code == 'shlt_video_weixin_02_recommend_banner') {
              initBanner(item.code);
            } else {
              initTab(item.code, item.seqNo - 2);
            }
          }
        });
      }
    },
    error: function (xhr, error) {
      console.log(error);
    }
  });
}

// 初始化banner
function initBanner(code) {
  console.log('初始化推荐页banner');
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
            <a href="javascript: gotoLinkAndRecord('${item.itemCode}', '${sourceUidObj.sourceUidBanner_recommend[index]}')">
              <div class="mark"></div>  
              <img src="${epgUrl + '/resource' + item.itemIcon}" alt="" class="poster">
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

// 初始化tab
function initTab(code, tabIndex) {
  console.log(code);
  console.log(tabIndex);
  $.ajax({ //获取编排栏目
    url: epgUrl + '/api/categoryitem/' + code + '.json',
    type: 'GET',
    data: {},
    async: false,
    dataType: 'json',
    success: function (data) {
      if (data.status == 200) {
        let { resultSet } = data;
        console.log(resultSet);
        $('.swiper-container-page .swiper-wrapper').append(`
          <div class="swiper-slide">
            <div class="pageList">
            </div>
          </div>
        `);
        resultSet.forEach((item, index) => {
          $('.swiper-container-page .swiper-wrapper .swiper-slide:eq(' + tabIndex + ') .pageList').append(`
          <div>
            <a href="javascript: gotoLink('${item.itemCode}')">
              <img src="${epgUrl + '/resource' + item.itemIcon}" alt="" class="poster">
            </a>
              <p class="title">${item.title}</p>
              <p class="desc">${item.subTitle}</p>
          </div>
          `);
          // 加载中gif隐藏，tab页显示
          if (tabIndex == tabCounts - 1) {
            $('.page .loading').addClass('hide');
            $('.page .swiper-container-page').css('visibility', 'visible');
          }
        });
        // TODO
        if (tabIndex == tabCounts - 1) {
          initSwiper();
        }
      }
    },
    error: function (xhr, error) {
      console.log(error);
    }
  });
}

// 添加页面访问埋点
addPageViewRecord(userNum, sourceUidObj.pageSourceUid.recommend);
initData();

