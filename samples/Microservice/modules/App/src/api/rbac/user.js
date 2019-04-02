import axios from '@/libs/api.request'

export const getUserList = (data) => {
  return axios.request({
    url: 'identity/identityUser',
    method: 'get',
    params:data
  })
}

// createUser
export const createUser = (data) => {
  return axios.request({
    url: 'identity/identityUser',
    method: 'post',
    data
  })
}

//loadUser
export const loadUser = (data) => {
  return axios.request({
    url: 'identity/identityUser/' + data.id,
    method: 'get'
  })
}

// editUser
export const editUser = (data) => {
  return axios.request({
    url: 'identity/identityUser/'+data.id,
    method: 'put',
    data
  })
}

// delete user
export const deleteUser = (ids) => {
  return axios.request({
    url: 'identity/identityUser/' + ids,
    method: 'delete'
  })
}

// batch command
export const batchCommand = (data) => {
  return axios.request({
    url: 'rbac/user/batch',
    method: 'get',
    params: data
  })
}

// save user roles
export const saveUserRoles = (data) => {
  return axios.request({
    url: 'rbac/user/save_roles',
    method: 'post',
    data
  })
}
