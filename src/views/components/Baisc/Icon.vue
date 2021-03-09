<template>
  <div>
    <div class="part">
      <h1>Icon 图标</h1>
      <p>提供了一套常用的图标集合。</p>
    </div>
    <div class="part">
      <h2>使用方法</h2>
      <p>使用 <em>co-icon</em> 标签，并配合 <em>icon-class</em> 和 <em>mode</em> 展示效果。例如：</p>
      <co-codeshow :codetext="codetext_base" :langs="'html'">
        <div slot="content">
          <div class="padding-xs">
            <div class="flex align-center">
              <co-icon class="margin-right-sm" name="icon-shouye" size="30"></co-icon>
              <co-icon class="margin-right-sm" name="icon-sousuo" size="30"></co-icon>
              <co-icon class="margin-right-sm" name="icon-sousuo" size="30" color="#12B7F5"></co-icon>
              <co-icon class="margin-right-sm" name="icon-sousuo" size="40"></co-icon>
              <co-icon class="margin-right-sm" name="icon-sousuo" size="40" mode="symbol"></co-icon>
            </div>
          </div>
        </div>
      </co-codeshow>
    </div>
    <div class="part">
      <h2>图标集合</h2>
      <table class="width-100">
        <tr v-for="index in Math.ceil(icon_list.length / 6)">
          <td class="padding-sm" v-for="single in 6">
            <div class="flex justify-center margin-bottom-xs">
              <co-icon :name="icon_list[(index - 1)*6+single-1]==null?'':icon_list[(index - 1)*6+single-1].icon_name"
                size="40"></co-icon>
            </div>
            <div class="text-center text-13">
              {{icon_list[(index - 1)*6+single-1]==null?'':icon_list[(index - 1)*6+single-1].icon_text}}</div>
            <div class="text-center text-13">
              {{icon_list[(index - 1)*6+single-1]==null?'':icon_list[(index - 1)*6+single-1].icon_class}}</div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      codetext_base: '<template>\n  <div>\n    <co-icon name="icon-shouye" size="30"></co-icon>\n    <co-icon name="icon-sousuo" size="30"></co-icon>\n    <co-icon name="icon-sousuo" size="30" color="#12B7F5"></co-icon>\n    <co-icon name="icon-sousuo" size="40"></co-icon>\n    <co-icon name="icon-sousuo" size="40" mode="symbol"></co-icon>\n  </div>\n</template>',
      icon_list: [
        {
          icon_name: 'icon-biaoqian',
          icon_text: '标签',
          icon_class: 'icon-biaoqian',
        },
        {
          icon_name: 'icon-shouye',
          icon_text: '首页',
          icon_class: 'icon-shouye',
        },
        {
          icon_name: 'icon-huodong',
          icon_text: '活动',
          icon_class: 'icon-huodong',
        },
        {
          icon_name: 'icon-pinglun',
          icon_text: '评论',
          icon_class: 'icon-pinglun',
        },
        {
          icon_name: 'icon-sousuo',
          icon_text: '搜索',
          icon_class: 'icon-sousuo',
        },
        {
          icon_name: 'icon-xihuan',
          icon_text: '喜欢',
          icon_class: 'icon-xihuan',
        },
        {
          icon_name: 'icon-xianshi',
          icon_text: '显示',
          icon_class: 'icon-xianshi',
        },
        {
          icon_name: 'icon-xinxi',
          icon_text: '信息',
          icon_class: 'icon-xinxi',
        },
        {
          icon_name: 'icon-kabao',
          icon_text: '卡包',
          icon_class: 'icon-kabao',
        },
        {
          icon_name: 'icon-luxiang',
          icon_text: '录像',
          icon_class: 'icon-luxiang',
        },
        {
          icon_name: 'icon-tongzhi',
          icon_text: '通知',
          icon_class: 'icon-tongzhi',
        },
        {
          icon_name: 'icon-wenjian',
          icon_text: '文件',
          icon_class: 'icon-wenjian',
        },
        {
          icon_name: 'icon-yinle',
          icon_text: '音乐',
          icon_class: 'icon-yinle',
        },
        {
          icon_name: 'icon-yuyin1',
          icon_text: '语音',
          icon_class: 'icon-yuyin1',
        },
        {
          icon_name: 'icon-daka',
          icon_text: '打卡',
          icon_class: 'icon-daka',
        },
        {
          icon_name: 'icon-daojishi',
          icon_text: '倒计时',
          icon_class: 'icon-daojishi',
        },
        {
          icon_name: 'icon-naozhong',
          icon_text: '闹钟',
          icon_class: 'icon-naozhong',
        },
        {
          icon_name: 'icon-zhekouquan',
          icon_text: '折扣券',
          icon_class: 'icon-zhekouquan',
        },
        {
          icon_name: 'icon-huiyuan',
          icon_text: '会员',
          icon_class: 'icon-huiyuan',
        },
        {
          icon_name: 'icon-shezhi',
          icon_text: '设置',
          icon_class: 'icon-shezhi',
        },
        {
          icon_name: 'icon-yaoqing',
          icon_text: '邀请',
          icon_class: 'icon-yaoqing',
        },
        {
          icon_name: 'icon-yinhangka',
          icon_text: '银行卡',
          icon_class: 'icon-yinhangka',
        },
        {
          icon_name: 'icon-fenxiang',
          icon_text: '分享',
          icon_class: 'icon-fenxiang',
        },
        {
          icon_name: 'icon-lipin',
          icon_text: '礼品',
          icon_class: 'icon-lipin',
        },
        {
          icon_name: 'icon-shoucang',
          icon_text: '收藏',
          icon_class: 'icon-shoucang',
        },
        {
          icon_name: 'icon-youhuiquan',
          icon_text: '优惠券',
          icon_class: 'icon-youhuiquan',
        },
        {
          icon_name: 'icon-dianpu',
          icon_text: '店铺',
          icon_class: 'icon-dianpu',
        },
        {
          icon_name: 'icon-dingdan',
          icon_text: '订单',
          icon_class: 'icon-dingdan',
        },
        {
          icon_name: 'icon-jinrong',
          icon_text: '金融',
          icon_class: 'icon-jinrong',
        },
        {
          icon_name: 'icon-licai',
          icon_text: '理财',
          icon_class: 'icon-licai',
        },
        {
          icon_name: 'icon-dengji',
          icon_text: '等级',
          icon_class: 'icon-dengji',
        },
        {
          icon_name: 'icon-jine',
          icon_text: '金额',
          icon_class: 'icon-jine',
        },
        {
          icon_name: 'icon-liwu',
          icon_text: '礼物',
          icon_class: 'icon-liwu',
        },
        {
          icon_name: 'icon-shanchu',
          icon_text: '删除',
          icon_class: 'icon-shanchu',
        },
        {
          icon_name: 'icon-wode2',
          icon_text: '我的',
          icon_class: 'icon-wode2',
        },
        {
          icon_name: 'icon-dianzan',
          icon_text: '点赞',
          icon_class: 'icon-dianzan',
        },
        {
          icon_name: 'icon-paizhao',
          icon_text: '拍照',
          icon_class: 'icon-paizhao',
        },
        {
          icon_name: 'icon-shijian',
          icon_text: '时间',
          icon_class: 'icon-shijian',
        },
        {
          icon_name: 'icon-xiaoxi',
          icon_text: '消息',
          icon_class: 'icon-xiaoxi',
        },
        {
          icon_name: 'icon-bofang',
          icon_text: '播放',
          icon_class: 'icon-bofang',
        },
        {
          icon_name: 'icon-fenlei',
          icon_text: '分类',
          icon_class: 'icon-fenlei',
        },
        {
          icon_name: 'icon-gouwuche',
          icon_text: '购物车',
          icon_class: 'icon-gouwuche',
        },
        {
          icon_name: 'icon-yinliang',
          icon_text: '音量',
          icon_class: 'icon-yinliang',
        },
        {
          icon_name: 'icon-bianji',
          icon_text: '编辑',
          icon_class: 'icon-bianji',
        },
        {
          icon_name: 'icon-faxian',
          icon_text: '发现',
          icon_class: 'icon-faxian',
        },
        {
          icon_name: 'icon-kuaijin',
          icon_text: '快进',
          icon_class: 'icon-kuaijin',
        },
        {
          icon_name: 'icon-kuaitui',
          icon_text: '快退',
          icon_class: 'icon-kuaitui',
        },
        {
          icon_name: 'icon-zanting',
          icon_text: '暂停',
          icon_class: 'icon-zanting',
        },
        {
          icon_name: 'icon-fenlei1',
          icon_text: '分类',
          icon_class: 'icon-fenlei1',
        },
        {
          icon_name: 'icon-shenghuo',
          icon_text: '生活',
          icon_class: 'icon-shenghuo',
        },
        {
          icon_name: 'icon-fenxiang2',
          icon_text: '分享',
          icon_class: 'icon-fenxiang2',
        },
        {
          icon_name: 'icon-shangchuan',
          icon_text: '上传',
          icon_class: 'icon-shangchuan',
        },
        {
          icon_name: 'icon-xiazai',
          icon_text: '下载',
          icon_class: 'icon-xiazai',
        },
        {
          icon_name: 'icon-shouye1',
          icon_text: '首页',
          icon_class: 'icon-shouye1',
        },
        {
          icon_name: 'icon-xiaoxi1',
          icon_text: '消息',
          icon_class: 'icon-xiaoxi1',
        },
        {
          icon_name: 'icon-dingwei',
          icon_text: '定位',
          icon_class: 'icon-dingwei',
        },
        {
          icon_name: 'icon-saomiao',
          icon_text: '扫描',
          icon_class: 'icon-saomiao',
        },
        {
          icon_name: 'icon-zhibo',
          icon_text: '直播',
          icon_class: 'icon-zhibo',
        },
        {
          icon_name: 'icon-shaixuan',
          icon_text: '筛选',
          icon_class: 'icon-shaixuan',
        },
        {
          icon_name: 'icon-shuaxin',
          icon_text: '刷新',
          icon_class: 'icon-shuaxin',
        },
        {
          icon_name: 'icon-wenjian1',
          icon_text: '文件',
          icon_class: 'icon-wenjian1',
        },
        {
          icon_name: 'icon-wenjianjia',
          icon_text: '文件夹',
          icon_class: 'icon-wenjianjia',
        },
        {
          icon_name: 'icon-duihuanquan',
          icon_text: '兑换券',
          icon_class: 'icon-duihuanquan',
        },
        {
          icon_name: 'icon-hongbao',
          icon_text: '红包',
          icon_class: 'icon-hongbao',
        },
        {
          icon_name: 'icon-jiangbei',
          icon_text: '奖杯',
          icon_class: 'icon-jiangbei',
        },
        {
          icon_name: 'icon-paihangbang',
          icon_text: '排行榜',
          icon_class: 'icon-paihangbang',
        },
        {
          icon_name: 'icon-erweima',
          icon_text: '二维码',
          icon_class: 'icon-erweima',
        },
        {
          icon_name: 'icon-jifen',
          icon_text: '积分',
          icon_class: 'icon-jifen',
        },
        {
          icon_name: 'icon-kehu',
          icon_text: '客户',
          icon_class: 'icon-kehu',
        },
        {
          icon_name: 'icon-mima',
          icon_text: '密码',
          icon_class: 'icon-mima',
        },
        {
          icon_name: 'icon-daifahuo',
          icon_text: '待发货',
          icon_class: 'icon-daifahuo',
        },
        {
          icon_name: 'icon-daifukuan',
          icon_text: '待付款',
          icon_class: 'icon-daifukuan',
        },
        {
          icon_name: 'icon-daishouhuo',
          icon_text: '待收货',
          icon_class: 'icon-daishouhuo',
        },
        {
          icon_name: 'icon-gouwu',
          icon_text: '购物',
          icon_class: 'icon-gouwu',
        },
        {
          icon_name: 'icon-pintuan',
          icon_text: '拼团',
          icon_class: 'icon-pintuan',
        },
        {
          icon_name: 'icon-mingxi',
          icon_text: '明细',
          icon_class: 'icon-mingxi',
        },
        {
          icon_name: 'icon-shouyi',
          icon_text: '收益',
          icon_class: 'icon-shouyi',
        },
        {
          icon_name: 'icon-shouhou',
          icon_text: '售后',
          icon_class: 'icon-shouhou',
        },
        {
          icon_name: 'icon-wuliu',
          icon_text: '物流',
          icon_class: 'icon-wuliu',
        },
        {
          icon_name: 'icon-baocun',
          icon_text: '保存',
          icon_class: 'icon-baocun',
        },
        {
          icon_name: 'icon-ditu',
          icon_text: '地图',
          icon_class: 'icon-ditu',
        },
        {
          icon_name: 'icon-hezuo',
          icon_text: '合作',
          icon_class: 'icon-hezuo',
        },
        {
          icon_name: 'icon-jinbi',
          icon_text: '金币',
          icon_class: 'icon-jinbi',
        },
        {
          icon_name: 'icon-dayin',
          icon_text: '打印',
          icon_class: 'icon-dayin',
        },
        {
          icon_name: 'icon-fenxiang1',
          icon_text: '分享',
          icon_class: 'icon-fenxiang1',
        },
        {
          icon_name: 'icon-shubiao',
          icon_text: '鼠标',
          icon_class: 'icon-shubiao',
        },
        {
          icon_name: 'icon-jisuanqi',
          icon_text: '计算器',
          icon_class: 'icon-jisuanqi',
        },
        {
          icon_name: 'icon-quanyi',
          icon_text: '权益',
          icon_class: 'icon-quanyi',
        },
        {
          icon_name: 'icon-rili',
          icon_text: '日历',
          icon_class: 'icon-rili',
        },
        {
          icon_name: 'icon-shexiangtou',
          icon_text: '摄像头',
          icon_class: 'icon-shexiangtou',
        },
        {
          icon_name: 'icon-bianji1',
          icon_text: '编辑',
          icon_class: 'icon-bianji1',
        },
        {
          icon_name: 'icon-faxian1',
          icon_text: '发现',
          icon_class: 'icon-faxian1',
        },
        {
          icon_name: 'icon-guanbi',
          icon_text: '关闭',
          icon_class: 'icon-guanbi',
        },
        {
          icon_name: 'icon-wode',
          icon_text: '我的',
          icon_class: 'icon-wode',
        },
        {
          icon_name: 'icon-yingshi',
          icon_text: '影视',
          icon_class: 'icon-yingshi',
        },
        {
          icon_name: 'icon-gouwudai',
          icon_text: '购物袋',
          icon_class: 'icon-gouwudai',
        },
        {
          icon_name: 'icon-guanbi1',
          icon_text: '关闭',
          icon_class: 'icon-guanbi1',
        },
        {
          icon_name: 'icon-huangguan',
          icon_text: '皇冠',
          icon_class: 'icon-huangguan',
        },
        {
          icon_name: 'icon-lianjie',
          icon_text: '链接',
          icon_class: 'icon-lianjie',
        },
        {
          icon_name: 'icon-tishi',
          icon_text: '提示',
          icon_class: 'icon-tishi',
        },
        {
          icon_name: 'icon-yujing',
          icon_text: '预警',
          icon_class: 'icon-yujing',
        },
        {
          icon_name: 'icon-yundong',
          icon_text: '运动',
          icon_class: 'icon-yundong',
        },
        {
          icon_name: 'icon-zhidao',
          icon_text: '指导',
          icon_class: 'icon-zhidao',
        },
        {
          icon_name: 'icon-neicun',
          icon_text: '内存',
          icon_class: 'icon-neicun',
        },
        {
          icon_name: 'icon-pifu',
          icon_text: '皮肤',
          icon_class: 'icon-pifu',
        },
        {
          icon_name: 'icon-tongxunlu',
          icon_text: '通讯录',
          icon_class: 'icon-tongxunlu',
        },
        {
          icon_name: 'icon-tupian',
          icon_text: '图片',
          icon_class: 'icon-tupian',
        },
        {
          icon_name: 'icon-chaxunrenwu',
          icon_text: '查询任务',
          icon_class: 'icon-chaxunrenwu',
        },
        {
          icon_name: 'icon-shuaxin1',
          icon_text: '刷新',
          icon_class: 'icon-shuaxin1',
        },
        {
          icon_name: 'icon-tianjiahaoyou',
          icon_text: '添加好友',
          icon_class: 'icon-tianjiahaoyou',
        },
        {
          icon_name: 'icon-wode1',
          icon_text: '我的',
          icon_class: 'icon-wode1',
        },
        {
          icon_name: 'icon-shanchuhaoyou',
          icon_text: '删除好友',
          icon_class: 'icon-shanchuhaoyou',
        },
        {
          icon_name: 'icon-xuanzhonghaoyou',
          icon_text: '选中好友',
          icon_class: 'icon-xuanzhonghaoyou',
        },
        {
          icon_name: 'icon-zhengjian',
          icon_text: '证件',
          icon_class: 'icon-zhengjian',
        },
        {
          icon_name: 'icon-zixun',
          icon_text: '资讯',
          icon_class: 'icon-zixun',
        },
        {
          icon_name: 'icon-diannao',
          icon_text: '电脑',
          icon_class: 'icon-diannao',
        },
        {
          icon_name: 'icon-shouji',
          icon_text: '手机',
          icon_class: 'icon-shouji',
        },
        {
          icon_name: 'icon-youjian',
          icon_text: '邮件',
          icon_class: 'icon-youjian',
        },
        {
          icon_name: 'icon-zuzhi',
          icon_text: '组织',
          icon_class: 'icon-zuzhi',
        },
        {
          icon_name: 'icon-anquan',
          icon_text: '安全',
          icon_class: 'icon-anquan',
        },
        {
          icon_name: 'icon-biaodan',
          icon_text: '表单',
          icon_class: 'icon-biaodan',
        },
        {
          icon_name: 'icon-daohang',
          icon_text: '导航',
          icon_class: 'icon-daohang',
        },
        {
          icon_name: 'icon-dingwei1',
          icon_text: '定位1',
          icon_class: 'icon-dingwei1',
        },
        {
          icon_name: 'icon-gonggao',
          icon_text: '公告',
          icon_class: 'icon-gonggao',
        },
        {
          icon_name: 'icon-tonghua',
          icon_text: '通话',
          icon_class: 'icon-tonghua',
        },
        {
          icon_name: 'icon-fangda',
          icon_text: '放大',
          icon_class: 'icon-fangda',
        },
        {
          icon_name: 'icon-suoxiao',
          icon_text: '缩小',
          icon_class: 'icon-suoxiao',
        },
        {
          icon_name: 'icon-huore',
          icon_text: '火热',
          icon_class: 'icon-huore',
        },
        {
          icon_name: 'icon-yinle1',
          icon_text: '音乐',
          icon_class: 'icon-yinle1',
        },
        {
          icon_name: 'icon-yinliang1',
          icon_text: '音量',
          icon_class: 'icon-yinliang1',
        },
        {
          icon_name: 'icon-biaoqian1',
          icon_text: '标签',
          icon_class: 'icon-biaoqian1',
        },
        {
          icon_name: 'icon-fanhui',
          icon_text: '返回',
          icon_class: 'icon-fanhui',
        },
        {
          icon_name: 'icon-gengxin',
          icon_text: '更新',
          icon_class: 'icon-gengxin',
        },
        {
          icon_name: 'icon-moban',
          icon_text: '模板',
          icon_class: 'icon-moban',
        },
        {
          icon_name: 'icon-qiehuan',
          icon_text: '切换',
          icon_class: 'icon-qiehuan',
        },
        {
          icon_name: 'icon-yuncunchu',
          icon_text: '云存储',
          icon_class: 'icon-yuncunchu',
        },
        {
          icon_name: 'icon-jiushui',
          icon_text: '酒水',
          icon_class: 'icon-jiushui',
        },
        {
          icon_name: 'icon-tongji',
          icon_text: '统计',
          icon_class: 'icon-tongji',
        },
        {
          icon_name: 'icon-caidan',
          icon_text: '菜单',
          icon_class: 'icon-caidan',
        },
        {
          icon_name: 'icon-quanpin',
          icon_text: '全频',
          icon_class: 'icon-quanpin',
        },
        {
          icon_name: 'icon-xiaoping',
          icon_text: '小屏',
          icon_class: 'icon-xiaoping',
        },
        {
          icon_name: 'icon-xunhuan',
          icon_text: '循环',
          icon_class: 'icon-xunhuan',
        },
        {
          icon_name: 'icon-yincang',
          icon_text: '隐藏',
          icon_class: 'icon-yincang',
        },
        {
          icon_name: 'icon-fenlei2',
          icon_text: '分类',
          icon_class: 'icon-fenlei2',
        },
        {
          icon_name: 'icon-huizong',
          icon_text: '汇总',
          icon_class: 'icon-huizong',
        },
        {
          icon_name: 'icon-jiaoyi',
          icon_text: '交易',
          icon_class: 'icon-jiaoyi',
        },
        {
          icon_name: 'icon-liebiao',
          icon_text: '列表',
          icon_class: 'icon-liebiao',
        },
        {
          icon_name: 'icon-_xuanxiang',
          icon_text: '选项',
          icon_class: 'icon-_xuanxiang',
        },
        {
          icon_name: 'icon-huodong1',
          icon_text: '活动',
          icon_class: 'icon-huodong1',
        },
        {
          icon_name: 'icon-jiankong',
          icon_text: '监控',
          icon_class: 'icon-jiankong',
        },
        {
          icon_name: 'icon-youxi',
          icon_text: '游戏',
          icon_class: 'icon-youxi',
        },
        {
          icon_name: 'icon-jilu',
          icon_text: '记录',
          icon_class: 'icon-jilu',
        },
        {
          icon_name: 'icon-jietu',
          icon_text: '截图',
          icon_class: 'icon-jietu',
        },
        {
          icon_name: 'icon-liangdu',
          icon_text: '亮度',
          icon_class: 'icon-liangdu',
        },
        {
          icon_name: 'icon-meishi',
          icon_text: '美食',
          icon_class: 'icon-meishi',
        },
        {
          icon_name: 'icon-yuyan',
          icon_text: '语言',
          icon_class: 'icon-yuyan',
        },
        {
          icon_name: 'icon-baihuo',
          icon_text: '百货',
          icon_class: 'icon-baihuo',
        },
        {
          icon_name: 'icon-chuhang',
          icon_text: '出行',
          icon_class: 'icon-chuhang',
        },
        {
          icon_name: 'icon-guanggao',
          icon_text: '广告',
          icon_class: 'icon-guanggao',
        },
        {
          icon_name: 'icon-jiankang',
          icon_text: '健康',
          icon_class: 'icon-jiankang',
        },
        {
          icon_name: 'icon-lanya',
          icon_text: '蓝牙',
          icon_class: 'icon-lanya',
        },
        {
          icon_name: 'icon-shuju',
          icon_text: '数据',
          icon_class: 'icon-shuju',
        },
        {
          icon_name: 'icon-xueye',
          icon_text: '学业',
          icon_class: 'icon-xueye',
        },
        {
          icon_name: 'icon-ziyuan',
          icon_text: '资源',
          icon_class: 'icon-ziyuan',
        },
        {
          icon_name: 'icon-loufang',
          icon_text: '楼房',
          icon_class: 'icon-loufang',
        },
        {
          icon_name: 'icon-pingjia',
          icon_text: '评价',
          icon_class: 'icon-pingjia',
        },
        {
          icon_name: 'icon-wuxiaoxi',
          icon_text: '无消息',
          icon_class: 'icon-wuxiaoxi',
        },
        {
          icon_name: 'icon-yiwen',
          icon_text: '疑问',
          icon_class: 'icon-yiwen',
        },
        {
          icon_name: 'icon-shuji',
          icon_text: '书籍',
          icon_class: 'icon-shuji',
        },
        {
          icon_name: 'icon-zidingyi',
          icon_text: '自定义',
          icon_class: 'icon-zidingyi',
        },
        {
          icon_name: 'icon-jiancha',
          icon_text: '检查',
          icon_class: 'icon-jiancha',
        },
        {
          icon_name: 'icon-jianshao',
          icon_text: '减少',
          icon_class: 'icon-jianshao',
        },
        {
          icon_name: 'icon-tianjia',
          icon_text: '添加',
          icon_class: 'icon-tianjia',
        },
        {
          icon_name: 'icon-banquan',
          icon_text: '版权',
          icon_class: 'icon-banquan',
        },
        {
          icon_name: 'icon-jingxuan',
          icon_text: '精选',
          icon_class: 'icon-jingxuan',
        },
        {
          icon_name: 'icon-xingbie',
          icon_text: '性别',
          icon_class: 'icon-xingbie',
        },
        {
          icon_name: 'icon-xunzhang',
          icon_text: '勋章',
          icon_class: 'icon-xunzhang',
        },
        {
          icon_name: 'icon-beifen',
          icon_text: '备份',
          icon_class: 'icon-beifen',
        },
        {
          icon_name: 'icon-quanxian',
          icon_text: '权限',
          icon_class: 'icon-quanxian',
        },
        {
          icon_name: 'icon-quanxuan',
          icon_text: '全选',
          icon_class: 'icon-quanxuan',
        },
      ]
    }
  },
  created () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  },
  methods: {
    iconListLength () {
      return this.icon_list.length / 6
    }
  }
}
</script>

<style>
table {
  border: 1px solid #d8d8d8;
  border-radius: 5px;
  border-collapse: collapse;
  border-style: hidden;
  box-shadow: 0 0 0 1px #d8d8d8;
}

table tr td {
  max-width: 100px;
  border: 1px solid #dfdfdf;
}
</style>