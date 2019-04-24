<template>
    <div class="success_container">
        <img class="titleImg" src="../../images/success_ban.jpg" alt="标题图片">
        <p>请勿关闭页面！</p>
        <div class="myBody">
            <div class="suc_box">
                <div class="logoBox">
                    <img id="logo" src="../../images/logo.png" alt="Logo">
                </div>
                <p>恭喜您 {{ date | moment }} 签到成功</p>
                <p>
                    温馨提示：{{msg}}请勿关闭页面，并于15分钟内领取签到{{cityTip}}，超过时间将无法领取。
                </p>
                <p v-if="xname==2"><strong style="font-size: larger">您还可以参与9:30-10:30的限时抢购活动！</strong></p>
            </div>
            <div class="TikTok">
                <img src="../../images/TikTok.jpg" alt="抖音二维码">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'TianJin',
        data() {
            return {
                date: "",
                msg: "",
                city: '16',
                cityTip: '礼包',
                xname:'',
               
            };
        },
        created() {
            // this.$route.params.msg里面有code，msg，data三个参数
            this.xname=this.$route.params.msg.msg
            if(this.xname==0){
                this.msg==null
            }
            // 报名未加装管
            if(this.xname==1){
            this.msg = "尊敬的会员，";
            }
            // 已报名已加装管
            if (this.xname==2) {
            this.msg="尊敬的VIP会员，"
            }
            this.date = this.$route.params.msg.data;

            if (this.$route.params.formData) {
                this.city = this.$route.params.formData.city;
                if (this.city === '16') {
                    this.cityTip = '资料入场';
                }
            }
        }
    };
</script>
<style lang="less" scoped>
    .success_container {
        position: relative;
        width: 100%;

        .titleImg {
            width: 100%;
            position: absolute;
        }

        > p {
            position: absolute;
            width: 100%;
            text-align: center;
            color: white;
            font-size: 0.8rem;
            font-weight: bold;
        }

        .myBody {
            position: absolute;
            top: 2.5rem;

            .suc_box {
                width: 96%;
                background-color: white;
                border-radius: 0.2rem;
                margin: 2% 2% 1px 2%;
                padding: 5% 0 8%;
                p {
                    text-align: center;
                }

                p:first-of-type {
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

                .logoBox {
                    text-align: center;
                    img {
                        width: 3rem;
                        margin-right: 0.28rem;
                        margin-bottom: 0.2rem;
                    }
                }
            }

            .TikTok {
                width: 96%;
                background-color: white;
                border-radius: 0.2rem;
                margin: 0 2%;
                padding: 3% 0;
                img {
                    width: 100%;
                }
            }
        }
    }
</style>