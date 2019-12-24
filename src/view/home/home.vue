<template>
  <Layout class="layout">
    <Content class="content">
      <Carousel class="content-swip" v-model="carouselValue" loop  autoplay :autoplaySpeed="autoplaySpeed" trigger="click" arrow="always">
        <CarouselItem class="demo-carousel">
          <div class="img-xys1" :style="{height: imgHeight}"></div>
        </CarouselItem>
        <CarouselItem class="demo-carousel">
          <div class="img-xys2" :style="{height: imgHeight}"></div>
        </CarouselItem>
        <CarouselItem class="demo-carousel">
          <div class="img-xys3" :style="{height: imgHeight}"></div>
        </CarouselItem>
        <CarouselItem class="demo-carousel">
          <div class="img-xys4" :style="{height: imgHeight}"></div>
        </CarouselItem>
      </Carousel>
      <div class="content-main" :style="{height: contentMainHeight}">
        <div class="content-main-item">
          <div>
            <img src="../../assets/images/loginNum1.png" class="img-content"/>
          </div>
          <p>集中化开发管理，开发阶段全流程及交付物管理</p>
        </div>
        <div class="content-main-item">
          <div>
            <img src="../../assets/images/loginNum2.png" class="img-content"/>
          </div>
          <p>软件质量保障，统计分析，综合评价</p>
        </div>
        <div class="content-main-item">
          <div>
            <img src="../../assets/images/loginNum3.png" class="img-content"/>
          </div>
          <p>提供云化和容器化资源，满足测试所需</p>
        </div>
        <div class="content-main-item">
          <div>
            <img src="../../assets/images/loginNum4.png" class="img-content"/>
          </div>
          <p>同时支持瀑布开发和敏捷开发两种模式</p>
        </div>
      </div>
    </Content>
  </Layout>
</template>

<script>
  import HeaderBar from '../../components/main/components/header'
  import FooterBar from '../../components/main/components/footer'
  export default {
    components: {
      HeaderBar,
      FooterBar
    },
    data () {
      return {
        type: 'login',
        carouselValue: 0,
        autoplaySpeed: 3000,
        imgHeight: (document.documentElement.clientHeight * (75 / 100)) + 'px',
        contentMainHeight: (document.documentElement.clientHeight * (40 / 100)) + 'px'
      }
    },
    methods: {
    }
  }
</script>

<style lang="less">
  .layout{
    .content{
      .content-swip{
        width: 100%;
        .demo-carousel{
          .img-xys1{
            background-image: url("../../assets/images/swip1.jpg");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: 100%;
          }
          .img-xys2{
            background-image: url("../../assets/images/swip2.jpg");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: 100%;
          }
          .img-xys3{
            background-image: url("../../assets/images/swip3.jpg");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: 100%;
          }
          .img-xys4{
            background-image: url("../../assets/images/swip4.jpg");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: 100%;
          }
        }
      }
      .content-main{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        .content-main-item{
          height: 100%;
          width: 20rem;
          margin-right: 6rem;
          margin-left: 6rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          .img-content{
            height: 6rem;
          }
        }
      }
    }
  }
</style>
