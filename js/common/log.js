var log = {
  // apiHost: " http://139.226.230.132:8888/zhgtv_data_api", 
  // apiHost: " https://api.zhgtv.cn:8888/zhgtv_data_api",
  // apiHost: " https://139.226.230.132:8888/zhgtv_data_api", 
  // apiHost: "https://api.zhgtv.cn:8888", 
  apiHost: "https://dsp2.10010sh.cn:8888/zhgtv_data_api",

  //浏览记录数据json
  accessJson: {
      //用户id 可为空；若为空则其值为stbId
      userId: "",
      //埋点uid 必传
      sourceUid: "",
      //分类uid 必传
      classificationUid: "",
      //设备id 必传
      stbId: "",
      //App版本
      appVersion: "",
      //App所属包名
      appPackageName: "",
      //平台uid 必传
      platformUid: "",
      //应用uid 必传
      appUid: "",
      callback: function(){}
  },
  //订购记录json数据
  orderJson: {
      //厂商uid 必传
      cpUid: "",
      //用户id 必传
      buyerId: "",
      //设备id 必传
      stbId: "",
      //订购包uid 必传
      productUid: "",
      //价格 必传
      price: "",
      //平台uid
      platformUid: "",
      //地区
      province: "",
      //应用版本
      appVersion: "",
      //应用uid 必传
      appUid: "",
      //内容uid 必传
      contentUid: "",
      //内容名称
      contentName: "",
      //是否续订 1：续订 0：不续订
      autoRenew: "",
      //订购、退订（暂时没用到）
      action: "",
      //状态（暂时没用到）
      status: ""
  },
  //播放流水json数据
  playFlowJson: {
      //内容uid 必传
      contentUid: "",
      //内容名称
      contentName: "",
      //用户id 必传
      userId: "",
      //设备id 必传
      stbId: "",
      //厂商uid 必传
      cpUid: "",
      //应用uid 必传
      appUid: "",
      //回调函数 必传
      callback: function () {
          
      }
      // callback: callback
  },
  //栏目流量json数据
  columnAccessJson: {
      //用户id
      userId:"",
      //设备id 必传
      stbId:"",
      //栏目uid 必传
      columnUid:"",
      //应用uid
      appUid:"",
      //埋点uid
      sourceUid:""
  },
  //单片流量数据
  contentAccessJson:{
      //用户id
      userId:"",
      //设备id 必传
      stbId:"",
      //内容uid 必传
      contentUid:"",
      //内容名称
      contentName:"",
      //播放方式（1：全屏 0：非全屏 默认为0）
      way:"",
      //埋点uid
      sourceUid:"",
      //埋点名称
      sourceName:"",
      //应用uid
      appUid:"",
      //厂商uid
      cpUid:"",
      //厂商名称
      cpName:""
  },
      /**
       * 添加浏览记录
       */
      addAccess: function () {
          $.ajax({
              type: "POST",
              // url: this.apiHost + "/zhgtv_data_api",
              url: this.apiHost + "/api/v_0_0_2/access",
              // data:{userId:this.userId,sourceUid:accessJson.sourceUid,classificationUid:accessJson.classificationUid,stbId:accessJson.stbId,appVersion:accessJson.appVersion,appPackageName:accessJson.appPackageName,platformUid:accessJson.platformUid,appUid:accessJson.appUid},
              data: this.accessJson,
              // data:"userId="+userId+"&sourceUid="+sourceUid+"&classificationUid="+classificationUid+"&stbId="+stbId+"&appVersion="+appVersion+"&appPackageName="+appPackageName+"&platformUid="+platformUid+"&appUid="+appUid,
              async: true,
              success: function (result) {
                  log.accessJson.callback(result);
              },
              dataType: "json"
          });
      },
      /**
       * 添加订购记录
       */
      addOrder: function () {
          $.ajax({
              type: "POST",
              url: this.apiHost + "/api/v_0_0_2/order",
              data: this.orderJson,
              // data:{cpUid:orderJson.cpUid,buyerId:orderJson.buyerId,stbId:orderJson.stbId,productUid:orderJson.productUid,price:orderJson.price,platformUid:orderJson.platformUid,province:orderJson.province,appVersion:orderJson.appVersion,appUid:orderJson.appUid,contentUid:orderJson.contentUid,contentName:orderJson.contentName,autoRenew:orderJson.autoRenew,action:orderJson.action,status:orderJson.status},
              // data:"cpUid="+cpUid+"&buyerId="+buyerId+"&stbId="+stbId+"&productUid="+productUid+"&price="+price+"&platformUid="+platformUid+"&province="+province+"&appVersion="+appVersion+"&appUid="+appUid+"&contentUid="+contentUid+"&contentName="+contentName+"&autoRenew="+autoRenew+"&action="+action+"&status="+status,
              async: true,
              success: function (result) {

              },
              dataType: "json"
          });
      },
      /**
       * 添加播放流水（开始播放时调用）
       */
      addPlayFlowStart: function () {
          $.ajax({
              type: "POST",
              url: this.apiHost + "/api/v_0_0_2/play_flow/start",
              data: this.playFlowJson,
              // data:{contentUid:playFlowJson.contentUid,contentName:playFlowJson.contentName,userId:playFlowJson.userId,stbId:playFlowJson.stbId,cpUid:playFlowJson.cpUid,appUid:playFlowJson.appUid},
              // data:"contentUid="+contentUid+"&contentName="+contentName+"&userId="+userId+"&stbId="+stbId+"&cpUid="+cpUid+"&appUid="+appUid,
              async: true,
              success: function (result) {
                  log.playFlowJson.callback(result.data);
              },
              dataType: "json"
          });
      },
      /**
       * 添加播放记录（结束播放时调用）
       * @param id 播放流水的id
       */
      addPlayFlowEnd: function (id,callback) {
          $.ajax({
              type: "POST",
              url: this.apiHost + "/api/v_0_0_2/play_flow/end",
              data: {id: id},
              async: true,
              success: function (result) {
                  callback(result);
              },
              dataType: "json"
          });
      },
      /**
       * 添加浏览器错误日志
       * @param appUid 应用uid 必传
       * @param content 错误内容 必传
       */
      addBrowserLog: function (appUid, content) {
          $.ajax({
              type: "POST",
              url: this.apiHost + "/api/v_0_0_2/browser_log",
              data: {appUid: appUid, content: content},
              async: true,
              success: function (result) {

              },
              dataType: "json"
          });
      },
  /**
   * 添加栏目流量
   */
  addColumnAccess:function(){
          $.ajax({
              type:"POST",
              url:this.apiHost + "/api/v_0_0_2/column_access",
              data:this.columnAccessJson,
              async:true,
              success:function (result) {
                  // console.log('add success')
              },
              dataType:"json"
          });
      },
  /**
   * 添加单片流量
   */
  addContentAccess:function () {
          $.ajax({
              type:"POST",
              url:this.apiHost + "/api/v_0_0_2/content_access",
              data:this.contentAccessJson,
              async:true,
              success:function (result) {

              },
              dataType:"json"
          });
      }
}