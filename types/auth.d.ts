import { ResultStatus } from '.'

interface UserInfo {
  userName: string
  password: string
}

export type ResultCodeMsg =
  | {
      code: 200
      message: 'success'
    }
  | {
      code: 400
      message: 'fail'
    }
  | {
      code: 403
      message: '로그인 정보가 만료되었습니다.'
    }
  | {
      code: 987
      message: '로그인 정보가 없습니다.'
    }

export type ResultCode = ResultCodeMsg['code']

interface tokenRequest {}

type UserRole = 'SUPERVISOR' | 'USER'

interface TokenData {
  data: {
    tokenObject: {
      key: string
      accessToken: string
      refreshToken: string
    }
  }
}

interface TokenResponse {
  resultStatus: ResultStatus
  data: {
    tokenObject: {
      key: string
      accessToken: string
      refreshToken: string
    }
  }
}
