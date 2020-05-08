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

var channel = getQueryString('channel'); // 根据地址栏的参数获取到当前list所属频道

var channelArr = {
  VR: {
    code: 'shlt_video_weixin_02_VR',
    title: '5G新玩法-VR'
  },
  lovingSH: {
    code: 'shlt_video_weixin_02_lovingSH',
    title: '5G新玩法-爱尚魔都'
  },
  music: {
    code: 'shlt_video_weixin_02_music',
    title: '5G新玩法-音乐'
  }
};
console.log(channel);
console.log(channelArr[channel]);

function initVideoList(channel) {
  $('title').html(channel.title);
  $.ajax({ //获取编排栏目
    url: epgUrl + '/api/categoryitem/' + channel.code + '.json',
    type: 'GET',
    data: {},
    async: true,
    dataType: 'json',
    success: function (data) {
      if (data.status == 200) {
        let { resultSet } = data;
        resultSet.forEach((item, index) => {
          $('.videoList').append(`
            <div>
              <a href="javascript: gotoLink('${item.itemCode}')">
                <img src="${epgUrl + '/resource' + item.itemIcon}" alt="" class="poster">
              </a>
                <p class="title">${item.title}</p>
                <p class="desc">${item.subTitle}</p>
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
addPageViewRecord(userNum, sourceUidObj.pageSourceUid[channel]);
initVideoList(channelArr[channel]);