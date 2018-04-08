
const icons = {
  back: '/static/img/back.png',
  home: "/static/img/home.png",
  personal: "/static/img/icon_centre.png"
};

const bottomData = [
  {
    icon: "static/img/icon_life.png",
    text: "生活"
  }, {
    icon: "static/img/icon_consult.png",
    text: "资讯"
  }, {
    icon: "static/img/my.png",
    text: "魅力女人"
  }, {
    icon: "static/img/icon_activity.png",
    text: "活动"
  }, {
    icon: "static/img/icon_doctor.png",
    text: "医生"
  }
];

const gridData = [
  {
    text: '积分',
    icon: '/static/img/jifen.png',
    targetUrl: '/personal/integral',
  },
  {
    text: '收藏',
    icon: '/static/img/shoucang.png',
    targetUrl: '/personal/collect',
  },
  {
    text: '设置',
    icon: '/static/img/setting.png',
    targetUrl: '/personal/setting',
  },
  {
    text: '关于我们',
    icon: '/static/img/about.png',
    targetUrl: '/personal/about',
  },
  {
    text: '意见反馈',
    icon: '/static/img/feedback.png',
    targetUrl: '/personal/feedback',
  },
  {
    text: '联系我们',
    icon: '/static/img/connect.png',
    targetUrl: '/personal/connect',
  }
];

const activityTabData = ['优惠活动', '会员活动', '亲子活动'];

const adviseTip = '您可以把你的意见与建议反馈给我们，告诉我们改进的方向，我们会及时查看和处理您的反馈，谢谢您的支持！';

module.exports = {
  icons,
  bottomData,
  gridData,
  adviseTip,
  activityTabData,
};