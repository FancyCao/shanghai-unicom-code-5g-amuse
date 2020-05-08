function getRandomString(len) {
  var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V'];
  var randStr = "";
  for (var i = 0; i < len; i++) {
    randStr += arr[Math.floor(Math.random() * (arr.length))];
  }
  return randStr;
}

function getMd5(srcStr) {
  var resultStr = "";
  $.ajax({
    type: "post",
    url: pageUrl + "/apis/md5.do",
    data: { src: srcStr },
    dataType: 'json',
    async: false,
    cache: false,
    success: function (e) {
      //console.log(e.result);
      if (e.code == 200) {
        resultStr = e.result;
      } else {
        resultStr = "err";
      }
    },
    error: function (data, status, e)//服务器响应失败处理函数
    {
      resultStr = "err";
    }
  });

  return resultStr;
}

//生成uuid，专题页面免登录时作为设备唯一标识
function getUuid() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}

//获取url地址中参数的值
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", 'i');
  var res = window.location.search.substr(1).match(reg);
  if (res && res[2]) {
    return res[2];
  } else {
    return null;
  }
}

// 页面跳转
function gotoLink(itemCode) {
  $.ajax({
    url: epgUrl + '/api/link/' + itemCode + '.json',
    type: 'get',
    async: false,
    dataType: 'json',
    success: function (data) {
      if (data.status == 200) {
        console.log(data.result.url);
        location.href = data.result.url;
      }
    }
  });
  console.log(itemCode);
}

// 页面跳转及埋点记录
function gotoLinkAndRecord(itemCode, sourceUid) {
  $.ajax({
    url: epgUrl + '/api/link/' + itemCode + '.json',
    type: 'get',
    async: false,
    dataType: 'json',
    success: function (data) {
      if (data.status == 200) {
        console.log(data.result.url);
        addButtonClickRecord(userNum, sourceUid);
        location.href = data.result.url;
      }
    }
  });
  console.log(sourceUid);
}

// 页面直接跳转及埋点记录（更多跳转）
function jumpUrlAndRecord(urlCode, buttonType) {
  if (buttonType == 'nav') {
    console.log(sourceUidObj.sourceUidNav[urlCode]);
    addButtonClickRecord(userNum, sourceUidObj.sourceUidNav[urlCode]);
    window.location.href = pageJumpUrl[urlCode];
  } else if (buttonType == 'more') {
    console.log(sourceUidObj.sourceUidMore_index[urlCode]);
    addButtonClickRecord(userNum, sourceUidObj.sourceUidMore_index[urlCode]);
    window.location.href = pageJumpUrl[urlCode];
  } else if (buttonType == 'popWindow') { 
    console.log(sourceUidObj.sourceUidPopWindow_index);
    addButtonClickRecord(userNum, sourceUidObj.sourceUidPopWindow_index);
    window.location.href = urlCode;
  }
}

// 添加按钮点击埋点事件
function addButtonClickRecord(userNum, sourceUid) {
  //按钮访问埋点
  log.accessJson = {
    //用户id 可为空；若为空则其值为stbId
    userId: userNum,
    //埋点uid 必传
    sourceUid: sourceUid,
    //分类uid 必传
    classificationUid: "F15571936218247256",
    //设备id 必传
    stbId: userNum,
    //App版本
    appVersion: "",
    //App所属包名
    appPackageName: "",
    //平台uid 必传
    platformUid: "P15571933849303988",
    //应用uid 必传
    appUid: appUid,
    callback: function () { }
  }
  log.addAccess();
}

// 添加页面访问埋点事件
function addPageViewRecord(userNum, sourceUid) {
  //按钮访问埋点
  log.accessJson = {
    //用户id 可为空；若为空则其值为stbId
    userId: userNum,
    //埋点uid 必传
    sourceUid: sourceUid,
    //分类uid 必传
    classificationUid: "F15571936169816344",
    //设备id 必传
    stbId: userNum,
    //App版本
    appVersion: "",
    //App所属包名
    appPackageName: "",
    //平台uid 必传
    platformUid: "P15571933849303988",
    //应用uid 必传
    appUid: appUid,
    callback: function () { }
  }
  log.addAccess();
}