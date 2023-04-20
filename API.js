import request from '@/commons/http.js' 


/* export default { 
  wechatLogin (params){
	  console.log('params',params,'POST')
	  return request('/api.php/user/wechatLogin',params);
  }
} */

export function login(data) {
  return request({url: '/api.php/user/getopenid',method: 'POST', data})
}
export function bindusers(data) {
  return request({url: '/api.php/user/bindusers',method: 'POST', data})
}
export function myBind(data) {
  return request({url: '/api.php/user/myBind',method: 'POST', data})
}
export function userAlbum(data) {
  return request({url: '/api.php/user/userAlbum',method: 'POST', data})
}
//图片上传
export function uploadImg(data) {
  return request({url: '/api.php/common/upload',method: 'POST', data})
}
//打卡
export function daka(data) {
  return request({url: '/api.php/user/signUp',method: 'POST', data})
}
//长护险选项
export function options(data) {
  return request({url: '/api.php/user/options',method: 'POST', data})
}
//城市
export function citys(data) {
  return request({url: '/api.php/common/getCity',method: 'POST', data})
}
//长护险自评
export function guardianScore(data) {
  return request({url: '/api.php/user/guardianScore',method: 'POST', data})
}
//家属自评打分等级
export function guardianScoreLevel(data) {
  return request({url: '/api.php/user/guardianScoreLevel',method: 'POST', data})
}
//长护险申请
export function applyInsurance(data) {
  return request({url: '/api.php/user/applyInsurance',method: 'POST', data})
}
//根据身份证查询用户
export function getagename(data) {
  return request({url: '/api.php/user/getagename',method: 'POST', data})
}
//长护险评估
export function insuranceAssessment(data) {
  return request({url: '/api.php/user/insuranceAssessment',method: 'POST', data})
}
//打分
export function score(data) {
  return request({url: '/api.php/user/score',method: 'POST', data})
}
//专家评估打分
export function professionalScore(data) {
  return request({url: '/api.php/user/professionalScore',method: 'POST', data})
}
// 更新用户信息
export function updateUserInfo(data) {
  return request({url: '/api.php/user/updateUserInfo',method: 'POST', data})
}
// 员工巡查打卡
export function workerCheck(data) {
  return request({url: '/api.php/user/workerCheck',method: 'POST', data})
}
// 员工巡查打卡
export function addAssessmentVideo(data) {
  return request({url: '/api.php/user/addAssessmentVideo',method: 'POST', data})
}
// 家属评分
export function addcomment(data) {
  return request({url: '/api.php/user/addcomment',method: 'POST', data})
}
// 机构巡查
export function patrolFeedback(data) {
  return request({url: '/api.php/user/patrolFeedback',method: 'POST', data})
}
// 居家巡查
export function homeFeedback(data) {
  return request({url: '/api.php/user/homeFeedback',method: 'POST', data})
}
// 获取护工信息
export function nurseInfo(data) {
  return request({url: '/api.php/user/nurseInfo',method: 'POST', data})
}
// 编辑护工信息
export function editNurse(data) {
  return request({url: '/api.php/user/editNurseInfo',method: 'POST', data})
}
// 机构列表
export function organizationList(data) {
  return request({url: '/api.php/user/organizationList',method: 'POST', data})
}
// 护工-已绑定用户
export function nurseMyBind(data) {
  return request({url: '/api.php/user/myBind',method: 'POST', data})
}
// 护工-绑定用户
export function nurseBindusers(data) {
  return request({url: '/api.php/user/bindusers',method: 'POST', data})
}
// 护工-解绑用户
export function nurseUnbind(data) {
  return request({url: '/api.php/user/unbind',method: 'POST', data})
}
// 护工-开始护理
export function startServer(data) {
  return request({url: '/api.php/user/startServer',method: 'POST', data})
}
// 护工-结束护理
export function endServer(data) {
  return request({url: '/api.php/user/endServer',method: 'POST', data})
}
// 护工-结束护理
export function unfinishedserverid(data) {
  return request({url: '/api.php/user/unfinishedserverid',method: 'POST', data})
}
// 头像上传
export function uploadAvata(data) {
  return request({url: '/api.php/user/uploadAvatar',method: 'POST', data})
}
// 通知
export function noticesList(data) {
  return request({url: '/api.php/user/noticesList',method: 'POST', data})
}
// 通知详情
export function noticesDetail(data) {
  return request({url: '/api.php/user/noticesDetail',method: 'POST', data})
}
// 集中评审宣讲签名
export function gatherAssessmentSign(data) {
  return request({url: '/api.php/user/gatherAssessmentSign',method: 'POST', data})
}
// 现场评定告知书签名
export function noticeAssessmentSign(data) {
  return request({url: '/api.php/user/noticeAssessmentSign',method: 'POST', data})
}
// 评估走访
export function assessmentFeedback(data) {
  return request({url: '/api.php/user/assessmentFeedback',method: 'POST', data})
}
// 获取用户压力数据
export function getSensorData(data) {
  return request({url: '/api.php/user/getSensorData',method: 'POST', data})
}
// 获取用户压力数据
export function professionalSort(data) {
  return request({url: '/api.php/user/professionalSort',method: 'POST', data})
}
// 汇报人签名
export function reportSignPic(data) {
  return request({url: '/api.php/user/reportSignPic',method: 'POST', data})
}