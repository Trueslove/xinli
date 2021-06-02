Page({
  data: {
    activeIndex: 0,
    infoItem: [
      {
        question: '初次结识的朋友面前我是？',
        answer: ['通常我先说话', '通常对方先说话']
      },
      {
        question: '周末我会？',
        answer: ['喜欢和其他人见面', '并不介意独自度过']
      },
      {
        question: '和朋友们出行时我是？',
        answer: ['喜欢喧嚣热闹的气氛', '喜欢和少数朋友们一起聊天']
      },
      {
        question: '我认为更重要的是？',
        answer: ['没有现在就意味着没有未来', '不考虑未来的话就不会有进步']
      },
      {
        question: '工作时的我是？',
        answer: ['更偏向跟随别人的脚步', '更偏向采取自己的方式']
      },
      {
        question: '周围的人认为我是？',
        answer: ['经常说我很有耐心和恒心', '经常说我很有自己独创的思维']
      },
      {
        question: '遇到必须拒绝的情况时，我会？',
        answer: ['直接了当地拒绝', '深思熟虑后也往往会顺从']
      },
      {
        question: '我生气的时候会？',
        answer: ['说得很有道理，同时也很计较', '想说的话很多，但因为太生气，往往眼泪先流出来']
      },
      {
        question: ' 朋友向我诉说烦恼，我却觉得是朋友的错时，我会？',
        answer: ['告诉他错的原因', '直接了当地说的话担心朋友会伤心，所以故意绕着弯子说']
      },
      {
        question: '做准备工作时的我会？',
        answer: ['提前一天做好准备', '总想着‘明天再说明天再说’，经常忘记']
      },
      {
        question: '结束了一天的日程回家后准备学习，结果朋友们突然叫我出去玩，这时我会？',
        answer: ['不在我的计划范围内…很纠结', 'OK！果然人生不会按计划走！玩起！！！']
      },
      {
        question: '总体上我是？',
        answer: ['按我的计划进行！更偏向按计划的顺序进行！', '想起什么就先做什么！更偏向灵活处理！']
      }
    ],
    answerArr: [], // 问题答案
    isShowSubmit: false,
    answerStr: ''
  },
  onLoad: function () {
    console.log('Welcome to Mini Code')
  },
  handleChildClick(e) {
    let { answerArr } = this.data;
    let {index, prentindex} = e.currentTarget.dataset;
    answerArr[prentindex] = index;
    this.setData({
      answerArr: answerArr
    })
    if(prentindex != 11) {
      this.setData({
        activeIndex: prentindex + 1
      })
    } else {
      this.handleAnswer(answerArr);
      this.setData({
        isShowSubmit: true
      })
    }

  },
  handleAnswer(arr) {
    let splitArr = [];
    let arr1 = [];
    arr.forEach((item, index) => {
      if((index + 1) % 3 == 0) {
        arr1.push(item)
        splitArr.push(arr1)
        arr1 = []
      } else {
        arr1.push(item)
      }
    })
    this.handleChangeValue(splitArr)
  },
  handleChangeValue(arr) {
    let numArr = [];
    arr.forEach(item => {
      let num = null;
      item.forEach(childItem => {
        num += childItem
      })
      numArr.push(num)
    })
    let answer = [['E', 'I'], ['S', 'N'], ['T', 'F'], ['J', 'P']]
    let answerStr = '';
    numArr.forEach((item, index) => {
      if(item >= 2) {
        answerStr += answer[index][1]
      } else {
        answerStr += answer[index][0]
      }
    })
    this.setData({
      answerStr
    })
  },
  handleSubmit() {
    tt.navigateTo({
      url: '/pages/answer/index?answer=' + this.data.answerStr // 指定页面的url
    });
  }
})
