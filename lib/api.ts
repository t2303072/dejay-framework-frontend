import type { CommonResponse, InsertBoardReq, InsertBoardRes, ResultStatus, SelectBoardListRes } from '@/types'
import { ResultCode, ResultCodeMsg } from '@/types/auth'

// 로컬스토리지에 저장된 토큰 검증
const headerConfig = (): string => {
  let header = ''
  const access = localStorage.getItem('accessToken')
  const refresh = localStorage.getItem('refreshToken')

  if (access && refresh) {
    header = access
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

function checkExceptionError(code: ResultCode) {
  switch (code) {
    case 987:
      return '로그인 정보가 없습니다.'
    case 403:
      return '로그인 정보가 만료되었습니다.'
    case 200:
      return true
    default:
      return true
  }
}

export async function GET<T extends CommonResponse | ResultStatus>(path: string) {
  const header = headerConfig()
  const res = await fetch(`backend/${path}`, {
    headers: {
      Authorization: `Bearer ${header}`,
    },
  })
  const json = res.json()
  const resultStatus = res.status as ResultCode

  if (checkExceptionError(resultStatus) !== true) {
    alert(checkExceptionError(resultStatus))
  }

  return json
}

// 인증토큰 요청, 로그인시 사용
export async function AUTH_POST<T, U>(path: string, data: U): Promise<T> {
  localStorage.removeItem('access')
  localStorage.removeItem('refresh')

  const res = await fetch(`backend/${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  return res.json()
}

export async function POST<T, U>(path: string, data: U): Promise<T> {
  const header = headerConfig()

  const res = await fetch(`http://localhost:3000/backend/${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${header}` },
    body: JSON.stringify(data),
  })

  const json = res.json()
  const resultStatus = res.status as ResultCode

  if (checkExceptionError(resultStatus) !== true) {
    alert(checkExceptionError(resultStatus))
    window.location.replace('/')
  }

  return json
}

export async function GET_LOCAL<T>(path: string) {
  const res = await fetch(`local/${path}`)

  return res.json()
}
