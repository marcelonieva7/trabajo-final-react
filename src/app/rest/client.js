import axios from 'axios'
import Cookies from 'js-cookie'

const Authorization = `Bearer ${Cookies.get('token')}`

const exec = async request => {
  try {
    const response = await axios(request)
    return response
  } catch (err) {
    throw Error(err)
  }
}

const get = async (url, data) => {
  const request = {
    method: 'get',
    url,
    data,
    headers: {
      'Content-Type': 'application/json',
      Authorization,
    },
  }

  const res = await exec(request)
  return res.data
}

const post = async (url, data) => {
  const request = {
    method: 'post',
    url,
    data,
    headers: {
      'Content-Type': 'application/json',
      Authorization,
    },
  }

  const res = await exec(request)
  return res.data
}

const delet = async (url, data) => {
  const request = {
    method: 'delete',
    url,
    data,
    headers: {
      'Content-Type': 'application/json',
      Authorization,
    },
  }

  const res = await exec(request)
  return res.data
}

const patch = async (url, data) => {
  const request = {
    method: 'patch',
    url,
    data,
    headers: {
      'Content-Type': 'application/json',
      Authorization,
    },
  }

  const res = await exec(request)
  return res.data
}

const client = {
  get: (url, data = {}) => get(url, data),
  post: (url, data = {}) => post(url, data),
  delete: (url, data = {}) => delet(url, data),
  patch: (url, data = {}) => patch(url, data),
}

export default client
