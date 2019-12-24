<template>
  <Layout class="layout">
    <Header :style="{height: headerHeight}">
      <HeaderBar :type="type"></HeaderBar>
    </Header>
    <Content class="content" :style="{height: fullHeight}">
      <div class="login">
        <land v-if="loginNav === 1" @loginNav="loginToNav"></land>
        <register  v-if="loginNav === 2"  @loginNav="loginToNav"></register>
        <addProject v-if="loginNav === 3" @loginNav="loginToNav"></addProject>
      </div>
    </Content>
    <Footer :style="{height: foooterHeight}">
      <FooterBar></FooterBar>
    </Footer>
  </Layout>
</template>

<script>
import HeaderBar from '../../components/main/components/header'
import FooterBar from '../../components/main/components/footer'
import land from './land'
import register from './register'
import addProject from './addProject'
export default {
  components: {
    HeaderBar,
    FooterBar,
    land,
    register,
    addProject
  },
  data () {
    return {
      type: 'login',
      fullHeight: document.documentElement.clientHeight + 'px',
      headerHeight: 5 + 'rem',
      foooterHeight: (document.documentElement.clientHeight * (3 / 10)) + 'px',
      loginNav: 1
    }
  },
  methods: {
    loginToNav(value) {
      this.loginNav = value
    }
  }
}
</script>

<style lang="less">
  .layout{
    .login{
      height: 100%;
      width: 100%;
      background-image: url("../../assets/images/loginForm.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
</style>
