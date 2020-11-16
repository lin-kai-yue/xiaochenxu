// pages/question/question.js
var i = 1;
var value=0;
var id;
var score=0;
var avg=0;
var le=0;
var  gradeName;
var groupName;
var subject;
var paperId;
var app = getApp();

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
     sd:[],
     g:"",
     title:"",
     length:"",
     index:"",
     num:0,
     class1:"",
     class2:"",
     class3:"",
     class4:"",
     u:-1,
     ck:-5
  },
  /**
   * 加
   */
  plus:function(){
    if(value<100){
      value+=10
      this.progressView2.drawProgressBar(value, 100); //绘制环形进度
    }
  },

  /**
   * 减
   */
  minus: function() {
    if (value >0) {
      value-=10
      this.progressView2.drawProgressBar(value, 100); //绘制环形进度
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    gradeName = options.gradeName    //获取值
    groupName = options.groupName    //获取值
    subject = options.subject    //获取值
    wx.request({
      url: 'http://112.74.105.17:20003/question-bank/wx/exam/findExamList',
      method: 'POST',
      data: {
        gradeName:gradeName,
        subject:subject
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log(res.data);
        console.log(res.data.data[0].id);
        // console.log(res.data.data.name);
        // console.log(res.data.data.optionList[0].content);
        this.setData({
          paperId:res.data.data[2].id
        })
        console.log(this.data.paperId);
        
      }
    })
    this.progressView2 = this.selectComponent("#progressView2");
    this.progressView2.drawProgressBar(value, 100); //绘制环形进度

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.request({
      url: 'http://112.74.105.17:20003/question-bank/wx/exam/paper-stem/747239405021822976',
      method: 'POST',
      
      //  data: {
      //   paperId:'1305412708056817666'
      // },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log(res.data);
        console.log(res.data.data[0].name);
        console.log(res.data.data.length);
        this.setData({
          // title:res.data.data.name,
          g:i,
          length:res.data.data.length,
          title:res.data.data[0].name,
          sd:res.data.data[0].optionList,
          u:['A','B','C','D']
        });
        
        
        
      },
      
      
    })
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
    if(this.data.ck!=-5){
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
          console.log(1/res.data.data.length);
          this.setData({
            // title:res.data.data.name,
            g:i,
            length:res.data.data.length,
            title:res.data.data[i].name,
            sd:res.data.data[i].optionList,
            u:-1,
            ck:-5
            
          });
          
          console.log(id);
          if(id==true){
           score+=10
           app.globalData.id = score
          }
          if(i<res.data.data.length){
            if(value<100){
              value+=10
              this.progressView2.drawProgressBar(value, 100); //绘制环形进度
            }
           i++;
          }
          if(i==res.data.data.length){
            wx.navigateTo({
              url: '../order/order?score='+score,
            })
          }
          console.log(i);
          
          
        },
        
        
      })
    }
   
  },
  radioChange:function (e) {
    id = e.target.dataset.id;
    var ck = e.target.dataset.ck;
    console.log('radio发生change事件，携带value值为：', id)
    console.log('radio发生change事件，携带value值为：', ck)

    this.setData({
      ck:ck,
      class:'checked'
    })
    // const items = this.data.items
    // for (let i = 0, len = items.length; i < len; ++i) {
    //   items[i].checked = items[i].value === e.detail.value
    // }

    // this.setData({
    //   items
    // })
  }
    
    // wx.request({
    //   url: 'http://112.74.105.17:20003/question-bank/wx/exam/paper-stem/747239405021822976',
    //   method: 'POST',
      
    //   // data: {
    //   //   paperId:'747239405021822976'
    //   // },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: (res) => {
    //     console.log(res.data);
    //     // console.log(res.data.data.name);
    //     console.log(res.data.data[i].name);
    //     console.log(res.data.data[i].optionList[i].isRight);
    //     this.setData({
    //       // title:res.data.data.name,
          
    //       class:'checked'

    //     });
        
      
       
        
        
    //   },
      
      
    // })
    // this.setData({
     
    // })
  


})