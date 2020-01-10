import Mock from 'mockjs'
import listDemo from '../components/main/components/listDemo'
Mock.mock('/header/system_notice_list', 'post', listDemo.system_notice_list)
