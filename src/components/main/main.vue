<template>
  <Layout class="layout">
    <Header :style="{height: headerHeight}">
      <HeaderBar :type="type"></HeaderBar>
    </Header>
    <Layout>
      <Home v-if="type === 'home'"></Home>
      <Sider :style="{height: siderHeight, minWidth: siderWidth}" v-show="type === 'main'">
        <Menu theme="dark" width="auto" ref="menu" @on-select="handleSelect" :active-name="activeName" :open-names="openName" accordion>
          <div v-for="item in menu_list" :key="item.menu_url">
            <MenuItem v-if="!item.children_list" :name="item.menu_url"><Icon :type="item.menu_icon" />{{item.menu_name}}</MenuItem>
            <Submenu v-if="item.children_list" :name="item.menu_id">
              <template slot="title">
                <Icon :type="item.menu_icon" />
                {{item.menu_name}}
              </template>
              <MenuItem :name="item_child.menu_url" v-for="(item_child) in item.children_list" :key="item_child.menu_url"> {{item_child.menu_name}}</MenuItem>
            </Submenu>
          </div>
        </Menu>
      </Sider>
      <Content :style="{height: siderHeight}" v-show="type === 'main'" class="content">
        <div class="content-breadcrumb">
          <header-bread-crumb show-icon  :list="breadCrumbList"></header-bread-crumb>
        </div>
        <div class="content-tags"></div>
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
  import headerBreadCrumb from './components/header-bar/headerBreadcrumb'
  import FooterBar from '../../components/main/components/footer'
  import Menu from './menu'
  export default {
    name: 'Main',
    components: {
      HeaderBar,
      headerBreadCrumb,
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
        this.$store.commit('menu/setSiderMenuMap', Menu)
        return Menu
      },
      breadCrumbList () {
        return this.$store.state.menu.breadCrumbList
      }
    },
    watch: {
      '$route' (newRoute) {
        this.activeName = newRoute.name
        if (newRoute.name === 'home') {
          this.type = 'home'
        } else {
          this.type = 'main'
        }
        this.$store.commit('menu/setBreadCrumb', newRoute)
        let SiderMenuMap = this.$store.state.menu.siderMenuMap
        if (SiderMenuMap.has(newRoute.name) && SiderMenuMap.get(newRoute.name).parent_menu_id) {
          this.openName.push(SiderMenuMap.get(newRoute.name).parent_menu_id)
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
      this.activeName = this.menu_list[0].menu_url
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
      background: #001529;
    }
    .ivu-menu-item > i {
      margin-right: 13px;
    }
    .ivu-layout-footer {
      background: #11477a;
      color: #515a6e;
    }
    .ivu-menu {
      font-size: 1rem!important;
    }
    .ivu-menu-item {
      font-size: 1rem!important;
    }
    .content{
      .content-breadcrumb{
        width: 100%;
        height: 2rem;
        background: #fff;
      }
      .content-tags{
        width: 100%;
        height: 2rem;
        background-color: green;
      }
    }
  }
</style>
