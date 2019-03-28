<template>
  <div>
    <img width="100%" src="../../images/success_ban.jpg" alt="标题图片">
    <div class="main-body">
      <p class="alertTitle">请勿关闭页面！</p>
      <div class="hint-box">
        <div class="logo-box">
          <img id="logo" src="../../images/logo.png" alt="Logo">
        </div>
        <div class="content-box">
          <p>恭喜您 {{ date | moment }} 签到成功</p>
          <p>温馨提示：{{msg}}请勿关闭页面，并于15分钟内领取签到礼包，超过时间将无法领取。</p>
          <p v-if="msg.includes('VIP')">
            <strong style="font-size: larger">您还可以参与9:30-10:30的限时抢购活动！</strong>
          </p>
        </div>
      </div>
      <div v-if="msg.includes('尊敬的会员')">
        <div class="promotion-box">
        
          <div style="text-align: center">
            <img style="width: 40%;" src="../../images/BeiJingKeeper.jpg" alt="北京装管二维码">
          </div>
          <div class="img-hint-box">
            <p style="margin-bottom: 0">长按识别二维码</p>
            <p style="margin-top: 0">添加轻松装宝宝微信</p>
          </div>
        </div>
        <p
          style="margin: 5% 5%;font-size: 0.35rem;color: white"
        >感谢您前来参加轻松装建材家具家电团购盛典,我们将竭诚为您购买建材提供帮助,有任何问题都可联系轻松装宝宝或在微信公众号给我们留言,我们会第一时间收到并反馈.</p>
      </div>
       <div v-else>
            <div class="TikTok">
                <img src="../../images/TikTok.jpg" alt="抖音二维码">
            </div>
            
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BeiJing",
  data() {
    return {
      date: "",
      msg: "尊敬的会员",
    };
  },
  created() {
    if (this.$route.params.msg) {
      this.msg = this.$route.params.msg.msg;
      this.date = this.$route.params.msg.data;
    }
  }
};
</script>

<style lang="less" scoped>
.main-body {
  position: absolute;
  top: 0;
  width: 100%;
  .alertTitle {
    text-align: center;
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
  }
  .hint-box {
    width: 96%;
    background-color: white;
    border-radius: 0.2rem;
    margin: 2% 2% 0px 2%;
    padding: 5% 0 5%;
    .logo-box {
      text-align: center;
      img {
        width: 3rem;
        margin-right: 0.28rem;
        margin-bottom: 0.2rem;
      }
    }
    .content-box {
      p:first-of-type {
        text-align: center;
        margin-top: 0.2rem;
        margin-bottom: 0.4rem;
        color: #c62324;
        font-size: 0.7rem;
        font-weight: bold;
      }
      p:nth-of-type(2) {
        font-size: 0.4rem;
        color: black;
        width: 85%;
        margin: 0 auto;
        font-weight: bold;
        text-align: left;
      }
      p:nth-of-type(3) {
        text-align: center;
      }
    }
  }
  .promotion-box {
    border-top: 1px dashed #BDBDBD;
    width: 96%;
    background-color: white;
    border-radius: 0.2rem;
    margin: 0 2%;
    padding: 5% 0 5%;
    .img-hint-box {
      text-align: center;
      p {
        font-size: 0.45rem;
      }
    }
  }
  .TikTok {
                width: 96%;
                background-color: white;
                border-radius: 0.2rem;
                margin: 0 2%;
                margin-top: 1px;
                padding: 3% 0;
                img {
                    width: 100%;
                }
            }
}

.promotion-box:before,.promotion-box:after{
    content: "";
            position: absolute;
            display: block;
            width: 0.48rem;
            height: 0.48rem;
            background: #c62324;
            border-radius: 50%;
            top: 7.4rem;
}
.promotion-box:before{
            left: -0.08rem;
}
.promotion-box:after{
            right: -0.08rem;
}
</style>