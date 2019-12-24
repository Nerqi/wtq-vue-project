<template>
  <div class="footer-layout">
    <div class="footer-layout-main">
      <div class="footer-main">
        <div class="footer-main-item">
          <p>软件产品</p>
          <a @click="showPage('jingdong')">京东商城</a>
          <a @click="showPage('taobao')">淘宝商城</a>
          <a @click="showPage('aiqiyi')">爱奇艺</a>
          <a @click="showPage('tengxun')">腾讯</a>
        </div>
        <div class="footer-main-item">
          <p>资料下载</p>
          <a>操作手册</a>
          <a>操作手册</a>
          <a>操作手册</a>
          <a>操作手册</a>
        </div>
        <div class="footer-main-item">
          <p>联系我们</p>
          <a>邮箱：wangtq@asiainfo.com</a>
          <a>热线：13596459384</a>
        </div>
        <div class="footer-main-item" style="text-align: center">
          <p>企业微信号</p>
          <div class="img">
            <img src="../../../assets/images/weChat.jpg" class="footer-img"/>
          </div>
        </div>
        <div class="footer-main-item" style="text-align: center">
          <p>微信公众号</p>
          <div class="img">
            <img src="../../../assets/images/weChat.jpg" class="footer-img"/>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-main">
        <p><strong>wangtq 版权所有.</strong></p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'FooterBar',
    props: {
    },
    data () {
      return {
      }
    },
    mounted() {
    },
    computed: {
    },
    methods: {
      down(type) {
        console.dir(type)
      },
      showPage(type) {
        this.$publicFunc.showPage(type)
        // let access_token = this.$store.getters['user/getAccess_token'] || ''
        // if (access_token) {
        //   this.$publicFunc.showPage(type)
        // } else {
        //   this.$Message.warning('还未登录！')
        //   this.$router.push({ name: 'login' })
        // }
      }
    }
  }
</script>
<style lang="less">
  .footer-layout{
    height: 100%;
    width: 100%;
    .footer-layout-main{
      width: 100%;
      height: 85%;
      display: flex;
      justify-content: center;
      .footer-main{
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        .footer-main-item{
          width: 15rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          color: #f8f8f9;
          p{
            font-size: 1em;
            font-weight: bold;
          }
          a{
            color: white;
            font-size: 0.7em;
            margin-top: 0.5rem;
          }
          @media screen and (min-width: 3072px){
            p{
              font-size: 1rem;
              font-weight: bold;
            }
            a{
              color: white;
              font-size: 1rem;
              margin-top: 0.5rem;
            }
          }
          @media screen and (min-width: 4800px){
            p{
              font-size: 1.4rem;
              font-weight: bold;
            }
            a{
              color: white;
              font-size: 1.4rem;
              margin-top: 0.5rem;
            }
          }
          @media screen and (max-width: 1535px) {
            p{
              font-size: 0.6rem;
              font-weight: bold;
            }
            a{
              color: white;
              font-size: 0.6rem;
              margin-top: 0.6rem;
            }
          }
          .img{
            height: 100%;
            margin-top: 2px;
            .footer-img{
              height: 60%;
            }
          }
        }
      }
    }
    .footer-bottom{
      height: 15%;
      width: 100%;
      display: flex;
      justify-content: center;
      .footer-bottom-main{
        display: flex;
        justify-content: center;
        height: 100%;
        width: 80%;
        border-top: 1px solid #f8f8f9;
        p{
          font-size: 1em;
          font-weight: bold;
        }
        @media screen and (min-width: 3072px){
          p{
            font-size: 1.2rem;
          }
        }
        @media screen and (min-width: 4800px){
          p{
            font-size: 1.5rem;
          }
        }
        @media screen and (max-width: 1535px) {
          p{
            font-size: 0.6rem;
          }
        }
      }
    }
  }
</style>
