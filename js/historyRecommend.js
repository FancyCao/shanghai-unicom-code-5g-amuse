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

var channelCode = "shlt_video_weixin_02_historyRecommend"; // 往期推荐栏目编码

function initRecommendList(channelCode) {
  $.ajax({ //获取编排栏目
    url: epgUrl + '/api/categoryitem/' + channelCode + '.json',
    type: 'GET',
    data: {},
    async: true,
    dataType: 'json',
    success: function (data) {
      if (data.status == 200) {
        let { resultSet } = data;
        console.log(resultSet);
        resultSet.forEach((item, index) => {
          $('.recommendList').append(`
          <div>
            <a href="javascript: gotoLink('${item.itemCode}')">
              <img src="${epgUrl + '/resource' + item.itemIcon}" alt="" class="poster">
            </a>
          </div>
            `);
        });
      }
    },
    error: function (xhr, error) {
      console.log(error);
    }
  });
}

// 添加页面访问埋点
addPageViewRecord(userNum, sourceUidObj.pageSourceUid.historyRecommend);
initRecommendList(channelCode);