<template>
  <div class="container" v-cloak>
    <ul class="list">
      <li class="list-item line-spt-bott" v-for="(item, index) in list" :key="index">
        <div class="left-avatar">
          <div
            class="avatar-inner"
            :style="{backgroundImage: 'url(../image/slide'+ (index%3 + 1) +'.jpg)'}"
          ></div>
        </div>
        <div class="list-right-info">
          <p class="name text-ellipsis">{{item.name}}</p>
          <p class="message text-ellipsis">{{item.message}}</p>
          <p class="time">{{item.date}}</p>
        </div>
      </li>
    </ul>
    <listloading :loadend="isLoadEnd" :nodata="list.length === 0"></listloading>
  </div>
</template>

<script>
import Listloading from '../../components/listloading'
export default {
  name: 'message',
  components: {
    Listloading
  },
  data () {
    return {
      list: [],
      isLoading: false,
      isLoadEnd: false,
      page: 1
    }
  },
  created () {
    const self = this
    // 上拉加载
    self.$comm.pullUp(() => {
      if (self.isLoading || self.isLoadEnd) return
      self.getList()
    })
    // 下拉刷新
    self.$comm.pullDown(() => {
      if (self.isLoading) {
          api.refreshHeaderLoadDone()
          return
      } // 正在加载时阻阻止继续加载
      self.list = []
      self.isLoadEnd = false
      self.page = 1
      self.getList(true)
    })
    self.getList()
  },
  methods: {
    getList (isPullDown) {
      const self = this
      const arr = [{
        name: '王健林',
        message: '先设定一个小目标，赚它一个亿',
        date: '12月11日'
      },{
        name: '马云',
        message: '支付宝到账 300,000,000.00 元',
        date: '12月11日'
      },{
        name: '马化腾',
        message: '充值成功 100,000.00 元',
        date: '12月11日'
      },{
        name: '王思聪',
        message: 'test message1!',
        date: '12月11日'
      },{
        name: '李白',
        message: '飞流直下3000尺，疑是银河落九天',
        date: '12月11日'
      },{
        name: '齐天大圣孙悟空',
        message: '去俺花果山耍耍',
        date: '12月11日'
      }]
      self.isLoading = true
      setTimeout(() => {
        self.isLoading = false
        self.hideProgress()
        if (isPullDown) { //关键 如果是下拉刷新则调用下拉刷新完成
          api.refreshHeaderLoadDone()
        }
        for (let i = 0; i < 15; i++) {
          let randomIdx = Math.floor(Math.random()*5)
          self.list.push(arr[randomIdx])
        }
        if (self.list.length >= 75) { // 列表数据加载完毕则禁止继续操作加载
          self.isLoadEnd = true
          return
        }
        self.page++
      }, 1500)
    }
  }
}
</script>

<style lang="scss">
.list {
  position: relative;
}

.list-item {
  display: flex;
  display: -webkit-flex;
  height: 1.4rem;
  position: relative;
  transition: all 0.3s;
}

.list-item:active {
  background: rgba(0, 0, 0, 0.08);
}

.left-avatar {
  width: 1.4rem;
  height: 100%;
  position: relative;
}

.avatar-inner {
  width: 1rem;
  height: 1rem;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 4px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.list-right-info {
  position: relative;
  width: calc(100% - 1.4rem);
  padding-right: 1.2rem;
  box-sizing: border-box;
}

.list-right-info .name {
  padding-top: 0.3rem;
  font-size: 0.28rem;
  color: #222;
  line-height: 0.4rem;
}

.list-right-info .message {
  font-size: 0.24rem;
  color: #999;
  line-height: 0.4rem;
  padding-bottom: 0.3rem;
}

.list-right-info .time {
  position: absolute;
  right: 0;
  width: 1.2rem;
  top: 0;
  font-size: 0.2rem;
  line-height: 0.4rem;
  padding-top: 0.3rem;
  padding-right: 0.2rem;
  box-sizing: border-box;
}

.line-spt-bott:before {
  content: "";
  height: 1px;
  transform: scale(1, 0.5);
  -webkit-transform: scale(1, 0.5);
  background: rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 1.5rem;
  bottom: 0;
  right: 0;
}
</style>
