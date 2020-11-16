Page({
  data: {
    multiArray: [['高中', '初中','小学'], ['一年级', '二年级', '三年级'], ['语文', '英语','数学']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '高中'
        },
        {
          id: 1,
          name: '初中'
        },
        {
          id: 2,
          name: '小学'
        },
      ], [
        {
          id: 0,
          name: '一年级'
        },
        {
          id: 1,
          name: '二年级'
        },
        {
          id: 2,
          name: '三年级'
        }
      ], [
        {
          id: 0,
          name: '语文'
        },
        {
          id: 1,
          name: '英语'
        },
        {
          id: 2,
          name: '数学'
        }
      ]
    ],
    multiIndex: [0, 0, 0],
    
  },

  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['一年级', '二年级', '三年级'];
            data.multiArray[2] = ['语文', '英语','数学'];
            break;
          case 1:
            data.multiArray[1] = ['一年级', '二年级', '三年级'];
            data.multiArray[2] = ['语文', '英语','数学'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['语文', '英语','数学'];
                break;
              case 1:
                data.multiArray[2] = ['语文', '英语','数学'];
                break;
              case 2:
                data.multiArray[2] = ['语文', '英语','数学'];
                break;
              case 3:
                data.multiArray[2] = ['语文', '英语','数学'];
                break;
              case 4:
                data.multiArray[2] = ['语文', '英语','数学'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['语文', '英语','数学'];
                break;
              case 1:
                data.multiArray[2] = ['语文', '英语','数学'];
                break;
              case 2:
                data.multiArray[2] = ['语文', '英语','数学'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        break;
    }
    console.log(data.multiIndex);
    this.setData(data);
  },
  onLoad: function (options) {
    wx.request({
      url: 'http://112.74.105.17:20003/question-bank/wx/exam/findExamList',
      method: 'POST',
      data: {
        gradeName:'一年级',
        groupName:'高中',
        subject:'语文'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log(res.data);
        // console.log(res.data.data.name);
        // console.log(res.data.data.optionList[0].content);
        // this.setData({
        //   title:res.data.data.name,
        //   sd: res.data.data.optionList,
        // })
      }
    })
  },
  bindchange:function(e){
    url: '../answer/answer?id=1&name=aaa'
  }
})