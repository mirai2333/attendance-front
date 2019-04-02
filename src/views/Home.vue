<template>
    <div class="home_container">
        <img src="../images/banner.jpg" alt="标题图片"/>
        <div class="trans">
            <div class="attendance_box">
                <h1 style="margin-bottom: 0.07rem;margin-top:0px;padding-top:0.24rem !important">业主签到</h1>
                <span style="color: #6f7180">请用报名的手机号签到</span>
                <el-form @submit.native.prevent :model="info">
                    <input type="hidden" v-model="info.city">
                    <input type="hidden" v-model="info.term">
                    <el-form-item>
                        <el-input v-model="info.userName" placeholder="姓名"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input type="number" v-model="info.userTel" placeholder="手机号"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <!--<el-date-picker v-model="info.date" format="yyyy年M月d日" type="date" placeholder="开工日期" @focus="blurDate"></el-date-picker>-->
                        <el-input v-model="info.date" placeholder="开工日期" @focus="blurDate"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="danger" class="submitButton" round @click="doAttendance">立即签到</el-button>
                    </el-form-item>
                </el-form>

            </div>
            <p>轻松装承诺：您的信息将被严格保密</p>
            <div class="gift">
                <img src="./../images/gift.png" alt="礼物"/>
                <p>签到成功后可领取签到礼包</p>
            </div>
        </div>


        <mt-popup v-model="popupVisible" position="bottom">
            <div style="text-align: right;margin-top: 6px;margin-right: 2%">
                <el-button @click="confirmDate">确定</el-button>
            </div>
            <hr>
            <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
        </mt-popup>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                info: {
                    userName: '',
                    userTel: '',
                    date: '',
                    city: '',
                    term: '',
                    
                },
                dateType: 'text',
                popupVisible: false,
                pickerFlag: false,
                slots: [
                    {
                        flex: 1,
                        values: ['2019年', '已开工'],
                        className: 'slot1',
                        textAlign: 'right'
                    }, {
                        divider: true,
                        content: '-',
                        className: 'slot2'
                    }, {
                        flex: 1,
                        values: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '已开工'],
                        className: 'slot3',
                        textAlign: 'left'
                    }
                ]
            };
        },
        created() {
            this.info.city = this.$route.query.city;
            this.info.term = this.$route.query.term;
            let u = navigator.userAgent;
            // let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
            let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if (isIOS) {
                this.isAndroid = false;
            }
        },
        methods: {
            doAttendance() {
                //校验基本信息
                if (!this.info.city || !this.info.term) {
                    alert('城市或期数为空！');
                    return;
                }
                //校验输入信息
                if (!this.info.userName) {
                    alert('姓名不能为空');
                    return;
                }
                if (!this.info.userTel) {
                    alert('手机号不能为空');
                    return;
                }
                if (!this.info.date) {
                    alert('开工日期不能为空');
                    return;
                }
                //校验手机号
                let myReg = /^(((134|135|136|137|138|139|147|150|151|152|157|158|159|182|183|184|187|188|130|131|132|145|155|156|185|186|133|153|180|181|189|170|171|173|174|175|176|177|178|166|195|199))+\d{8})$/;

                if (!myReg.test(this.info.userTel)) {
                    alert('手机号有误');
                    return;
                }
                //发送请求
                this.$http.get('http://mall.qszhuang.com/attendance/doAttendance', {params: this.info}).then(res => {
                    if (res.body.code === 0) {
                        alert(res.body.msg);
                        this.$router.push({name: 'home'})
                    } else if (this.info.city === '3') {
                        this.$router.push({
                            name: 'BeiJing',
                            params: {
                                msg: res.body
                            }
                        });
                    } else {
                        this.$router.push({
                            name: 'success',
                            params: {
                                msg: res.body,
                                formData: this.info
                            }
                        });
                    }
                });
            },
            blurDate() {
                this.pickerFlag = true;
                document.activeElement.blur();
                this.popupVisible = !this.popupVisible;
                this.info.date = '2019年1月';
            },
            onValuesChange(picker, values) {
                let data = picker.getValues();
                if (values[0] !== '已开工') {
                    picker.setSlotValues(1, ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']);
                } else {
                    picker.setSlotValues(1, ['已开工']);
                }
                // window.console.log(picker.getValues());
                if (this.pickerFlag) {
                    if (data[0] === '已开工') {
                        this.info.date = data[0];
                    } else {
                        this.info.date = data[0] + data[1];
                    }
                }
            },
            confirmDate() {
                this.popupVisible = false;
            }
        }
    }
</script>

<style lang="less">
    .trans {
        transform: translateY(-8%);

    }

    .home_container {
        position: relative;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;

        img {
            width: 100%;

        }

        .attendance_box {
            // position: absolute;
            background-color: white;
            width: 96%;
            border-radius: 0.26rem;
            // left: 50%;
            // transform: translateY(-10%);
            // top: 4.32rem;
            margin: 0 auto;

            h1 {
                color: #c62325;
            }

            .el-form {
                display: flex;
                padding: 0 0.48rem;
                box-sizing: border-box;
                flex-direction: column;
                margin-top: 0.2rem;

                input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
                    color: gray;
                    font-size: 0.53rem;
                    font-weight: bold;
                }

                .el-input {
                    width: 100%;
                    outline: none;
                    background-color: white;
                    box-sizing: border-box;
                    border-radius: 0.08rem;
                }

                .el-input__inner {
                    font-size: 0.53rem;
                    border: 0.02rem solid gray;
                }

                .el-form-item {
                    height: 1.17rem;
                    width: 100%;
                }

                .submitButton {
                    height: 1.28rem;
                    width: 100%;
                    border-radius: 0.6rem;
                    background-color: #c92425;
                    font-size: 0.5rem;
                    color: white;
                    margin-bottom: 0.24rem;
                    margin-top: 0.02rem;
                    border: none;
                    outline: none;
                }
            }
        }

        p {
            margin-top: 0.1rem;
            font-size: 0.5rem;
            color: white;
            font-weight: bold;
            transform: translateY(-10%);
        }

        .gift {
            justify-content: center;
            display: flex;

            img {
                width: 0.6rem;
                height: 0.6rem;
                transform: translateY(-8%);
            }

            p {
                font-size: 0.48rem;
                color: white;
                margin: 0;
            }
        }

        .mint-popup {
            width: 100%;
        }
    }
</style>
