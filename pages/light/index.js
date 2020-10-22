// pages/light/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    condition:true,
    condition1:true,
    condition2:false,
    condition3:false,
    condition4:false,
    condition5:false,
    condition6:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var c = document.getElementById("myCanvas");//初始化
var ctx = c.getContext("2d");

var point1 = { left: 172, top: 276 };//第一个点
var point2 = { left: 254, top: 236 };//第二个点
ctx.beginPath();
ctx.moveTo(point1.left, point1.top);//起始位置
ctx.lineTo(point2.left, point2.top);//停止位置
ctx.stroke();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})