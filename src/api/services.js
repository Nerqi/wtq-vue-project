// 接口服务
export default {
  // 使用手册--附加下载
  userManual: {
    downAttach: '/aialm/business/com.ai.action.DownHandBook' // 在建需求展示
  },
  // 顶部菜单 获取公告
  header: {
    getHeaderVersionDeclaration: '/aialm/business/com.unified.web.VersionAction' // 顶部公告
  },
  // 个人中心
  personalCenter: {
    getUserInfo: '/oauth/api/userinfo', // 获取人员信息
    getGroupInfo: '/oauth/api/groupInfo', // 获取项目组信息
    getReqCountInfo: '/aialm/business/com.unified.web.InterfaceAction', // 需求和工单信息获取
    getMacCountInfo: '/aialm/business/com.unified.web.InterfaceAction', // 我的资源信息获取
    getUndoOrder: '/aialm/business/com.unified.web.InterfaceAction', // 待办工单列表
    getVersionDeclaration: '/aialm/business/com.unified.web.InterfaceAction', // 系统公告列表
    getResMonitor: '/aialm/business/com.unified.web.InterfaceAction', // 资源告警
    getReqAler: '/aialm/business/com.unified.web.InterfaceAction', // 需求告警
    getImportReq: '/aialm/business/com.unified.web.InterfaceAction', // 重点需求
    getHostReport: '/aialm/business/com.unified.web.InterfaceAction', // 物理机使用统计表
    getVirReport: '/aialm/business/com.unified.web.InterfaceAction', // 虚拟机使用统计表
    getConstructReq: '/aialm/business/com.unified.web.InterfaceAction' // 在建需求展示
  },
  // 登陆注册
  login: {
    checkToken: '/oauth/api/checkToken', // 检查认证token
    CreateCodeImage: '/oauth/api/verify/createCodeImage', // 获取验证码
    LoginByUsername: '/oauth/api/login', // 登录
    getUserInfo: '/oauth/api/user/account', // 获取登陆人信息
    getProjectList: '/oauth/api/register/getGroups', // 查询所有项目组
    getOrgList: '/oauth/api/register/getOrganizations', // 查询归属组织
    getRoles: '/oauth/api/register/getRoles', // 查询角色
    getStations: '/oauth/api/register/getStations', // 查询岗位
    createAccount: '/oauth/api/register/createAccount', // 注册
    getDepartments: '/oauth/api/group/getDepartments', // 查询所有部门
    createGroup: '/oauth/api/group/createGroup' // 创建项目组
  },
  // DevOps  电子看板  单点登录跳转接口
  DevOpsLogin: {
    dzkb: '/dzkb/user/login',
    paas: '/paas/user/verifyLoginParams.action'
  }
}
