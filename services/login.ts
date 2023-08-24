import { ResultStatus } from '@/types'
import { tokenRequest, TokenResponse, UserInfo } from '@/types/auth'

import { AUTH_POST, GET, GET_LOCAL, POST } from '@/lib/api'

export const login = async (data: UserInfo) => AUTH_POST<TokenResponse, UserInfo>('login', data)

export const token = async (data: tokenRequest) => AUTH_POST<TokenResponse, tokenRequest>('token/reissue-token', data)

export const tokenAuth = async (data: tokenRequest) =>
  AUTH_POST<TokenResponse, tokenRequest>('token/authentication-info', data)

export const requestLogin = async (loginData: UserInfo) => {
  try {
    const res = await login(loginData)

    if (res.resultStatus.code === 200) {
      localStorage.setItem('accessToken', res.data.tokenObject.accessToken)
      localStorage.setItem('refreshToken', res.data.tokenObject.refreshToken)

      return res
    } else {
      alert(res.resultStatus.message)
    }
  } catch (e) {
    console.log(e)
  }
}

export const requestToken = async (loginData: tokenRequest) => {
  try {
    const res = await token(loginData)

    if (res.resultStatus.code === 200) {
      localStorage.setItem('accessToken', res.data.tokenObject.accessToken)
      localStorage.setItem('refreshToken', res.data.tokenObject.refreshToken)

      return res
    }
  } catch (e) {
    console.log(e)
  }
}

export const requestLogout = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}
