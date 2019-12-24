<template>
  <Layout class="layout">
    <Header :style="{height: headerHeight}">
      <HeaderBar :type="type"></HeaderBar>
    </Header>
    <Layout>
      <Home v-if="type === 'home'"></Home>
      <Sider class="sider" :style="{height: siderHeight, minWidth: siderWidth}" v-show="type === 'main'">
        <Menu theme="light" width="auto" ref="menu" @on-select="handleSelect" :active-name="activeName" :open-names="openName" accordion>
          <div v-for="item in menu_list" :key="item.menu_url">
            <MenuItem v-if="!item.children_list" :name="item.menu_url"><Icon :type="item.menu_icon" />{{item.menu_name}}</MenuItem>
            <Submenu :name="item.menu_url" v-if="item.children_list">
              <template slot="title">
                <Icon :type="item.menu_icon" />
                {{item.menu_name}}
              </template>
              <MenuItem :name="item_child.menu_url" v-for="(item_child) in item.children_list" :key="item_child.menu_url"> {{item_child.menu_name}}</MenuItem>
            </Submenu>
          </div>
        </Menu>
      </Sider>
      <Content style="background-color: #ffffff;" :style="{height: siderHeight}" v-show="type === 'main'">
        <router-view></router-view>
      </Content>
    </Layout>
    <Footer :style="{height: foooterHeight}">
      <FooterBar></FooterBar>
    </Footer>
  </Layout>
</template>
<script>
  import Home from '../../view/home/home'
  import HeaderBar from './components/header'
  import FooterBar from '../../components/main/components/footer'
  import Menu from './menu'
  export default {
    name: 'Main',
    components: {
      HeaderBar,
      FooterBar,
      Home
    },
    data () {
      return {
        type: 'main',
        activeName: '',
        openName: [],
        headerHeight: 5 + 'rem',
        siderHeight: (document.documentElement.clientHeight + 50) + 'px',
        siderWidth: (document.documentElement.clientWidth * (4 / 30)) + 'px',
        foooterHeight: (document.documentElement.clientHeight * (3 / 10)) + 'px'
      }
    },
    computed: {
      menu_list() {
        return Menu
      }
    },
    watch: {
      '$route' (newRoute) {
        if (newRoute.name === 'home') {
          this.type = 'home'
        } else {
          this.type = 'main'
        }
        let tmp = newRoute.name.split('-')
        if (tmp[0] === 'url') {
          this.openName = ['url']
        } else {
          this.openName = []
        }
        this.$nextTick(() => this.$refs.menu.updateOpened())
      }
    },
    created() {
      if (this.$router.history.current.name === 'home') {
        this.type = 'home'
      } else {
        this.type = 'main'
      }
      this.activeName = 'userGuide'
    },
    mounted () {},
    methods: {
      handleSelect (name) {
        this.$router.push({ name: name })
      }
    }
  }
</script>
<style lang="less">
  .layout{
    width: 100%;
    .ivu-layout-header {
      background: #fff;
      padding: 0;
    }
    .ivu-layout-sider {
      background: #fff;
    }
    .ivu-layout-footer {
      background: #001529;
      color: #515a6e;
    }
    .ivu-menu {
      font-size: 1rem!important;
    }
    .ivu-menu-item {
      font-size: 1rem!important;
    }
  }
</style>
