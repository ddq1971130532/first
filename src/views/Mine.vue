<template>
  <div class="mine">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <!-- 头部 -->
      <div class="top">
        <div>
          <img class="logo" src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
          <span class="left">源码熊</span>
        </div>
        <div>
          <span class="right">源码熊编程</span>
          <img class="logo" src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
        </div>
      </div>
      <!-- 中间内容 -->
      <p>作品社区</p>
      <div class="content">
          <div class="card">
            <p>
              <span>
                <span class="span">超级玛丽</span>
                <span>2020 0105 15:30</span>
              </span>
              <van-icon name="cluster-o" color="#ffab00"/>
            </p>
            <div class="video">
              <div ref="msk" class="msk">
                <van-rate
                  v-model="value"
                  icon="like"
                  void-icon="like-o"
                  size="14"
                />
                <van-icon name="play-circle-o" class="play" size="50" @click="play"/>
                <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
              </div>
              <video ref="video" src="https://www.w3school.com.cn/i/movie.ogg"></video>
            </div>
            <div class="comment" @click="isShow = !isShow">...</div>
          </div>
          <div class="message">
            <van-field
              v-show="isShow"
              v-model="message"
              rows="2"
              autosize
              type="textarea"
              maxlength="50"
              placeholder="请输入留言"
              show-word-limit>
              <van-button slot="button" size="small" type="primary" @click="isShow = !isShow">发送</van-button>
            </van-field>
            <div class="text">
              <p>老师点评：小明很用心,这节课表现得很好,下次继续努力哦!</p>
              <div v-show="isCommentShow">
                <p>小明家长回复：谢谢老师的夸奖</p>
                <p>小高老师回复您：我一定会督促孩子好好学习的</p>
                <p>小高老师回复您：我一定会督促孩子好好学习的</p>
              </div>
              <div style="text-align: center;">
                <van-icon :name="`${isCommentShow?'arrow-up':'arrow-down'}`" @click="isCommentShow = !isCommentShow"/>
              </div>
            </div>
          </div>
        </div>
    </van-pull-refresh>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import FooterBar from 'components/FooterBar.vue'
import { PullRefresh, List, Icon, Rate, Field, Button, Panel } from 'vant'
export default {
  components: {
    FooterBar,
    [PullRefresh.name]: PullRefresh,
    [List.name]: List,
    [Icon.name]: Icon,
    [Rate.name]: Rate,
    [Field.name]: Field,
    [Button.name]: Button,
    [Panel.name]: Panel
  },
  mounted () {
    this.setWH()
    if (this.comment[0].message.length >= 3) {
      this.isCommentShow = false
    }
  },
  data () {
    return {
      isLoading: false,
      value: 3,
      message: '',
      isShow: false,
      isCommentShow: true,
      comment: [
        {
          id: 1,
          name: '老师',
          desc: '小明很用心,这节课表现得很好,下次继续努力哦!',
          message: [
            {
              id: 101,
              name: '小明家长',
              desc: '谢谢老师的夸奖',
              message: []
            },
            {
              id: 102,
              name: '小高老师',
              desc: '我一定会督促孩子好好学习的',
              message: []
            },
            {
              id: 103,
              name: '小高老师',
              desc: '我一定会督促孩子好好学习的',
              message: []
            }
          ]
        }
      ]
    }
  },
  methods: {
    onRefresh () {
      new Promise(() => {
        this.$router.go(0)
      }).then(() => {
        this.isLoading = false
      })
    },
    setWH () {
      this.$refs.msk.style.width = this.$refs.video.offsetWidth + 'px'
    },
    play () {
      this.$refs.video.play()
    }
  }
}
</script>

<style lang="less" scoped="scoped">
  .mine {
    padding: 30px;
    font-size: 14px;
    color: #333;
  }
  .top {
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
    }
    .left {
      margin-left: 10px;
      color: #666;
      position: relative;
    }
    .left::before {
      content: '';
      display: inline-block;
      width: 40px;
      height: 2px;
      background-color: #ffab00;
      position: absolute;
      left: -50%;
      bottom: -80%;
    }
    .right {
      margin-right: 10px;
      font-weight: bold;
    }
    .logo {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
  .content {
    > p {
      text-align: center;
      font-weight: bold;
    }
    .card {
      padding: 30px;
      border-radius: 10px;
      border: solid 1px rgba(0,0,0,0.1);
      .comment {
        text-align: right;
        font-size: 20px;
        color: #ffab00;
      }
      p {
        display: flex;
        justify-content: space-between;
        margin-top: 0px;
        .span::before {
          content: '';
          display: inline-block;
          width: 3px;
          height: 14px;
          background-color: #ffab00;
          margin-right: 5px;
        }
        span{
          display: flex;
          align-items: center;
          color: #666;
        }
        span:last-child {
          color: #999;
          font-size: 10px;
          margin-left: 10px;
          margin-bottom: -5px;
        }
      }
      .video {
        padding:0 20px;
        position: relative;
        .msk {
          height: 100%;
          border-radius: 10px;
          position: absolute;
          z-index: 1;
          background-color: rgba(0,0,0,0.3);
          .van-rate {
            position: absolute;
            top: 0;
            right: 0;
          }
          img {
            width: 60px;
            height: 40px;
            position: absolute;
            bottom: 1%;
            right: 0;
          }
          .play {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
          }
        }
        video {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
    }
    .message {
      padding: 20px;
      border-radius: 10px;
      border: solid 1px rgba(0,0,0,0.1);
      margin: 10px 0;
      .text {
        p {
          font-size: 10px;
        }
      }
    }
  }
</style>
