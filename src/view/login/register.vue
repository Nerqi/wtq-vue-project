<template>
  <div class="register">
    <div class="login-form">
      <Form class="form" ref="registerForm" :model="registerForm" :rules="registerFormRule">
        <div class="login-info-title">
          <h2>账号注册</h2>
        </div>
        <FormItem prop="groupId">
          <Row type="flex" justify="end">
            <Col span="21">
              <Select placeholder="请选择所属项目组" v-model="registerForm.groupId">
                <Option v-for="item in projectList" :value="item.groupId" :key="item.groupId">{{ item.groupName }}</Option>
              </Select>
            </Col>
          </Row>
        </FormItem>
        <FormItem prop="organizeId">
          <Row type="flex" justify="end">
            <Col span="21">
              <Select placeholder="请选择所属组织" v-model="registerForm.organizeId">
                <Option v-for="item in orgList" :value="item.paramId" :key="item.paramId">{{ item.paramName }}</Option>
              </Select>
            </Col>
          </Row>
        </FormItem>
        <FormItem prop="staffCnApply">
          <Row type="flex" justify="end">
            <Col span="21">
              <Input placeholder="请输入用户名" v-model="registerForm.staffCnApply"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem prop="staffApply">
          <Row type="flex" justify="end">
            <Col span="21" >
              <Input placeholder="设置账号" v-model="registerForm.staffApply"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem prop="rolesId">
          <Row type="flex" justify="end">
            <Col span="21">
              <Select placeholder="请选择角色(可多选)" multiple v-model="registerForm.rolesId">
                <Option v-for="item in roleList" :value="item.paramId" :key="item.paramId">{{ item.paramName }}</Option>
              </Select>
            </Col>
          </Row>
        </FormItem>
        <FormItem prop="stationsId">
          <Row type="flex" justify="end">
            <Col span="21" >
              <Select placeholder="请选择岗位(可多选)" multiple v-model="registerForm.stationsId">
                <Option v-for="item in stationList" :value="item.paramId" :key="item.paramId">{{ item.paramName }}</Option>
              </Select>
            </Col>
          </Row>
        </FormItem>
        <FormItem prop="staffIdNo">
          <Row type="flex" justify="end">
            <Col span="21">
              <Input placeholder="请输入身份证号" v-model="registerForm.staffIdNo"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem prop="staffEmail">
          <Row type="flex" justify="end">
            <Col span="21">
              <Input placeholder="请输入邮箱" v-model="registerForm.staffEmail"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem prop="staffMobile">
          <Row type="flex" justify="end">
            <Col span="21">
              <Input placeholder="请输入手机号码" v-model="registerForm.staffMobile"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem class="login-info-footer">
          <Button type="primary" class="login-info-footer-btn" @click="submit('registerForm')" style="margin-right: 5px">注册</Button>
          <Button class="login-info-footer-btn" @click="canel">返回</Button>
        </FormItem>
      </Form>
      <div class="form-right">
        <p class="loginNavToThree"  @click="loginNavToThree">没有所属项目？立即新增</p>
        <p class="loginText" style="margin-top: 150px">账号命名规则：</p>
        <p class="loginText">1）如果中文名称为2个字，应该为中文名称全拼</p>
        <p class="loginText">2）如果中文名称超过2个字，应该取姓全拼，名取每个字汉语拼音首字母</p>
        <p class="loginText">3）如果账号重名，可以在账号后面加上数字后缀</p>
      </div>
    </div>
  </div>
</template>

<script>
  import loginData from './loginData'
  export default {
    name: 'register',
    data () {
      return {
        registerForm: {
          groupId: '',
          organizeId: '',
          staffCnApply: '',
          staffApply: '',
          rolesId: [],
          stationsId: [],
          staffIdNo: '',
          staffEmail: '',
          staffMobile: ''
        },
        registerFormRule: {
          groupId: [
            { required: true, message: '请选择所属项目组', trigger: 'change', type: 'number' }
          ],
          organizeId: [
            { required: true, message: '请选择所属组织', trigger: 'change', type: 'number' }
          ],
          staffCnApply: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ],
          staffApply: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { validator: this.$publicFunc.checkstaffApply }
          ],
          rolesId: [
            { required: true, message: '请选择角色', trigger: 'change', type: 'array' }
          ],
          stationsId: [
            { required: true, message: '请选择岗位', trigger: 'change', type: 'array' }
          ],
          staffIdNo: [
            { required: true, message: '请输入身份证号', trigger: 'blur' },
            { validator: this.$publicFunc.validateIdCard }
          ],
          staffEmail: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { validator: this.$publicFunc.validaEmails }
          ],
          staffMobile: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { validator: this.$publicFunc.validatephone }
          ]
        }
      }
    },
    computed: {
      projectList() {
        return loginData.projectList
      },
      orgList() {
        return loginData.orgList
      },
      roleList() {
        return loginData.roleList
      },
      stationList() {
        return loginData.stationList
      }
    },
    mounted() {},
    methods: {
      loginNavToThree() {
        this.$emit('loginNav', 3)
      },
      submit(registerForm) {
        this.$refs[registerForm].validate((valid) => {
          if (valid) {
            this.$Message.success({
              content: '尊敬的用户，您已完成账号注册信息的填写，工单编号为' + 123456789 + '，审批通过后，账号信息以邮件形式发送到您的邮箱，请及时关注邮箱！',
              duration: 0,
              closable: true
            })
            this.$router.push({ path: 'home' })
          } else {
            this.$Message.warning('请完善注册信息!')
          }
        })
      },
      canel() {
        this.$emit('loginNav', 1)
      }
    }
  }
</script>

<style lang="less">
  .register{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-form{
      width: 35%;
      background-color: white;
      display: flex;
      .form{
        width: 60%;
        .login-info-title{
          margin-bottom: 1rem;
          margin-top: 1rem;
          margin-left: 1rem;
          text-align: center;
        }
        .login-info-footer{
          width: 100%;
          .ivu-form-item-content{
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            width: 100%;
            .login-info-footer-btn{
              width: 43%;
              font-size: medium
            }
          }
        }
      }
      .form-right{
        width: 40%;
        margin-left: 10px;
        .loginNavToThree{
          font-size: 15px;
          color: #2d8cf0;
          cursor: pointer;
          margin-top: 70px;
        }
        .loginText{
          font-size: 10px;
          color: red;
        }
      }
    }
  }
</style>
