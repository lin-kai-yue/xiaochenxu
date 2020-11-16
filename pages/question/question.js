// pages/question/question.js
var i = 0;
var value=0
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    sd:[],
    g:"",
    title:"",
    length:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        
   
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

  },

  bindToAnswer:function (e){
    
    wx.request({
      url: 'http://112.74.105.17:20003/question-bank/wx/exam/paper-stem/747239405021822976',
      method: 'POST',
      
      // data: {
      //   paperId:'747239405021822976'
      // },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log(res.data);
        // console.log(res.data.data.name);
        console.log(res.data.data[i].name);
        console.log(res.data.data.length);
        this.setData({
          // title:res.data.data.name,
          title:res.data.data[i].name,
          sd:res.data.data[i].optionList
          
        });
        
        if(i<res.data.data.length){
         i++;
        };
        console.log(i);
        
        
      },
      
      
    })
  }
})