<template>
  <div class="header-layout">
    <div class="header-left">
      <img src="../../../assets/images/pkq.jpg" class="header-img"/>
      <Divider type="vertical" />
      <h1>自嗨vue框架平台</h1>
    </div>
    <div class="header-menu">
      <p style="cursor:pointer;" v-for="item in header_menu" :key="item.menu_id" class="header-menu-item"  @click="showPage(item.menu_type)">{{item.menu_name}}</p>
    </div>
    <div class="header-right">
      <Dropdown @on-click="handleSelect" trigger="hover" @on-visible-change="visivle">
        <Icon type="ios-list" style="cursor:pointer;" size="35" color="#128af6"/>
        <DropdownMenu slot="list" v-for="item in sider_menu" :key="item.menu_url">
          <DropdownItem v-if="!item.children_list" :name="item.menu_url" ref="list">{{item.menu_name}}</DropdownItem>
          <Dropdown placement="right-start" :name="item.menu_url" v-if="item.children_list">
            <DropdownItem>
              {{item.menu_name}}
              <Icon type="ios-arrow-forward"></Icon>
            </DropdownItem>
            <DropdownMenu slot="list">
              <DropdownItem class="DropdownItemChild" :name="item_child.menu_url" v-for="(item_child) in item.children_list" :key="item_child.menu_url" ref="list">{{item_child.menu_name}}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </DropdownMenu>
      </Dropdown>
      <Poptip trigger="hover" placement="bottom-end">
        <Icon style="cursor:pointer;" type="ios-volume-up" :color="type === 's'? 'white' : '#128af6'"/>
        <div class="content-main" slot="content">
          <ul class="list-group">
            <li class="list-group-item">
              <h4>{{pubTime}} 更新公告</h4>
              <ul v-for="(item, index) in system_notice_list" :key="index">
                <li>
                  {{item.text}}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Poptip>
      <Button type="primary" @click="handleSelect('login')">登录/注册</Button>
      <Icon type="md-person" color="#128af6"/>
      <p style="font-size: 0.5em">{{user_info}}({{groupName}})</p>
      <Icon style="cursor:pointer;" type="ios-power" color="#128af6" @click="confirm"/>
    </div>
  </div>
</template>
<script>
  import listDemo from '../listDemo'
  import Menu from '../../menu'
  export default {
    name: 'HeaderBar',
    props: {
      type: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        newRoute: '',
        tmp_menu_list: [],
        selected: false,
        user_info: '管理员',
        groupName: '前端开发',
        pubTime: '1995-05-27'
      }
    },
    computed: {
      header_menu() {
        return listDemo.header_menu
      },
      sider_menu() {
        return Menu
      },
      system_notice_list() {
        return listDemo.system_notice_list
      },
      access_token() {
        return this.$store.getters['user/getAccess_token'] || ''
      }
    },
    watch: {
      '$route' (newRoute) {
        this.newRoute = newRoute
      }
    },
    mounted() {
    },
    methods: {
      visivle(e) {
        if (e === true) {
          if (!this.newRoute) {
            this.$refs.list[0].selected = true
          }
          if (this.newRoute && this.$refs.list && this.$refs.list.length) {
            for (let i = 0; i < this.$refs.list.length; i++) {
              if (this.$refs.list[i].name && this.newRoute.name) {
                if (this.newRoute.name === this.$refs.list[i].name) {
                  this.$refs.list[i].selected = true // 目前控制台报错，原因，此组件不支持直接修改源代码里面的值，必须从通过prop来传参，后期优化
                } else {
                  this.$refs.list[i].selected = false
                }
              }
            }
          }
        }
      },
      handleSelect (name) {
        this.$router.push({ name: name })
      },
      confirm () {
        this.$Modal.confirm({
          title: '确认退出？',
          onOk: () => {
            this.$Message.info('成功退出')
            this.$router.push({ name: 'home' })
            this.$store.dispatch('user/access_token', '')
            localStorage.clear()
            sessionStorage.clear()
          },
          onCancel: () => {
            this.$Message.info('已取消退出')
          }
        })
      },
      showPage(type) {
        if (type === 'home') {
          this.$router.push({ name: 'home' })
        } else {
          this.$publicFunc.showPage(type)
        }
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
  .header-layout{
    height: 100%;
    width: 100%;
    display: flex;
    color: #000c17;
    .header-left{
      height: 100%;
      width: 25%;
      display: flex;
      align-items: center;
      .ivu-divider, .ivu-divider-vertical {
        height: 4rem !important;
        width: 4px !important;
        background-color: #128af6;
      }
      .header-img{
        height: 100%;
      }
    }
    .header-menu{
      height: 100%;
      width: 55%;
      display: flex;
      align-items: center;
      padding-left: 5rem;
      .header-menu-item{
        margin-left: 2rem;
        font-size: 1.5rem;
      }
    }
    .header-right{
      height: 100%;
      width: 20%;
      padding-right: 0.5rem;
      font-size: 1.5em;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .ivu-dropdown{
        line-height: normal;
      }
      .content-main{
        color: #000c17;
      }
    }
  }
</style>
