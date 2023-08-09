import { ResultStatus } from '.'

interface UserInfo {
  userName: string
  password: string
}

interface tokenRequest extends UserInfo {
  roles: UserRole[]
}

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
