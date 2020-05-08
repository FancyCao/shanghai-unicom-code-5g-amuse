// var env = '测试'; //当前环境
var env = '现网'; //当前环境

var apiUrl; //aaa接口前缀
var epgUrl; //epg接口前缀
var pageUrl; //跳转页面及md5接口前缀
var key; //md5key
var appUid; //数据平台应用Uid
var sourceUidObj; // 埋点id数组
var navUrl; // nav部分跳转链接

if (env == '现网') {
  apiUrl = 'https://dsp1.10010sh.cn:8889/aaa';
  epgUrl = 'https://dsp1.10010sh.cn:8889/iptv_epg';
  pageUrl = 'https://dsp1.10010sh.cn:8889/shlt_weixin';
  indexUrl = '/shlt/biz_19271645.epg'; // 首页跳转路径(epgUrl + indexUrl)
  key = '123456';
  appUid = 'A15874322121307066';
  sourceUidObj = {
    sourceUidBanner_index: [
      'S15874371809394401',
      'S15874371890907419',
      'S15874371940758643',
      'S15874371990678941',
      'S15874374617862971',
      'S15874374884444891',
      'S15874374950722125',
      'S15874375007559513',
      'S15874375074259170',
      'S15874375135515878',
    ],
    sourceUidIcon_index: [
      'S15874375442265221',
      'S15874375534967482',
      'S15874375592774311',
      'S15874375651059002',
      'S15874375707862415',
      'S15874375763109011',
      'S15874375820189400',
      'S15874375872937024',
      'S15874375926688054',
      'S15874375998644774',
    ],
    sourceUidHot_index: [
      'S15874376175489221',
      'S15874376250498930',
      'S15874376310844965',
      'S15874376712525370'
    ],
    sourceUidLovingSH_index: [
      'S15874377711301164',
      'S15874377823719739',
      'S15874377881747368',
      'S15874380221361033'
    ],
    sourceUidHotBusiness_index: [
      'S15874383723709300',
      'S15874383961646426',
      'S15874384076152588',
      'S15874384143547269',
      'S15874384209998908'
    ],
    sourceUidYouLike_index: [
      'S15874384640353032',
      'S15874384827708304',
      'S15874384905549181',
      'S15874384963064253'
    ],
    sourceUidMore_index: {
      lovingSHMore: 'S15874495313957346',
      youLikeMore: 'S15874495437071354'
    },
    sourceUidPopWindow_index: 'S15876921106388048',
    sourceUidBanner_recommend: [
      'S15874385841867105',
      'S15874385973542642',
      'S15874386029737510',
      'S15874386111707187',
      'S15874386166819501',
      'S15874386225999994',
      'S15874387107091241',
      'S15874387168146141'
    ],
    sourceUidTab_recommend: [
      'S15874388260808529',
      'S15874388376418250',
      'S15874388457594725',
      'S15874388531744517',
      'S15874388612071542',
      'S15874388710976205',
      'S15874388767085143',
      'S15874388824576102',
      'S15874388881291486',
      'S15874388936324726'
    ],
    sourceUidNav: {
      index: 'S15874385255276406',
      hotActivity: 'S15874385322601955',
      historyRecommend: 'S15874385376579532',
      mine: 'S15874385432305853'
    },
    pageSourceUid: {
      index: 'S15876357616289750',
      recommend: 'S15876357705308449',
      historyRecommend: 'S15876357818053453',
      lovingSH: 'S15876358020158850',
      VR: 'S15876358105406598',
      music: 'S15876358246965117',
    }
  };
  pageJumpUrl = {
    index: '',
    hotActivity: '',
    historyRecommend: '',
    mine: '',
    lovingSHMore: 'https://dsp1.10010sh.cn:8889/iptv_epg/shlt/biz_55444552.epg?user_id=111&return=111&channel=lovingSH',
    youLikeMore: 'https://dsp1.10010sh.cn:8889/iptv_epg/shlt/biz_20666157.epg?user_id=111&return=111'
  }
} else if (env == '测试') {
  apiUrl = 'http://wxxcx.chances.com.cn/weixin_aaa';
  epgUrl = 'http://wxxcx.chances.com.cn/iptv_epg';
  pageUrl = 'http://wxxcx.chances.com.cn/iptv_weixin';
  indexUrl = '/shlt/biz_39182333.epg'; // 首页跳转路径(epgUrl + indexUrl)
  key = 'Js102Sp1BK';
  appUid = 'A15874306243519762';
  sourceUidObj = {
    sourceUidBanner_index: [
      'S15874312479808466',
      'S15874312655492083',
      'S15874312744422367',
      'S15874312816663529',
      'S15874312884478445',
      'S15874312978487210',
      'S15874313047643413',
      'S15874313116006045',
      'S15874313176436294',
      'S15874313245897226',
    ],
    sourceUidIcon_index: [
      'S15874314083979995',
      'S15874314193114703',
      'S15874314253189730',
      'S15874314307695195',
      'S15874314369347136',
      'S15874314431074974',
      'S15874314528232646',
      'S15874314609241773',
      'S15874314697013547',
      'S15874314765847898',
    ],
    sourceUidHot_index: [
      'S15874315393695977',
      'S15874315495248862',
      'S15874315912464934',
      'S15874316082813870'
    ],
    sourceUidLovingSH_index: [
      'S15874316616672419',
      'S15874316727155459',
      'S15874316801447802',
      'S15874316885466294'
    ],
    sourceUidHotBusiness_index: [
      'S15874317508671078',
      'S15874318029874306',
      'S15874318166081910',
      'S15874318288531272',
      'S15874318462899667'
    ],
    sourceUidYouLike_index: [
      'S15874319480499013',
      'S15874319998094625',
      'S15874320123842226',
      'S15874320349904344'
    ],
    sourceUidMore_index: {
      lovingSHMore: 'S15874493806483883',
      youLikeMore: 'S15874494090109733'
    },
    sourceUidPopWindow_index: 'S15876921561426441',
    sourceUidBanner_recommend: [
      'S15874365732144614',
      'S15874365858642789',
      'S15874365930559864',
      'S15874365990495237',
      'S15874366054036665',
      'S15874366126116847',
      'S15874366206608857',
      'S15874366281304097'
    ],
    sourceUidTab_recommend: [
      'S15874367350872825',
      'S15874367416508777',
      'S15874367488984577',
      'S15874367571061570',
      'S15874367649018437',
      'S15874367772636079',
      'S15874367866295733',
      'S15874367935517587',
      'S15874368007287662',
      'S15874368079165486'
    ],
    sourceUidNav: {
      index: 'S15874320608932162',
      hotActivity: 'S15874320754692144',
      historyRecommend: 'S15874320807309160',
      mine: 'S15874320856945081'
    },
    pageSourceUid: {
      index: 'S15876356654388978',
      recommend: 'S15876356844996772',
      historyRecommend: 'S15876356987967101',
      lovingSH: 'S15876357160307839',
      VR: 'S15876357253273610',
      music: 'S15876357358422808',
    }
  };
  pageJumpUrl = {
    index: '',
    hotActivity: '',
    historyRecommend: '',
    mine: '',
    lovingSHMore: 'https://dsp1.10010sh.cn:8889/iptv_epg/shlt/biz_55444552.epg?user_id=111&return=111&channel=lovingSH',
    youLikeMore: 'https://dsp1.10010sh.cn:8889/iptv_epg/shlt/biz_20666157.epg?user_id=111&return=111'
  }
}

// 初始化底部导航
function initNavUrl() {
  $.ajax({ //获取编排栏目
    url: epgUrl + '/api/categoryitem/shlt_video_weixin_02_index_6.json',
    type: 'GET',
    data: {},
    async: true,
    dataType: 'json',
    success: function (data) {
      if (data.status == 200) {
        let { resultSet } = data;
        resultSet.forEach((item, index) => {
          var navUrl = findLink(item.itemCode);
          switch (index) {
            case 0:
              pageJumpUrl.index = navUrl;
              break;
            case 1:
              pageJumpUrl.hotActivity = navUrl;
              break;
            case 2:
              pageJumpUrl.historyRecommend = navUrl;
              break;
            case 3:
              pageJumpUrl.mine = navUrl;
              break;
            default:
              break;
          }
        });
      }
    },
    error: function (xhr, error) {
      console.log(error);
    }
  });
}

// 查找链接链接（底部导航栏使用）
function findLink(itemCode) {
  var navUrl = '';
  $.ajax({
    url: epgUrl + '/api/link/' + itemCode + '.json',
    type: 'get',
    async: false,
    dataType: 'json',
    success: function (data) {
      if (data.status == 200) {
        navUrl = data.result.url;
      }
    }
  });
  return navUrl;
}

initNavUrl();