import { requestToken } from '@/services/login'
import type { CommonResponse, InsertBoardReq, InsertBoardRes, ResultStatus, SelectBoardListRes } from '@/types'

// 로컬스토리지에 저장된 토큰 검증
const headerConfig = (): string => {
  let header = ''
  const access = localStorage.getItem('accessToken')
  const refresh = localStorage.getItem('refreshToken')

  if (access && refresh) {
    header = `${access}`
  }
  if (!access && refresh) {
    // refresh 토큰만 존재할때 예외처리
    // 액세스 토큰 갱신하는 api
  }
  if (!access && !refresh) {
    window.location.replace('/')
  }

  return header
}

export async function GET<T extends CommonResponse | ResultStatus>(path: string) {
  const header = headerConfig()
  const res = await fetch(`backend/${path}`, {
    headers: {
      Authorization: header,
    },
  })
    .then((result) => result.json())
    .then((json) => {
      // 에러코드에 따라 예외처리
      if (json.resultStatus.code === 987) {
        window.location.replace('/')
      } else if (json.resultStatus.code === 200) {
        return json
      }
    })
    .catch((err) => {
      return err
    })

  return res
}

// 인증토큰 요청, 로그인시 사용
export async function AUTH_POST<T, U>(path: string, data: U): Promise<T> {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')

  const res = await fetch(`backend/${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  return res.json()
}

export async function POST<T, U>(path: string, data: U): Promise<T> {
  const header = headerConfig()

  const res = await fetch(`backend/${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: headerConfig() },
    body: JSON.stringify(data),
  })

  return res.json()
}

export async function GET_LOCAL<T>(path: string) {
  const res = await fetch(`local/${path}`)

  return res.json()
}
