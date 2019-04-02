import axios from '@/libs/api.request'

export const getRoleList = (data) => {
  return axios.request({
    url: 'identity/identityRole',
    method: 'get',
    params:data
  })
}

// createRole
export const createRole = (data) => {
  return axios.request({
    url: 'identity/identityRole',
    method: 'post',
    data
  })
}

//loadRole
export const loadRole = (data) => {
  return axios.request({
    url: 'identity/identityRole/' + data.id,
    method: 'get'
  })
}

// editRole
export const editRole = (data) => {
  return axios.request({
    url: 'identity/identityRole/'+data.id,
    method: 'put',
    data
  })
}

// delete role
export const deleteRole = (ids) => {
  return axios.request({
    url: 'identity/identityRole/' + ids,
    method: 'delete'
  })
}

// batch command
export const batchCommand = (data) => {
  return axios.request({
    url: 'role/batch',
    method: 'get',
    params: data
  })
}

//load role list by user guid
export const loadRoleListByUserGuid = (user_guid) => {
  return axios.request({
    url: 'identity/identityUser/'+user_guid+'/roles',
    method: 'get'
  })
}

//load role simple list
export const loadSimpleList = () => {
  return axios.request({
    url: 'identity/identityRole/list',
    method: 'get'
  })
}

//assign permissions for role
export const assignPermission = (data) => {
  return axios.request({
    url: 'rbac/role/assign_permission',
    method: 'post',
    data
  })
}